let supabaseClient = null;

function initSupabase() {
  if (typeof supabase === 'undefined') return;
  supabaseClient = supabase.createClient(
    MANDARINCOURSE_CONFIG.SUPABASE_URL,
    MANDARINCOURSE_CONFIG.SUPABASE_ANON_KEY
  );
  supabaseClient.auth.onAuthStateChange(function(event, session) {
    if (event === 'PASSWORD_RECOVERY') {
      var newPassword = prompt(t('Enter your new password (min 6 characters):'));
      if (newPassword && newPassword.length >= 6) {
        supabaseClient.auth.updateUser({ password: newPassword }).then(function(r) {
          if (r.error) return toast(r.error.message, 'var(--accent)');
          toast(t('Password updated successfully! Sign in with your new password.'), 'var(--green)');
          supabaseClient.auth.signOut();
        });
      }
    }
    if (event === 'SIGNED_IN' && session) {
      checkSession();
    }
  });
  checkSession();
}

function applyAdminStatus(email) {
  if (email === MANDARINCOURSE_CONFIG.ADMIN_EMAIL) {
    localStorage.setItem('is_premium', 'true');
  }
}

async function checkSession() {
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    document.getElementById('userEmailDisplay').textContent = session.user.email;
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('navSignInBtn').style.display = 'none';
    document.getElementById('navUserInfo').style.display = 'flex';
    document.getElementById('navUserEmail').textContent = session.user.email;
    applyAdminStatus(session.user.email);
    updatePremiumUI();
    buildLvTabs();
    startActivityTracking();
    syncProgressFromCloud(session.user.id);
    supabaseClient.from('user_profiles').select('display_name,trial_start').eq('user_id', session.user.id).single().then(function(r) {
      if (r.data && r.data.display_name) { localStorage.setItem('user_display_name', r.data.display_name); if (typeof updateProfileDisplay === 'function') updateProfileDisplay(); }
      if (r.data && r.data.trial_start && !localStorage.getItem('trial_start')) {
        localStorage.setItem('trial_start', new Date(r.data.trial_start).getTime().toString());
      } else if (!localStorage.getItem('trial_start')) {
        localStorage.setItem('trial_start', Date.now().toString());
      }
    }).catch(function(){
      if (!localStorage.getItem('trial_start')) localStorage.setItem('trial_start', Date.now().toString());
    });
  }
}

async function signUpWithEmail(email, password) {
  if (!supabaseClient) return toast('Supabase not initialized', 'var(--accent)');
  const { error, data } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    if (error.status === 429 || (error.message && error.message.toLowerCase().includes('rate'))) {
      return toast('Too many signup attempts. Please wait a few minutes and try again.', 'var(--accent)');
    }
    return toast(error.message, 'var(--accent)');
  }
  const user = data?.user;
  if (user) {
    localStorage.setItem('trial_start', Date.now().toString());
  }
  // If confirmation is off, the user is signed in immediately. Apply the signed-in UI.
  if (data?.session || (user && user.confirmed_at)) {
    const userEmail = user ? user.email : email;
    document.getElementById('userEmailDisplay').textContent = userEmail;
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('navSignInBtn').style.display = 'none';
    document.getElementById('navUserInfo').style.display = 'flex';
    document.getElementById('navUserEmail').textContent = userEmail;
    applyAdminStatus(userEmail);
    startActivityTracking();
    updatePremiumUI();
    (async function() {
      try { await supabaseClient.from('user_profiles').upsert({ user_id: user.id, trial_start: new Date().toISOString() }); } catch(e) {}
    })();
    closeAuthModal();
    return toast(t('Account created — you are signed in!'), 'var(--green)');
  }
  // Confirmation is still required by the dashboard: guide the user warmly.
  closeAuthModal();
  toast(t('Account created! Check your email for the confirmation link, then sign in.'), 'var(--green)');
}

async function signInWithEmail(email, password) {
  if (!supabaseClient) return toast('Supabase not initialized', 'var(--accent)');
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return toast(error.message, 'var(--accent)');
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    document.getElementById('userEmailDisplay').textContent = session.user.email;
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('navSignInBtn').style.display = 'none';
    document.getElementById('navUserInfo').style.display = 'flex';
    document.getElementById('navUserEmail').textContent = session.user.email;
    applyAdminStatus(session.user.email);
    startActivityTracking();
    supabaseClient.from('user_profiles').select('trial_start').eq('user_id', session.user.id).single().then(function(r) {
      if (r.data && r.data.trial_start) {
        localStorage.setItem('trial_start', new Date(r.data.trial_start).getTime().toString());
      } else {
        if (!localStorage.getItem('trial_start')) {
          localStorage.setItem('trial_start', Date.now().toString());
          (async function() {
            try { await supabaseClient.from('user_profiles').upsert({ user_id: session.user.id, trial_start: new Date().toISOString() }); } catch(e) {}
          })();
        }
      }
    }).catch(function(){
      if (!localStorage.getItem('trial_start')) localStorage.setItem('trial_start', Date.now().toString());
    });
    updatePremiumUI();
    buildLvTabs();
    syncProgressFromCloud(session.user.id);
    supabaseClient.from('user_profiles').select('display_name').eq('user_id', session.user.id).single().then(function(r) {
      if (r.data && r.data.display_name) { localStorage.setItem('user_display_name', r.data.display_name); if (typeof updateProfileDisplay === 'function') updateProfileDisplay(); }
    }).catch(function(){});
    if (typeof updateProfileDisplay === 'function') updateProfileDisplay();
  }
  closeAuthModal();
  toast('Signed in! Progress will sync to cloud.', 'var(--green)');
}

