# EmDreams Admin Panel

## Overview

The EmDreams website now includes a comprehensive admin panel for managing all website content from a centralized dashboard.

## Admin Access

### Credentials
- **Username:** `emdreamsadmin`
- **Password:** `geetha.078`

### How to Access
To access the admin panel, navigate to `/admin` or click the admin button. You can modify the App.tsx component to add a navigation option or directly access it by setting `currentPage` to `admin`.

**Quick Access Methods:**
1. Add `/admin` to your site URL (e.g., `http://localhost:5173/admin`)
2. Modify the URL path manually
3. Add an admin link in the navigation (optional)

## Features

The admin panel provides complete control over:

### 1. **Projects Management**
- Add, edit, and delete project portfolio items
- Manage project details including:
  - Title and category
  - Description and images
  - Challenge and solution statements
  - Results and achievements
  - Technologies used

### 2. **Team Management**
- Add, edit, and delete team members
- Manage team information:
  - Name, role, and department
  - Profile images
  - Biography
  - Skills
  - Social media links (GitHub, LinkedIn, Twitter)

### 3. **Services Management**
- Manage main service offerings
- Edit service titles and descriptions
- Control what appears on the home page

### 4. **Service Packages Management**
- Manage service categories (Web, Mobile, Cloud)
- Configure pricing packages for each category
- Edit package features and benefits
- Set highlighted/featured packages

### 5. **FAQs Management**
- Add, edit, and delete frequently asked questions
- Manage Q&A pairs for the contact page

### 6. **Contact Information Management**
- Update contact methods (Email, WhatsApp, Location)
- Edit contact descriptions and action prompts

## Data Persistence

All changes made through the admin panel are automatically saved to the browser's **localStorage**. This means:

- ✅ Changes persist across browser sessions
- ✅ No server or database required
- ✅ Instant updates to the live website
- ⚠️ Data is browser-specific (clearing browser data will reset to defaults)
- ⚠️ Each browser/device maintains its own data

### Data Storage Keys
The following localStorage keys are used:
- `emdreams_projects` - Portfolio projects
- `emdreams_team` - Team members
- `emdreams_services` - Service offerings
- `emdreams_service_packages` - Service packages/pricing
- `emdreams_faqs` - FAQ items
- `emdreams_contact_info` - Contact information

## Security Note

⚠️ **Important:** The current implementation uses basic client-side authentication for simplicity. For production use with sensitive data, consider implementing:
- Server-side authentication
- Backend API for data management
- Database integration
- Role-based access control

## Usage Tips

1. **Test Before Publishing:** Make changes in a staging environment first
2. **Backup Data:** Export your localStorage data periodically
3. **Image URLs:** Use reliable image hosting services (e.g., Cloudinary, AWS S3)
4. **Consistent Formatting:** Maintain consistent styles across entries
5. **Categories:** Use consistent category IDs when adding new content

## Resetting Data

To reset all data to defaults:
1. Clear browser localStorage
2. Or manually delete the specific keys listed above
3. Refresh the page

## Development Notes

### File Structure
```
src/
├── pages/admin/
│   ├── AdminLogin.tsx          # Login page
│   ├── AdminDashboard.tsx      # Main dashboard
│   ├── ProjectsManager.tsx     # Projects CRUD
│   ├── TeamManager.tsx         # Team CRUD
│   ├── ServicesManager.tsx     # Services CRUD
│   ├── PackagesManager.tsx     # Packages CRUD
│   ├── FAQsManager.tsx         # FAQs CRUD
│   └── ContactInfoManager.tsx  # Contact info CRUD
├── utils/
│   ├── auth.ts                 # Authentication utilities
│   ├── storage.ts              # localStorage utilities
│   └── dataHooks.ts            # Data fetching hooks
└── types/
    └── admin.ts                # Admin-specific types
```

### Adding New Data Types

To add new manageable data types:
1. Create a new manager component in `src/pages/admin/`
2. Add storage functions to `src/utils/storage.ts`
3. Create a data hook in `src/utils/dataHooks.ts`
4. Import and use in `AdminDashboard.tsx`

## Support

For questions or issues with the admin panel, refer to the code documentation or contact the development team.
