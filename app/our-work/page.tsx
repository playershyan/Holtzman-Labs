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
      title: 'E-Commerce Platform',
      shortDescription: 'Full-stack e-commerce solution with real-time inventory and payment processing.',
      description: `A comprehensive e-commerce platform built for a mid-sized retail client. The system handles real-time inventory management, secure payment processing, and automated order fulfillment.

Key Features:
• Real-time inventory synchronization across multiple warehouses
• Stripe integration for payment processing
• Admin dashboard with sales analytics
• Customer portal with order tracking
• Automated email notifications

Challenges Solved:
• Reduced cart abandonment by 32% through optimized checkout flow
• Improved page load speed from 4.2s to 0.8s
• Scaled to handle 10,000+ concurrent users during peak sales`,
      image: '/projects/veratemplate.jpg',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: '',
      category: 'project'
    },
    {
      id: '2',
      title: 'Healthcare Management System',
      shortDescription: 'HIPAA-compliant patient management system for medical practices.',
      description: `Enterprise healthcare management system designed for multi-location medical practices. Built with security and compliance as top priorities.

Key Features:
• Patient records management with audit trails
• Appointment scheduling with automated reminders
• Prescription management and e-prescribe integration
• Billing and insurance claims processing
• HIPAA-compliant data encryption

Technical Achievements:
• Zero security incidents since launch
• 99.98% uptime over 18 months
• Handles 50,000+ patient records
• Sub-200ms API response times`,
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      liveUrl: '',
      githubUrl: '',
      category: 'project'
    },
    {
      id: '3',
      title: 'Real-Time Analytics Dashboard',
      shortDescription: 'Live data visualization platform for business intelligence.',
      description: `Real-time analytics dashboard for a SaaS company serving 5,000+ customers. Processes millions of events per day and provides actionable insights.

Key Features:
• Real-time event streaming and processing
• Custom report builder with drag-and-drop interface
• Automated anomaly detection and alerts
• Multi-tenant architecture with role-based access
• Export to PDF, Excel, and CSV

Performance Metrics:
• Processes 50M+ events daily
• <100ms query response time for dashboards
• 99.99% data accuracy
• Reduced infrastructure costs by 40% through optimization`,
      image: '',
      technologies: ['Vue.js', 'Python', 'ClickHouse', 'Apache Kafka', 'GraphQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: '',
      category: 'project'
    }
  ];

  // Sample Templates
  const templates: Project[] = [
    {
      id: 't1',
      title: 'SaaS Starter Kit',
      shortDescription: 'Production-ready SaaS boilerplate with authentication, payments, and admin panel.',
      description: `Complete SaaS starter template that eliminates months of development time. Includes everything needed to launch a subscription-based product.

What's Included:
• User authentication (email, OAuth, magic links)
• Stripe subscription billing (monthly/annual plans)
• Admin dashboard with user management
• Email system (transactional & marketing)
• Multi-tenancy support
• Role-based permissions
• API with rate limiting
• Comprehensive documentation

Technical Stack:
• Frontend: Next.js 15 with App Router
• Backend: tRPC for type-safe APIs
• Database: PostgreSQL with Prisma ORM
• Auth: NextAuth.js
• Payments: Stripe
• Emails: React Email + Resend
• Deployment: Vercel

Perfect For:
• B2B SaaS products
• Subscription-based services
• Multi-tenant applications`,
      image: '/projects/auriumtemplate.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'NextAuth.js', 'tRPC'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't2',
      title: 'Portfolio & Blog Template',
      shortDescription: 'Modern portfolio template with built-in blog and CMS.',
      description: `Beautiful, performance-optimized portfolio template perfect for developers, designers, and agencies. Includes a full-featured blog with MDX support.

Features:
• Responsive portfolio showcase
• MDX-powered blog with syntax highlighting
• Contact form with spam protection
• SEO optimized with Open Graph support
• Dark mode toggle
• RSS feed generation
• Analytics integration (Plausible/GA4)
• Newsletter signup integration

Content Management:
• Write posts in MDX (Markdown + React components)
• Automatic image optimization
• Code syntax highlighting with multiple themes
• Table of contents generation
• Reading time estimates

Performance:
• 100/100 Lighthouse score
• <1s time to interactive
• Optimized images with blur-up loading
• Static generation for blazing speed

Ideal For:
• Personal portfolios
• Developer blogs
• Agency showcases
• Technical documentation sites`,
      image: '/projects/gym1template.jpg',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'ContentLayer', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't3',
      title: 'E-Commerce Storefront',
      shortDescription: 'High-performance e-commerce template with cart, checkout, and admin.',
      description: `Modern e-commerce storefront template built for speed and conversions. Includes everything needed to start selling online.

Store Features:
• Product catalog with search and filters
• Shopping cart with real-time updates
• Guest and user checkout flows
• Order tracking and history
• Wishlist functionality
• Product reviews and ratings
• Related products recommendations

Admin Panel:
• Product management (CRUD operations)
• Order management and fulfillment
• Customer management
• Inventory tracking
• Sales analytics dashboard
• Discount code management

Integrations:
• Payment: Stripe Checkout
• Shipping: Shippo API
• Email: Automated order confirmations
• Search: Algolia (optional)

Optimizations:
• Image lazy loading and WebP support
• Progressive Web App (PWA) capabilities
• Server-side rendering for SEO
• Optimistic UI updates for cart

Best For:
• Online stores
• Drop-shipping businesses
• Digital product sales
• Print-on-demand shops`,
      image: '',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'template'
    },
    {
      id: 't4',
      title: 'Admin Dashboard Template',
      shortDescription: 'Feature-rich admin dashboard with charts, tables, and forms.',
      description: `Comprehensive admin dashboard template with pre-built components for common admin tasks. Save weeks of development time.

Dashboard Features:
• Customizable dashboard widgets
• Advanced data tables with sorting, filtering, pagination
• Multiple chart types (line, bar, pie, donut, area)
• Form builder with validation
• File upload with drag-and-drop
• User management interface
• Settings and configuration panels

Components Library:
• 50+ pre-built UI components
• Consistent design system
• Accessible (WCAG 2.1 compliant)
• Responsive across all devices
• Dark mode support

Data Visualization:
• Recharts for interactive charts
• Real-time data updates
• Export data to CSV/Excel
• Custom date range selection
• Drill-down analytics

Authentication & Security:
• Role-based access control (RBAC)
• Protected routes
• Session management
• Audit logs
• Two-factor authentication support

Perfect For:
• Internal tools
• Business dashboards
• CRM systems
• Analytics platforms`,
      image: '',
      technologies: ['React', 'TypeScript', 'Recharts', 'Shadcn UI', 'React Query', 'Zustand'],
      liveUrl: 'https://example.com',
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
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">
              Highlight Projects
            </h2>
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
            <h2 className="text-3xl font-bold text-black mb-8">
              Templates
            </h2>
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
