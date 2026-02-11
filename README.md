<div align="center">
  <img src="src/assets/Emdreams Logo.png" alt="EmDreams Logo" width="300"/>
</div>

# EmDreams Website

Official website for EmDreams - A software development company specializing in web development, mobile applications, and cloud solutions.

## About EmDreams

EmDreams is a software development company founded by Geethanjana Prabuddhika, with expertise in building practical, user-centered solutions across web, desktop, and immersive platforms. We deliver innovative digital solutions that drive business growth and enhance user experiences.

## Features

- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Portfolio Showcase**: Dynamic project gallery with filtering by category (Web, Mobile, Cloud)
- **Service Packages**: Detailed pricing and service offerings for different business needs
- **Team Profiles**: Comprehensive team member showcase with skills and social links
- **Contact System**: Integrated contact form for client inquiries
- **Fast Performance**: Optimized build with Vite for lightning-fast load times
- **Dockerized**: Ready for containerized deployment

## Technologies Used

### Frontend
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 5.2.0** - Next-generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **Docker** - Containerization
- **Nginx** - Web server
- **Netlify** - Hosting platform

## Project Structure

```
EmDreams-Website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   └── ui/             # UI primitives (Button, Card, Dialog, etc.)
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── Services.tsx    # Services and pricing
│   │   ├── Portfolio.tsx   # Project showcase
│   │   ├── Team.tsx        # Team members
│   │   └── Contact.tsx     # Contact form
│   ├── data/               # Static data
│   │   ├── services.ts     # Services information
│   │   ├── servicePackages.ts  # Pricing packages
│   │   ├── projects.ts     # Portfolio projects
│   │   ├── team.ts         # Team member data
│   │   └── contact.ts      # Contact information
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   └── assets/             # Images and static files
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx server configuration
├── netlify.toml            # Netlify deployment config
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Geethanjana99/EmDreams-Website.git
cd EmDreams-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code linting

## Services Offered

### Web Development
- Custom web applications with modern technologies
- Responsive design for optimal user experience
- Packages from $5,000 (Starter) to $25,000+ (Pro)

### Mobile Apps
- Native and cross-platform mobile solutions
- iOS and Android development
- Packages from $15,000 (Starter) to $50,000+ (Pro)

### Cloud Solutions
- Scalable cloud infrastructure
- Multi-cloud management
- Enterprise-grade solutions from $20,000+

## Team

Our talented team includes:
- **Geethanjana Prabuddhika** - Founder & CEO
- **Sayuru Herath** - Software Engineer
- **Kashmila Dharmasiri** - UI/UX Designer & Digital Marketing
- **Kanushka Gayan** - Software Engineer
- **Geeth Liyanage** - Software Engineer
- **Chamod Malindu** - Business Analyst
- **Ashan Miyuru** - DevOps Engineer
- **Sadew Hiruditha** - QA Engineer
- **Chanuth Hewawissa** - Data Analyst

## Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build -t emdreams-website .

# Run the container
docker run -p 80:80 emdreams-website
```

## Netlify Deployment

The site is configured for automatic deployment on Netlify. The `netlify.toml` file contains the build configuration.

## Portfolio Highlights

- **FinTech Dashboard** - Real-time financial analytics platform
- **Healthcare Mobile App** - Patient management system with 50,000+ active users
- **E-commerce Platform** - Marketplace handling $5M+ monthly transactions
- **Cloud Infrastructure Platform** - Multi-cloud management solution
- And more...

## Contact

For inquiries about projects or services, visit our [Contact Page](https://emdreams.netlify.app/contact) or connect with us on social media.

## License

Copyright © 2026 EmDreams. All rights reserved.

## Contributing

This is a private company website. For collaboration opportunities, please contact us through the website.

---

Built with ❤️ by EmDreams Team
