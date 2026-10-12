// v161 gate: the chat provider log (Part B — "which model answered?").
// Source-level wiring checks: the served-reply path persists {provider,
// was_fallback, had_correction} to Supabase chat_provider_log via an AWAITED,
// fail-open PostgREST insert (the whisper_shadow pattern), and setup.sql
// carries the locked-down DDL (RLS + revoke all from public/anon/auth +
// service_role insert only, NO text column).
const path = require('path');
const fs = require('fs');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

const server = fs.readFileSync(path.join(__dirname, '..', '..', 'server.js'), 'utf8');
const sql = fs.readFileSync(path.join(__dirname, '..', '..', 'supabase', 'setup.sql'), 'utf8');

// --- server wiring ---
check('1. persistProviderLog posts to /rest/v1/chat_provider_log',
  /async function persistProviderLog\([\s\S]{0,900}?\/rest\/v1\/chat_provider_log/.test(server), '');
check('2. the insert is AWAITED at the call site (survives serverless freeze)',
  /await persistProviderLog\(servedModel/.test(server), '');
check('3. fail-open: try/catch AND service-key guard (an outage never blocks chat)',
  /async function persistProviderLog[\s\S]{0,1400}?catch \(e\) \{\}/.test(server) &&
  /async function persistProviderLog[\s\S]{0,600}?if \(!serviceKey\) return/.test(server), '');
check('4. bounded by a timeout (AbortSignal.timeout)',
  /async function persistProviderLog[\s\S]{0,1400}?AbortSignal\.timeout\(1500\)/.test(server), '');
check('5. payload carries provider + was_fallback + had_correction',
  /body: JSON\.stringify\(\[\{ provider:.*was_fallback:.*had_correction:.*\}\]\)/.test(server), '');
check('6. had_correction = the [CORRECTION:] marker test on the served text',
  /persistProviderLog\(servedModel, servedModel !== ordered\[0\]\.model, \/\\\[CORRECTION:\/i\.test\(text\)\)/.test(server), '');
check('7. the insert happens BEFORE res.json (the v159b freeze lesson)',
  /await persistProviderLog\([\s\S]{0,200}?return res\.json/.test(server), '');

// --- SQL (the block the user runs in the dashboard) ---
const ddlM = sql.match(/create table if not exists public\.chat_provider_log[\s\S]*?grant insert on public\.chat_provider_log to service_role;/);
check('8. setup.sql carries the complete chat_provider_log block', !!ddlM, '');
const ddl = ddlM ? ddlM[0] : '';
check('9. columns: id/ts/provider/was_fallback/had_correction — NO reply text',
  ddl.indexOf('provider') !== -1 && ddl.indexOf('was_fallback') !== -1 && ddl.indexOf('had_correction') !== -1 &&
  ddl.indexOf('reply') === -1 && ddl.indexOf(' content') === -1, '');
check('10. RLS enabled + revoke from public, anon, authenticated + service_role insert grant',
  ddl.indexOf('enable row level security') !== -1 &&
  /revoke all on public\.chat_provider_log from public, anon, authenticated/.test(ddl) &&
  ddl.indexOf('grant insert on public.chat_provider_log to service_role') !== -1, '');

console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
process.exitCode = pass ? 0 : 1;
