export type BusinessType =
  | "Restaurant"
  | "Salon & Spa"
  | "Fitness & Gym"
  | "Consulting"
  | "Photography"
  | "Real Estate"
  | "Professional Services";

export interface Template {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  businessTypes: BusinessType[];
  features: string[];
  previewImage: string;
  demoUrl: string;
}

export const BUSINESS_TYPES: BusinessType[] = [
  "Restaurant",
  "Salon & Spa",
  "Fitness & Gym",
  "Consulting",
  "Photography",
  "Real Estate",
  "Professional Services",
];

export const templates: Template[] = [
  {
    id: "modern-restaurant",
    title: "Modern Restaurant",
    shortDescription:
      "Elegant dining experience website with menu showcase and online reservations.",
    fullDescription:
      "A sophisticated restaurant website designed to showcase your culinary offerings. Features an interactive menu, high-quality image galleries, and integrated reservation system. Perfect for fine dining, cafes, or casual eateries looking to establish a strong online presence.",
    businessTypes: ["Restaurant"],
    features: [
      "Interactive menu with categories",
      "Online reservation system",
      "Photo gallery for dishes",
      "Location & hours information",
      "Mobile-responsive design",
      "Contact form",
    ],
    previewImage: "/templates/restaurant-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/restaurant",
  },
  {
    id: "wellness-spa",
    title: "Wellness & Spa Sanctuary",
    shortDescription:
      "Serene and calming website for spas, salons, and wellness centers.",
    fullDescription:
      "Create a tranquil online presence for your wellness business. This template emphasizes relaxation and self-care with soothing design elements, service listings, and booking capabilities. Ideal for spas, massage therapists, and beauty salons.",
    businessTypes: ["Salon & Spa"],
    features: [
      "Service menu with pricing",
      "Staff profiles and bios",
      "Online booking integration",
      "Before/after gallery",
      "Client testimonials section",
      "Gift card information",
    ],
    previewImage: "/templates/spa-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/spa",
  },
  {
    id: "fitness-studio",
    title: "Fitness Studio Pro",
    shortDescription:
      "High-energy website for gyms, studios, and personal trainers.",
    fullDescription:
      "Motivate potential clients with a dynamic fitness website. Showcase your classes, trainers, and success stories. Includes schedule integration and membership information. Perfect for gyms, yoga studios, CrossFit boxes, and personal trainers.",
    businessTypes: ["Fitness & Gym"],
    features: [
      "Class schedule display",
      "Trainer bios and certifications",
      "Membership plans comparison",
      "Success stories and transformations",
      "Free trial signup form",
      "Video background support",
    ],
    previewImage: "/templates/fitness-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/fitness",
  },
  {
    id: "consulting-pro",
    title: "Professional Consultant",
    shortDescription:
      "Authoritative website for consultants and professional services.",
    fullDescription:
      "Establish credibility and attract clients with a professional consulting website. Features case studies, service offerings, and lead capture forms. Suitable for business consultants, coaches, and professional advisors.",
    businessTypes: ["Consulting", "Professional Services"],
    features: [
      "Service pages with detailed offerings",
      "Case studies and success metrics",
      "About & credentials showcase",
      "Blog integration for thought leadership",
      "Contact & consultation booking",
      "Resource downloads (whitepapers, guides)",
    ],
    previewImage: "/templates/consulting-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/consulting",
  },
  {
    id: "photography-portfolio",
    title: "Photography Portfolio",
    shortDescription:
      "Stunning visual showcase for photographers and creative professionals.",
    fullDescription:
      "Display your photography work with a beautiful, image-focused portfolio. Features full-screen galleries, project categorization, and client inquiry forms. Ideal for wedding photographers, commercial photographers, and visual artists.",
    businessTypes: ["Photography"],
    features: [
      "Full-screen image galleries",
      "Project categories (weddings, portraits, etc.)",
      "About the photographer section",
      "Pricing packages",
      "Client testimonials",
      "Booking inquiry form",
    ],
    previewImage: "/templates/photography-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/photography",
  },
  {
    id: "real-estate-agent",
    title: "Real Estate Agent Pro",
    shortDescription:
      "Professional website for real estate agents and brokers.",
    fullDescription:
      "Showcase properties and build trust with potential clients. Features property listings, neighborhood guides, and market insights. Perfect for individual agents, teams, or boutique brokerages looking to stand out in the market.",
    businessTypes: ["Real Estate"],
    features: [
      "Property listings with filters",
      "Virtual tour integration",
      "Neighborhood guides",
      "Agent bio and credentials",
      "Mortgage calculator",
      "Lead capture forms",
    ],
    previewImage: "/templates/realestate-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/realestate",
  },
  {
    id: "law-firm",
    title: "Law Firm Professional",
    shortDescription:
      "Trustworthy and authoritative website for legal professionals.",
    fullDescription:
      "Build trust and credibility with a professional law firm website. Showcase your practice areas, attorney profiles, and case results. Includes secure client portal and consultation scheduling. Ideal for law firms, solo practitioners, and legal consultants.",
    businessTypes: ["Professional Services"],
    features: [
      "Practice area pages",
      "Attorney bios and credentials",
      "Case results showcase",
      "Client testimonials",
      "Secure consultation booking",
      "Legal resources and blog",
    ],
    previewImage: "/templates/lawfirm-preview.jpg",
    demoUrl: "https://demo.holtzmanlabs.com/lawfirm",
  },
];
