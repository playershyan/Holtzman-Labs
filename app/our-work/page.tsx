'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard, { Project } from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Sample Highlight Projects
  const highlightProjects: Project[] = [
    {
      id: '1',
      title: 'Vera.lk - Vehicle Marketplace Platform',
      shortDescription: 'Comprehensive vehicle marketplace platform for the Sri Lankan market with advanced promotions and messaging.',
      description: `🚧 DEVELOPMENT NOTICE: This project is currently in active development. You may encounter errors or incomplete features while exploring the platform.

A comprehensive vehicle marketplace platform built for the Sri Lankan market. The system connects buyers and sellers across 10+ vehicle categories, featuring advanced promotion systems, real-time messaging, and business profiles for professional dealers. Built with performance and security as core priorities.

Key Features

• Multi-category listings - Support for cars, SUVs, vans, three-wheelers, motorcycles, heavy-duty vehicles, and property
• Wanted requests system - Buyers post requirements, sellers contact directly with matching inventory
• 4-tier promotion system - Featured listings (Rs. 5,000/30d), Top Ads (Rs. 2,500/7d), Urgent tags, Daily Refresh with fair rotation algorithm
• Real-time messaging - Buyer-seller communication with structured offer management and counter-offers
• Business profiles - Enhanced dealer accounts with verification badges, operating hours, and branding
• Phone verification - OTP-based verification via Text.lk SMS gateway (10-minute expiry, 3 attempts)
• Image optimization - Cloudinary integration with WebP/AVIF support, responsive URLs, automatic format detection
• Admin dashboard - Role-based moderation (admin/moderator/reviewer), bulk import, activity logging
• Deletion safety - 30-day grace period with backup/restore capabilities and admin approval workflow

Challenges Solved

• Achieved 76% database performance improvement - Reduced from 157 warnings to 37 through RLS optimization (O(n) → O(1) via SELECT auth.uid() caching)
• Fair promotion distribution - Implemented rotation algorithm ensuring equal exposure across competing ads using impression tracking and hourly cycles
• Eliminated duplicate listings - 24-hour duplicate detection using composite index (user_id, make, model, year, created_at) for O(1) lookups
• Scaled promotion system - Concurrent-safe rotation using FOR UPDATE SKIP LOCKED to handle simultaneous requests
• Comprehensive audit trail - Full activity logging across 45 database tables for compliance and security
• Multi-provider authentication - Email/password, Google OAuth, and phone OTP with session management across devices

Technology Stack

Frontend & Backend: Next.js 14 (App Router), TypeScript, React 18
Database & Storage: Supabase (PostgreSQL 17.4), Row Level Security (RLS), 42 migration files
External Services: Cloudinary (image processing), Text.lk SMS Gateway, Google Gemini AI, Sentry (monitoring), Upstash Redis (rate limiting)
Infrastructure: Vercel (standalone deployment), ISR caching (120s listings, 30s wanted), Capacitor (mobile app)
Security & Performance: Rate limiting (7 tiers: auth, api, search, upload, messaging, AI, admin), CSRF protection, reCAPTCHA (v2/v3), 4 critical composite indexes, 12+ database functions, 76% performance optimization
Testing: Jest (70% coverage threshold), React Testing Library, Playwright (E2E)

Metrics:
- 45 database tables with 100% RLS coverage
- 90+ API endpoints with full documentation
- 6 major features (listings, wanted, promotions, messaging, business, admin)
- 10+ vehicle categories supported
- 4-tier promotion system with rotation
- 30-day deletion safety with restore`,
      image: '/projects/veratemplate.jpg',
      technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudinary', 'Vercel', 'React 18', 'Redis'],
      liveUrl: 'https://vera.lk',
      githubUrl: '',
      category: 'project'
    }
    // {
    //   id: '2',
    //   title: 'Healthcare Management System',
    //   shortDescription: 'HIPAA-compliant patient management system for medical practices.',
    //   description: `Enterprise healthcare management system designed for multi-location medical practices. Built with security and compliance as top priorities.

    // Key Features:
    // • Patient records management with audit trails
    // • Appointment scheduling with automated reminders
    // • Prescription management and e-prescribe integration
    // • Billing and insurance claims processing
    // • HIPAA-compliant data encryption

    // Technical Achievements:
    // • Zero security incidents since launch
    // • 99.98% uptime over 18 months
    // • Handles 50,000+ patient records
    // • Sub-200ms API response times`,
    //   image: '',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    //   liveUrl: '',
    //   githubUrl: '',
    //   category: 'project'
    // },
    // {
    //   id: '3',
    //   title: 'Real-Time Analytics Dashboard',
    //   shortDescription: 'Live data visualization platform for business intelligence.',
    //   description: `Real-time analytics dashboard for a SaaS company serving 5,000+ customers. Processes millions of events per day and provides actionable insights.

    // Key Features:
    // • Real-time event streaming and processing
    // • Custom report builder with drag-and-drop interface
    // • Automated anomaly detection and alerts
    // • Multi-tenant architecture with role-based access
    // • Export to PDF, Excel, and CSV

    // Performance Metrics:
    // • Processes 50M+ events daily
    // • <100ms query response time for dashboards
    // • 99.99% data accuracy
    // • Reduced infrastructure costs by 40% through optimization`,
    //   image: '',
    //   technologies: ['Vue.js', 'Python', 'ClickHouse', 'Apache Kafka', 'GraphQL', 'Tailwind CSS'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: '',
    //   category: 'project'
    // }
  ];

  // Sample Templates
  const templates: Project[] = [
    {
      id: 't1',
      title: 'Aurium.lk - Jewelry E-Commerce Platform',
      shortDescription: 'E-commerce platform for premium jewelry and gemstones in Sri Lanka.',
      description: `E-commerce platform for premium jewelry and gemstones in Sri Lanka (Aurium.lk). Online catalog system for fine jewelry including rings, necklaces, earrings, bracelets, watches, and certified gemstones.

Key Features:
• Product catalog with material specifications (gold/silver/platinum purity, gemstone types)
• Shopping cart and wishlist management
• Order processing with multiple payment methods (PayHere gateway for LKR)
• Product reviews and ratings
• Advanced filtering (material, purity, gemstone, price, certification)
• Certification tracking (GIA certified diamonds, BIS hallmarked gold)
• Newsletter subscription
• Mobile app support via Capacitor (Android build configured)
• Trust badges and secure payment indicators

Challenges Solved:

Note: Database migrations reference legacy vehicle marketplace optimization work (RLS policy optimizations, rotation algorithms). Current jewelry implementation uses mock data pending full database integration.

Technology Stack

Next.js 14 (App Router), TypeScript, Supabase (PostgreSQL), Tailwind CSS, PayHere, Cloudinary, Capacitor, Radix UI, Vercel`,
      image: '/projects/auriumtemplate2.jpg',
      technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PayHere', 'Cloudinary', 'Capacitor', 'Vercel'],
      liveUrl: 'https://aurium-one.vercel.app/',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't2',
      title: 'Gym & Fitness Website Template',
      shortDescription: 'Modern, responsive single-page gym website with smooth animations and dynamic navigation.',
      description: `A modern, responsive gym and fitness website template designed as a single-page application. The site provides an engaging user experience with smooth animations, dynamic navigation, and comprehensive sections showcasing gym services, class schedules, and membership packages.

Key Features:
• Responsive single-page design with smooth scroll navigation
• Animated hero section with call-to-action
• Interactive accordion UI for service information
• Dynamic class schedule with weekly timetable
• Tiered pricing packages ($59, $69, $99/month)
• Workout gallery with responsive image grid
• Contact form with social media integration
• WOW.js scroll animations for enhanced visual appeal
• Mobile-optimized hamburger navigation menu

Challenges Solved:
• Created seamless navigation without page refreshes for better UX
• Implemented responsive design that adapts to all screen sizes
• Optimized social media sharing with custom OG image generation
• Built modular sections for easy customization and branding

Technology Stack

HTML5, CSS3, JavaScript (ES5+), jQuery, WOW.js (Animate.css), Puppeteer (OG image generation), Vercel (Deployment)`,
      image: '/projects/gym1template2.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WOW.js', 'Puppeteer', 'Vercel'],
      liveUrl: 'https://gym-demo-1-tau.vercel.app/',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't3',
      title: 'BEROTOT - Responsive Gym Website',
      shortDescription: 'Modern, fully responsive gym website with BMI calculator and interactive health tools.',
      description: `A modern, fully responsive gym website designed to showcase fitness programs, membership pricing, and interactive health tools. Built with mobile-first methodology, the site provides an engaging user experience across all devices with smooth scroll animations and interactive features.

Key Features:
• Mobile-first responsive design optimized for all screen sizes
• Interactive BMI (Body Mass Index) calculator with health status feedback
• Email subscription form for member registration and updates
• Smooth scroll reveal animations throughout the site
• Dynamic navigation with active section highlighting
• Three-tier membership pricing system (Basic, Premium, Diamond)
• Four specialized fitness programs (Flex Muscle, Cardio Exercise, Basic Yoga, Weight Lifting)
• Social media integration (Facebook, Twitter, Instagram)
• Scroll-to-top button for improved navigation
• Dynamic header that changes on scroll

Challenges Solved:
• Created seamless mobile navigation with toggle menu for optimal mobile UX
• Implemented real-time BMI calculation with instant health status feedback
• Designed engaging scroll animations that enhance user experience without impacting performance
• Built flexible pricing system that clearly presents membership options
• Optimized asset loading for fast page performance across all devices

Technology Stack

HTML5, CSS3, JavaScript (ES6+), ScrollReveal.js, RemixIcon, Vercel (Deployment)`,
      image: '/projects/gym-demo-2-ten.vercel.app_.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ScrollReveal.js', 'RemixIcon', 'Vercel'],
      liveUrl: 'https://gym-demo-2-ten.vercel.app',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't4',
      title: 'Fitness & Wellness Platform',
      shortDescription: 'Comprehensive fitness platform with class schedules, trainers, and membership plans.',
      description: `A comprehensive fitness and wellness platform built for a modern gym facility. The website provides complete information about gym services, classes, trainers, and membership plans with an engaging, responsive user interface designed to attract and retain fitness enthusiasts.

Key Features:
• Multiple fitness class offerings (Weightlifting, Indoor Cycling, Kettlebell Power, Boxing)
• Interactive BMI calculator for personalized fitness assessment
• Dynamic class timetable with scheduling information
• Professional trainer profiles and team showcase
• Flexible membership pricing plans (Drop-in, 6-month, 12-month unlimited)
• Interactive image gallery showcasing facilities and equipment
• Blog section with fitness tips and health guides
• Integrated contact form and appointment booking system

Challenges Solved:
• Created an engaging, mobile-responsive interface for fitness enthusiasts
• Organized complex class and scheduling information intuitively
• Showcased gym facilities through interactive gallery with lightbox
• Simplified membership selection with clear pricing tiers and features
• Implemented smooth navigation with multi-page architecture

Technology Stack

HTML5, CSS3 (Bootstrap), JavaScript (jQuery), Owl Carousel, Magnific Popup, Font Awesome, Google Fonts`,
      image: '/projects/gym-demo-3-ten.vercel.app_.jpg',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'Owl Carousel', 'Font Awesome'],
      liveUrl: 'https://gym-demo-3-teal.vercel.app/',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't5',
      title: 'Global Burger Hub',
      shortDescription: 'Modern restaurant website with online ordering, real-time cart management, and PWA functionality.',
      description: `A modern restaurant website for Global Burger Hub, featuring a seamless online ordering experience with real-time cart management and responsive design. Built as a Progressive Web App (PWA) for enhanced mobile experience and offline capabilities.

Key Features:
• Interactive menu browsing with dynamic filtering system
• Shopping cart with persistent state using localStorage
• Real-time order total calculation
• Contact form for customer inquiries
• Specialty items showcase with smooth animations
• Fully responsive design optimized for mobile and desktop
• PWA functionality with service worker for offline access
• Open Graph meta tags for enhanced social media sharing

Challenges Solved:
• Implemented client-side state management for seamless cart experience
• Created smooth animations using Framer Motion for modern UX
• Built PWA capabilities for app-like mobile experience
• Optimized images and performance with Next.js Image component
• Designed intuitive filtering system for easy menu navigation

Technology Stack

Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Context API, Vercel`,
      image: '/projects/restaurant-demo-2.jpg',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Context API', 'Vercel'],
      liveUrl: 'https://restaurant-demo-2-umber.vercel.app/',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't6',
      title: 'Law Firm Website Template',
      shortDescription: 'Professional law firm website with practice area management, blog system, and admin dashboard.',
      description: `A professional, full-featured website template built specifically for law firms and legal practices with practice area management, blog publishing, contact forms, and admin dashboard.

Key Features:
• Dynamic practice area pages with customizable service listings
• Built-in blog system with rich text editor and image uploads
• Responsive design optimized for all devices
• SEO-optimized with structured data for better search rankings
• Admin dashboard for content management
• Contact form with email notifications
• Google Maps integration
• Text-based customizable logo system
• Performance-optimized with Next.js 16

Challenges Solved:
• Eliminated WordPress hosting and complex CMS setup
• Reduced development time from weeks to hours
• Centralized firm information for easy updates
• Achieved 95+ Lighthouse performance scores
• Fully customizable requiring only basic configuration

Technology Stack

Next.js 16, TypeScript, PostgreSQL, Drizzle ORM, Tailwind CSS 4, Vercel Blob, Resend, Iron Session, Tiptap, Vercel, Lucide React`,
      image: '/projects/law-firm1img2.jpg',
      technologies: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS 4', 'Vercel Blob', 'Tiptap'],
      liveUrl: 'https://law-firm1-6647-i4tiz027h-shyans-projects-7b2901b0.vercel.app/',
      githubUrl: 'https://github.com',
      category: 'template'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Highlight Projects Section */}
          <section className="mb-20 bg-gradient-to-br from-[#f8f5ff] to-white rounded-xl p-8 md:p-12 border border-[#8B5CF6]">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#8B5CF6] text-white text-sm font-semibold rounded-full">Featured</span>
              <h2 className="text-3xl font-bold text-black">
                Highlight Projects
              </h2>
            </div>
            <p className="text-gray-600 mb-8">Production applications showcasing real-world implementations</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlightProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </section>

          {/* Templates Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-black">
                Templates
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-gray-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-gray-600 mb-8 text-lg">Ready-to-deploy templates for quick project launches</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <ProjectCard
                  key={template.id}
                  project={template}
                  onClick={() => handleProjectClick(template)}
                />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 py-16 px-8 bg-gradient-to-r from-[#f8f5ff] to-white rounded-lg border border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                Ready to build something great?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We build software that lasts. Let's discuss your project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 gradient-cta font-semibold"
              >
                Start a conversation
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
