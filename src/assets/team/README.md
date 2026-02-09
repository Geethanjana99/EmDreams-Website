# Team Member Photos

This folder contains photos for team members displayed on the website.

## Adding Team Photos

1. Add your team member photos to this folder
2. Recommended naming convention: `firstname-lastname.jpg` or `firstname-lastname.png`
   - Example: `geethanjana-prabuddhika.jpg`
   - Example: `sayuru-herath.png`

3. Recommended image specifications:
   - **Size**: 400x400 pixels (square)
   - **Format**: JPG or PNG
   - **File size**: Keep under 200KB for optimal loading
   - **Background**: Professional headshot with neutral or transparent background

## Updating the Team Data

After adding photos to this folder, update the `src/data/team.ts` file:

```typescript
// Import the photos at the top of the file
import geethanjanaPic from '../assets/team/geethanjana-prabuddhika.jpg';
import sayuruPic from '../assets/team/sayuru-herath.jpg';
// ... add more imports

// Then use them in the teamMembers array
export const teamMembers: TeamMember[] = [
  {
    name: 'Geethanjana Prabuddhika',
    role: 'Founder & CEO',
    department: 'EmDreams',
    image: geethanjanaPic, // Use the imported image
    // ... rest of the data
  },
  // ... other team members
];
```

## Current Team Members

Based on `src/data/team.ts`, you need photos for:
1. Geethanjana Prabuddhika - Founder & CEO
2. Sayuru Herath - Software Engineer
3. Geeth Liyanage - Software Engineer
4. Kanushka Gayan - Software Engineer
5. Additional team members (check team.ts for complete list)

## Placeholder Images

Currently using Unsplash placeholder images. Replace with actual team photos when available.
