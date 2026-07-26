let supabaseClient = null;

function initSupabase() {
  if (typeof supabase === 'undefined') return;
  supabaseClient = supabase.createClient(
    MANDARINCOURSE_CONFIG.SUPABASE_URL,
    MANDARINCOURSE_CONFIG.SUPABASE_ANON_KEY
  );
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

const DISPOSABLE_DOMAINS = ['mailinator.com','guerrillamail.com','jobraux.com','guerrillamail.org','guerrillamail.net','10minutemail.com','temp-mail.org','tempmail.com','throwaway.email','yopmail.com','trashmail.com','sharklasers.com','maildrop.cc','getnada.com','burnermail.io','hmamail.com','inboxbear.com','mailmetrash.com','mailexpire.com','spambox.us','tempail.com','dispostable.com','mailcatch.com','mintemail.com','spamgourmet.com','sneakemail.com','spamfree24.org','jetable.org','emailondeck.com','mail.tm','temp-email.com','throwmail.io','fyii.de','mytemp.email','spamspot.org','discard.email','wegwerfmail.de','kurzepost.de','anonymail.net','mailforspam.com','spam.la','tempemail.net','zippymail.info','filzmail.com','spam4.me','e4ward.com','maileater.com','spambob.org','spambob.net','spambob.com','mytrashmail.com','trash2009.com','mt2009.com','trashymail.com','mailexpire.com','dontreg.com','no-spam.ws','0-mail.com','30minutemail.com','banit.club','binkmail.com','bobmail.info','chogmail.com','cool.fr.nf','correo.blogos.net','courriel.fr.nf','crapmail.org','email-fake.com','emailias.com','emailinfive.com','emailspam.it','eyepaste.com','fakeinbox.com','fastacura.com','frapmail.com','gipsymail.info','great-host.in','gustr.com','h8s.org','inboxalias.com','inkey.info','jellyfigs.net','jet-renovation.fr','junkmail.com','junkmail.org','kulturbetrieb.info','leeching.net','letterboxes.org','mail.by','mail.mezimages.net','mail-plastic.com','mailexpire.com','mailfreeonline.com','mailin8r.com','mailmetrash.com','mailmoat.com','mailnator.com','mailnull.com','mailsac.com','mailline.net','mailsuck.net','maillv.org','malahov.de','meinspamschutz.de','msgos.com','nepwk.com','net.ivyday.com','netzidiot.de','neverbox.com','nowmymail.com','nwldx.com','oneoffmail.com','pa9e.com','pookmail.com','privacy.net','proxymail.eu','punkass.com','PutThisInYourSpamAccount.com','quickinbox.com','receiveee.com','rejectmail.com','rtrtr.com','s0ny.net','safe-mail.net','schafmail.de','shortmail.net','slaskpost.se','smaik.de','smap.4nmv.ru','smellfear.com','sneakmail.de','sofimail.com','sofort-mail.de','sogetthis.com','spam.com','spamavert.com','spambox.info','spamday.com','spamdecoy.net','spamfaq.net','spamhole.com','spamgoes.in','spamherelots.com','spamhereplease.com','spamjosef.de','spamkill.info','spaml.com','spamoff.xyz','spamserver.de','spamserver.info','spamsphere.com','spamthe.net','spamthis.co.uk','spamtrail.com','spamtroll.net','stopdropandroll.com','storj99.com','suremail.info','temporaryemail.us','tempomail.fr','thankyou2010.com','thankyou2011.com','thembegmail.com','trash-2009.com','trash-2010.com','trash-2011.com','trashdevil.de','trashmail.at','trashmail.ws','trashmailer.com','trashymail.net','trillianpro.com','turual.com','tyldd.com','uggsrock.com','veryrealemail.com','voidbay.com','weg-werf-mail.de','wegwerfmail.de','wh4f.org','wh4t.com','whyspam.me','willselfdestruct.com','winemantech.com','wronghead.com','wuzup.net','xagloo.com','xemaps.com','xents.com','xmaily.com','xoxy.net','yep.it','yogamaven.com','yopmail.fr','yopmail.net','ypmail.webarnak.fr.eu.org','yuurok.com','zehnminutenmail.de','zippymail.info','zombo.com'];

function isDisposableEmail(email) {
  var domain = email.split('@')[1].toLowerCase();
  return DISPOSABLE_DOMAINS.indexOf(domain) !== -1 || DISPOSABLE_DOMAINS.some(function(d) { return domain.endsWith('.' + d); });
}

async function signUpWithEmail(email, password) {
  if (!supabaseClient) return toast('Supabase not initialized', 'var(--accent)');
  if (isDisposableEmail(email)) return toast('Please use another email address (temporary emails are not allowed)', 'var(--accent)');
  const { error, data } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    if (error.status === 429 || (error.message && error.message.toLowerCase().includes('rate'))) {
      return toast('Too many signup attempts. Please wait a few minutes and try again.', 'var(--accent)');
    }
    return toast(error.message, 'var(--accent)');
  }
  if (data?.user) {
    localStorage.setItem('trial_start', Date.now().toString());
  }
  toast('Check your email to confirm sign up!', 'var(--green)');
  closeAuthModal();
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

function openAuthModal() {
  document.getElementById('authEmail').value = '';
  document.getElementById('authPassword').value = '';
  showSignIn();
  document.getElementById('authModal').style.display = 'flex';
}