async function signOutUser() {
  if (!supabaseClient) return;
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) await saveProgressToCloud(session.user.id);
  await supabaseClient.auth.signOut();
  document.getElementById('authButtons').style.display = 'flex';
  document.getElementById('userInfo').style.display = 'none';
  document.getElementById('navSignInBtn').style.display = 'flex';
  document.getElementById('navUserInfo').style.display = 'none';
  toast('Signed out.', 'var(--gold)');
}

async function saveProgressToCloud(userId) {
  if (!supabaseClient || !userId) return;
  const progress = {
    user_id: userId,
    hsk_progress: JSON.stringify(LV.map(l => ({ n: l.n, pc: l.pc, dn: l.dn }))),
    vocab_score: localStorage.getItem('vocab_score') || '0',
    streak: localStorage.getItem('study_streak') || '0',
    updated_at: new Date().toISOString(),
  };
  await supabaseClient.from('user_progress').upsert(progress, { onConflict: 'user_id' });
}

async function syncProgressFromCloud(userId) {
  if (!supabaseClient || !userId) return;
  const { data } = await supabaseClient
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (data) {
    if (data.hsk_progress) {
      const cloud = JSON.parse(data.hsk_progress);
      cloud.forEach((c, i) => { if (i < LV.length) { LV[i].pc = Math.max(LV[i].pc, c.pc); LV[i].dn = LV[i].dn || c.dn; } });
      buildHSK();
    }
    if (data.vocab_score && parseInt(data.vocab_score) > parseInt(localStorage.getItem('vocab_score') || '0')) {
      localStorage.setItem('vocab_score', data.vocab_score);
    }
    toast('Progress synced from cloud!', 'var(--green)');
  }
}

let _activityUid = null, _activityAccum = 0, _activityLast = 0, _activityTimer = null;

function _activityFlush() {
  if (!_activityUid || _activityAccum <= 0) return;
  const secs = _activityAccum;
  _activityAccum = 0;
  if (!supabaseClient) return;
  supabaseClient.rpc('add_activity_seconds', { p_user_id: _activityUid, p_seconds: secs })
    .then(function(r) { if (r.error) _activityAccum += secs; })
    .catch(function() { _activityAccum += secs; });
}

function _activityTick() {
  if (!_activityUid) return;
  if (!document.hidden && document.visibilityState === 'visible') {
    const now = Date.now();
    let delta = Math.round((now - _activityLast) / 1000);
    if (delta > 45) delta = 0;
    _activityLast = now;
    _activityAccum += Math.max(0, delta);
  } else {
    _activityLast = Date.now();
  }
  if (_activityAccum >= 15) _activityFlush();
}

function startActivityTracking() {
  if (!supabaseClient) return;
  supabaseClient.auth.getUser().then(function({ data }) {
    if (!data.user) return;
    if (_activityUid === data.user.id) return;
    _activityUid = data.user.id;
    _activityLast = Date.now();
    _activityAccum = 0;
    if (_activityTimer) clearInterval(_activityTimer);
    _activityTimer = setInterval(_activityTick, 15000);
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) { _activityLast = Date.now(); _activityFlush(); }
      else _activityLast = Date.now();
    });
    window.addEventListener('beforeunload', _activityFlush);
  });
}

function closeAuthModal() {
  document.getElementById('authModal').style.display = 'none';
}

function showSignUp() {
  document.getElementById('authModalTitle').textContent = 'Sign Up';
  document.getElementById('authSubmitBtn').textContent = 'Create Account';
  document.getElementById('authToggleText').innerHTML = 'Already have an account? <a href="#" onclick="showSignIn()" style="color:var(--gold)">Sign In</a>';
  document.getElementById('authSubmitBtn').onclick = () => {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPassword').value;
    if (email && pass) signUpWithEmail(email, pass);
  };
}

function showSignIn() {
  document.getElementById('authModalTitle').textContent = 'Sign In';
  document.getElementById('authSubmitBtn').textContent = 'Sign In';
  document.getElementById('authToggleText').innerHTML = 'Don\'t have an account? <a href="#" onclick="showSignUp()" style="color:var(--gold)">Sign Up</a>';
  document.getElementById('authSubmitBtn').onclick = () => {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPassword').value;
    if (email && pass) signInWithEmail(email, pass);
  };
}

async function resetPassword() {
  if (!supabaseClient) return toast('Supabase not initialized', 'var(--accent)');
  const email = document.getElementById('authEmail').value.trim();
  if (!email) return toast(t('Enter your email address first'), 'var(--gold)');
  closeAuthModal();
  toast(t('Sending password reset email...'), 'var(--gold)');
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://mandarincourse.app'
  });
  if (error) {
    if (error.message && error.message.toLowerCase().includes('rate')) {
      return toast(t('Rate limited — please wait 1 minute before trying again'), 'var(--gold)');
    }
    return toast(error.message, 'var(--accent)');
  }
  toast(t('Password reset email sent! Check your inbox.'), 'var(--green)');
}

function openAuthModal() {
  document.getElementById('authEmail').value = '';
  document.getElementById('authPassword').value = '';
  showSignIn();
  document.getElementById('authModal').style.display = 'flex';
  const em = document.getElementById('authEmail');
  if (em) setTimeout(function(){ em.focus(); }, 50);
}
