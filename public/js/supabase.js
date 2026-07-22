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
  }
}

async function signUpWithEmail(email, password) {
  if (!supabaseClient) return toast('Supabase not initialized', 'var(--accent)');
  const { error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return toast(error.message, 'var(--accent)');
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
    updatePremiumUI();
    buildLvTabs();
    syncProgressFromCloud(session.user.id);
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
