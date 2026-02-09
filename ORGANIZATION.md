# EmDreams Website - Code Organization

## Project Structure

The codebase has been reorganized for better maintainability and scalability:

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── ui/             # Reusable UI components
│   └── *.tsx           # Feature components (Cards, etc.)
├── constants/          # Application constants
│   └── index.ts        # Company info, navigation items, categories
├── data/               # Data files (separated from components)
│   ├── contact.ts      # Contact information and FAQs
│   ├── projects.ts     # Portfolio projects
│   ├── services.ts     # Service descriptions and work steps
│   ├── servicePackages.ts  # Service pricing packages
│   └── team.ts         # Team member information
├── pages/              # Page components
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   └── Team.tsx
└── types/              # TypeScript type definitions
    └── index.ts        # All interfaces and types
```

## Key Improvements

### 1. **Separation of Concerns**
- **Data** is now separated from **Components**
- **Types** are centralized in one location
- **Constants** are in their own file

### 2. **Removed Placeholder Content**
All placeholder "magic pattern" content has been removed:
- ❌ Removed `#` placeholder links
- ❌ Removed hardcoded email/phone numbers
- ✅ Replaced with empty strings or references to constants
- ✅ Social links only show when URLs are provided

### 3. **Centralized Configuration**
Edit these files to customize your site:

#### `src/constants/index.ts`
Update company information, stats, and configuration:
```typescript
export const COMPANY_INFO = {
  name: 'EmDreams',
  email: '', // Add your email
  phone: '', // Add your phone
  location: '', // Add your location
  social: {
    github: '', // Add your GitHub URL
    linkedin: '', // Add your LinkedIn URL
    // ...
  },
  stats: {
    projectsCompleted: 150,
    clientsServed: 50,
    yearsOfExperience: 8,
  },
};
```

#### `src/data/team.ts`
Update team member information:
- Replace placeholder images with real team photos
- Update bios, skills, and social links
- Add or remove team members as needed

#### `src/data/projects.ts`
Update portfolio projects:
- Replace placeholder images with real project screenshots
- Update project details, challenges, solutions, and results
- Add or remove projects

#### `src/data/servicePackages.ts`
Update service offerings and pricing:
- Modify package features and prices
- Add or remove service categories

#### `src/data/contact.ts`
Update contact information and FAQs

## How to Add Real Data

### 1. Company Information
Open `src/constants/index.ts` and fill in your details:
```typescript
email: 'hello@yourdomain.com',
phone: '+1-234-567-8900',
whatsapp: '+1-234-567-8900',
location: 'Your City, Country',
```

### 2. Social Media Links
In the same file, add your social media URLs:
```typescript
social: {
  github: 'https://github.com/yourcompany',
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
},
```

### 3. Team Photos
Replace the Unsplash placeholder URLs in `src/data/team.ts` with:
- Your own uploaded images (store in `public/images/team/`)
- Or keep as empty strings and handle missing images in the component

### 4. Project Images
Same for `src/data/projects.ts` - use real screenshots of your work

## Benefits of This Structure

1. **Easy to Maintain** - All data in one place per feature
2. **Type Safe** - TypeScript ensures data consistency
3. **Reusable** - Components can be reused with different data
4. **Scalable** - Easy to add new services, team members, or projects
5. **Clean** - No hardcoded placeholder values in components

## Next Steps

1. ✅ Fill in `src/constants/index.ts` with your real company info
2. ✅ Update `src/data/team.ts` with your team members
3. ✅ Update `src/data/projects.ts` with your real projects
4. ✅ Update `src/data/servicePackages.ts` with your pricing
5. ✅ Add real images to replace Unsplash placeholders
6. ✅ Test all pages to ensure everything works correctly

## Notes

- Empty links won't be clickable (they're styled as disabled)
- Social media icons only show when URLs are provided
- All placeholder content has been removed or marked for replacement
- The site will work with the current setup, but you should add your real data for production use
