# Supabase Setup Guide for EmDreams Website

## Overview
This guide will help you set up Supabase as the backend database for the EmDreams admin panel, allowing data to sync across all browsers and devices.

---

## Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in the details:
   - **Project Name**: EmDreams Website
   - **Database Password**: Choose a strong password (save it securely)
   - **Region**: Choose closest to your location
5. Click "Create new project" and wait for setup to complete (~2 minutes)

---

## Step 2: Get Your API Credentials

1. In your Supabase project, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

3. Update your `.env` file in the project root:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## Step 3: Create Database Tables

In your Supabase project:

1. Go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the SQL below
4. Click "Run" to create all tables

```sql
-- ============================================
-- EMDREAMS WEBSITE DATABASE SCHEMA
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. PROJECTS TABLE
-- ============================================
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  challenge TEXT,
  solution TEXT,
  results JSONB DEFAULT '[]'::jsonb,
  technologies JSONB DEFAULT '[]'::jsonb,
  contributors JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. TEAM MEMBERS TABLE
-- ============================================
CREATE TABLE team_members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  department TEXT,
  image TEXT NOT NULL,
  bio TEXT NOT NULL,
  skills JSONB DEFAULT '[]'::jsonb,
  social_github TEXT,
  social_linkedin TEXT,
  social_twitter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 3. SERVICES TABLE
-- ============================================
CREATE TABLE services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 4. SERVICE PACKAGES TABLE
-- ============================================
CREATE TABLE service_packages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category TEXT NOT NULL,
  packages JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 5. FAQS TABLE
-- ============================================
CREATE TABLE faqs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 6. CONTACT INFO TABLE
-- ============================================
CREATE TABLE contact_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  value TEXT NOT NULL,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 7. COMPANY INFO TABLE (Single Row)
-- ============================================
CREATE TABLE company_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  stats_projects_completed INTEGER DEFAULT 0,
  stats_clients_served INTEGER DEFAULT 0,
  stats_years_experience INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_team_members_department ON team_members(department);
CREATE INDEX idx_service_packages_category ON service_packages(category);

-- ============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CREATE POLICIES (Allow public read, admin write)
-- For now, we'll allow all operations with anon key
-- You can restrict this later with proper authentication
-- ============================================

-- Projects policies
CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON projects FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON projects FOR DELETE USING (true);

-- Team members policies
CREATE POLICY "Allow public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON team_members FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON team_members FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON team_members FOR DELETE USING (true);

-- Services policies
CREATE POLICY "Allow public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON services FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON services FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON services FOR DELETE USING (true);

-- Service packages policies
CREATE POLICY "Allow public read access" ON service_packages FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON service_packages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON service_packages FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON service_packages FOR DELETE USING (true);

-- FAQs policies
CREATE POLICY "Allow public read access" ON faqs FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON faqs FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON faqs FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON faqs FOR DELETE USING (true);

-- Contact info policies
CREATE POLICY "Allow public read access" ON contact_info FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON contact_info FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON contact_info FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON contact_info FOR DELETE USING (true);

-- Company info policies
CREATE POLICY "Allow public read access" ON company_info FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON company_info FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON company_info FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON company_info FOR DELETE USING (true);

-- ============================================
-- INSERT DEFAULT COMPANY INFO
-- ============================================
INSERT INTO company_info (tagline, description, stats_projects_completed, stats_clients_served, stats_years_experience)
VALUES (
  'Build. Market. Deliver.',
  'We transform your ambitious ideas into powerful digital solutions that drive growth and deliver measurable results.',
  150,
  50,
  8
);
```

---

## Step 4: Create Storage Bucket for Images

The application uses Supabase Storage for team photos and project images.

### 4a. Create the Storage Bucket

1. In Supabase Dashboard, go to **Storage** (left sidebar)
2. Click **Create a new bucket**
3. Configure:
   - **Name**: `images`
   - **Public bucket**: ✅ Yes (checked)
   - **File size limit**: 5MB
4. Click **Create bucket**

### 4b. Create Folders

1. Click on the **images** bucket
2. Click **Create folder** → Name: `team` → Create
3. Click **Create folder** → Name: `Projects` → Create

### 4c. Set Storage Policies

Go to **SQL Editor** and run this SQL:

```sql
-- Storage bucket policies for image uploads
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

CREATE POLICY "Allow uploads"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'images' );

CREATE POLICY "Allow deletes"
ON storage.objects FOR DELETE
USING ( bucket_id = 'images' );

CREATE POLICY "Allow updates"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'images' );
```

**Storage Structure:**
```
images (bucket)
├── team/          ← Team member photos
└── Projects/      ← Project images
```

---

## Step 5: Verify Tables Were Created

1. In Supabase, go to **Table Editor**
2. You should see 7 tables:
   - `projects`
   - `team_members`
   - `services`
   - `service_packages`
   - `faqs`
   - `contact_info`
   - `company_info`

---

## Step 6: Test the Connection

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Open the browser console (F12)
3. You should NOT see errors about missing Supabase environment variables

---

## Step 7: Start Using the Admin Panel

Your setup is complete! You can now:

### Upload Images
- Admin panel will show **Choose Image** button for team members and projects
- Images are automatically uploaded to Supabase Storage
- Preview shows before saving
- Images sync across all devices

### Manage Data
- All changes in admin panel save to Supabase
- Data persists across browsers and devices
- View/edit data directly in Supabase Table Editor

---

## Image Upload Requirements

- **Formats**: JPG, PNG, GIF, WEBP
- **Size**:
  - Team photos: 400x400px recommended
  - Project images: 800x600px recommended
- **Max file size**: 5MB

---

## Next Steps

After completing this setup:
- Your admin panel will now save data to Supabase
- Changes will be visible across all browsers and devices
- DaImage upload fails: "row-level security policy"
- Run the storage policies SQL from Step 4c
- Verify policies exist: **Storage** → **Policies** → `images` bucket
- Ensure bucket is marked as Public

### ta persists even after clearing browser cache
- You can view and edit data directly in Supabase Table Editor

---

## Security Considerations

**Current Setup**: Public access for development  
**For Production**, you should:
1. Set up Supabase Authentication
2. Update RLS policies to require authentication
3. Restrict write access to authenticated admin users only

---

## Troubleshooting

### "Missing Supabase environment variables" error
- Check that `.env` file exists in project root
- Verify environment variable names start with `VITE_`
- Restart your development server after adding `.env`

### "Failed to fetch" or network errors
- Verify your Supabase project URL is correct
- Check that your anon key is correct
- Ensure your Supabase project is not paused

### Tables not appearing
- Re-run the SQL schema in SQL Editor
- Check for error messages in SQL Editor output
- Verify RLS is enabled and policies are created

---

## Support

For more information:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
