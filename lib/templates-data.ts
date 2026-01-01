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
    id: "gym-demo-2-ten",
    title: "Gym Demo 2 - Ten",
    shortDescription:
      "Modern fitness site — schedules & trainer profiles.",
    fullDescription:
      "A vibrant fitness website designed to motivate and inspire. Features class schedules, trainer profiles, and membership information. Perfect for gyms and fitness studios looking to attract new members.",
    businessTypes: ["Fitness & Gym"],
    features: [
      "Class schedule display",
      "Trainer profiles",
      "Membership plans",
      "Success stories",
      "Contact form",
      "Mobile-responsive design",
    ],
    previewImage: "/templates/gym-demo-2-ten.jpg",
    demoUrl: "https://gym-demo-2-ten.vercel.app",
  },
  {
    id: "gym-demo-1-tau",
    title: "Gym Demo 1 - Tau",
    shortDescription:
      "Professional fitness site — clean design & memberships.",
    fullDescription:
      "A professional fitness website that showcases your gym's offerings. Includes class schedules, trainer information, and membership details. Ideal for fitness centers and personal training studios.",
    businessTypes: ["Fitness & Gym"],
    features: [
      "Class schedules",
      "Trainer bios",
      "Membership information",
      "Testimonials",
      "Contact form",
      "Responsive layout",
    ],
    previewImage: "/templates/gym-demo-1-tau.png",
    demoUrl: "https://gym-demo-1-tau.vercel.app",
  },
  {
    id: "gym-demo-3-teal",
    title: "Gym Demo 3 - Teal",
    shortDescription:
      "Energetic fitness site — dynamic layouts.",
    fullDescription:
      "An energetic fitness website designed to capture attention and drive conversions. Features dynamic layouts, class information, and membership options. Perfect for modern gyms and fitness facilities.",
    businessTypes: ["Fitness & Gym"],
    features: [
      "Dynamic class displays",
      "Trainer showcases",
      "Membership plans",
      "Success galleries",
      "Booking system",
      "Modern design",
    ],
    previewImage: "/templates/gym-demo-3-teal.png",
    demoUrl: "https://gym-demo-3-teal.vercel.app",
  },
  {
    id: "aurium-one",
    title: "Aurium One",
    shortDescription:
      "Premium consulting site — services & case studies.",
    fullDescription:
      "A sophisticated website for professional services and consulting. Features service showcases, team profiles, and client testimonials. Ideal for consultants, agencies, and professional service providers.",
    businessTypes: ["Professional Services", "Consulting"],
    features: [
      "Service pages",
      "Team profiles",
      "Case studies",
      "Client testimonials",
      "Contact forms",
      "Professional design",
    ],
    previewImage: "/templates/aurium-one.jpg",
    demoUrl: "https://aurium-one.vercel.app",
  },
  {
    id: "restaurant-demo-1-alpha",
    title: "Restaurant Demo 1 - Alpha",
    shortDescription:
      "Elegant restaurant site — menu & reservations.",
    fullDescription:
      "A beautiful restaurant website designed to showcase your culinary offerings. Features interactive menus, photo galleries, and reservation capabilities. Perfect for fine dining establishments and cafes.",
    businessTypes: ["Restaurant"],
    features: [
      "Interactive menu",
      "Photo galleries",
      "Reservation system",
      "Location information",
      "Contact form",
      "Elegant design",
    ],
    previewImage: "/templates/restaurant-demo-1-alpha.jpg",
    demoUrl: "https://restaurant-demo-1-alpha.vercel.app",
  },
  {
    id: "restaurant-demo-2-umber",
    title: "Restaurant Demo 2 - Umber",
    shortDescription:
      "Modern restaurant site — menus & booking.",
    fullDescription:
      "A modern restaurant website that creates an inviting online presence. Features menu displays, location details, and booking options. Ideal for restaurants looking to attract diners and showcase their offerings.",
    businessTypes: ["Restaurant"],
    features: [
      "Menu displays",
      "Gallery sections",
      "Booking system",
      "Hours and location",
      "Contact information",
      "Warm design aesthetic",
    ],
    previewImage: "/templates/restaurant-demo-2-umber.jpg",
    demoUrl: "https://restaurant-demo-2-umber.vercel.app",
  },
];
