// supabaseClient.js
// This file is the bridge between our website and our database
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // make sure .env is loaded

// These are the secret keys that allow us to talk to our Supabase databse
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// We export this 'supabase' tool so we can save or get data in any other file
export const supabase = createClient(supabaseUrl, supabaseKey);