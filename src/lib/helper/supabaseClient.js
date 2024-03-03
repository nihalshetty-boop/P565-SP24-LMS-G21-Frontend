import { createClient } from '@supabase/supabase-js'


// Create a single supabase client for interacting with your database
export const supabase = createClient("https://wxewxtxjjlakgvujdxgz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZXd4dHhqamxha2d2dWpkeGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTg3NzcsImV4cCI6MjAyNDczNDc3N30.bxFM2umMo44yUczZmXYn33eR9DGiKrJq7JdYf2OUxe0");