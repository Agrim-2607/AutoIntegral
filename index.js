/*
 * Simple Node/Express backend example showing how to initialize Supabase server client
 * and expose endpoints for signup, login, and example insert/fetch operations.
 *
 * Important:
 *  - This is server-side code only; DO NOT expose the SERVICE ROLE KEY to client-side code.
 *  - Uses environment variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *  - If environment variables are missing the server will exit and list missing ones.
 */

// Load environment variables from .env in development
require("dotenv").config();

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const PORT = 4000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json());

// Check for required environment variables at startup
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
const missing = requiredEnvVars.filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error('[ERROR] Missing required environment variables:', missing.join(', '));
  console.error('Please add them to your environment or to a .env file (see .env.example).');
  process.exit(1);
}

// Initialize Supabase client with service role key (server-side only)
// - Use process.env.SUPABASE_URL and process.env.SUPABASE_SERVICE_ROLE_KEY
// - The service role key has elevated privileges and must never be sent to the browser
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  // Optional: set auth.refreshTokenUseCookie or other options for server behavior
});

// --- AUTH ROUTES ---

// POST /auth/signup
// Body: { email, password, metadata? }
// Creates a new user via Supabase Admin API (server-side) and returns the created user object (not password).
app.post('/auth/signup', async (req, res) => {
  try {
    const { email, password, metadata } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });

    // Create user using Supabase admin API (requires service role key)
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: metadata || {},
      email_confirm: true // optional: auto-confirm on creation
    });

    if (error) return res.status(400).json({ error: error.message });

    // Example: insert a profile row into a `profiles` table to store additional details
    // (You can remove/modify this to match your DB schema.)
    await supabase.from('profiles').insert([
      { id: data.id, email: data.email, created_at: new Date().toISOString() }
    ]);

    return res.status(201).json({ user: data });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /auth/login
// Body: { email, password }
// Signs in via Supabase (server-side) and returns session info (access/refresh token).
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });

    // Sign in with email and password. This returns a session with access token.
    // On server-side you can handle sessions/tokens as needed (e.g., create secure httpOnly cookie).
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return res.status(401).json({ error: error.message });

    // IMPORTANT: The access token is short-lived. If sending to the browser, prefer secure httpOnly cookies.
    return res.status(200).json({ session: data.session });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /profiles
// Example: insert data into a table named `profiles`.
// Body: { id?, email, display_name }
app.post('/profiles', async (req, res) => {
  try {
    const { id, email, display_name } = req.body;
    if (!email) return res.status(400).json({ error: 'Missing email' });

    const { data, error } = await supabase.from('profiles').insert([
      { id, email, display_name }
    ]);

    if (error) return res.status(400).json({ error: error.message });
    return res.status(201).json({ inserted: data });
  } catch (err) {
    console.error('Insert profile error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /profiles
// Example: fetch rows from `profiles` table
app.get('/profiles', async (req, res) => {
  try {
    const { data, error } = await supabase.from('profiles').select('*').limit(100);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ profiles: data });
  } catch (err) {
    console.error('Fetch profiles error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/', (req, res) => res.send('AutoIntegral backend is running'));
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is connected successfully"
  });
});


// ✅ Test Supabase route
app.get('/test-supabase', async (req, res) => {
  try {
    const { data, error } = await supabase.from('your_table_name').select('*').limit(1); 
    if (error) throw error;
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
