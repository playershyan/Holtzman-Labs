# Portfolio Website Build Instructions



## Project Context

Building a professional portfolio site for a web developer/founder in Sri Lanka. The site should demonstrate speed, technical capability, and professionalism while being honest about being a solo operation.



## Brand Identity

- Brand Name: [INSERT CHOSEN NAME]

- Founder: Shyan Akarsha

- Value Proposition: Fast delivery of modern web solutions (1-2 weeks typical)

- Location: Sri Lanka

- Unique Angle: Law student + developer (understands code AND contracts)



## Technical Requirements

- Framework: Next.js 14+ with App Router

- Styling: Tailwind CSS

- Performance: Lighthouse score 95+ (prove the speed claim)

- Mobile-first design (most Sri Lankan traffic is mobile)

- Fast loading: <2s initial load

- SEO optimized

- Contact form with email integration (Resend or similar)



## Page Structure



### Hero Section

```

Hi, I'm Shyan Akarsha, founder of [Brand Name].



I build modern websites for Sri Lankan businesses—fast.

Most projects delivered in 1-2 weeks.



[CTA: View Work] [CTA: Get Quote]

```



### Why Speed Matters Section

Brief 2-3 sentence explanation:

"Your competitors are online. Every week without a modern website is lost business. I ship quickly without compromising quality—combining technical expertise with an understanding of business needs."



### Portfolio Section

Title: "Recent Work"



**Project 1: Vera.lk**

- Description: Complete vehicle marketplace platform with AI-powered search

- Tech: Next.js, PostgreSQL, AI integration

- Timeline: Built in X weeks

- Link: https://vera.lk

- Screenshot/mockup



**Project 2: iSafe**

- Description: Disaster response platform with shelter registry, missing persons reporting, and digital compensation system

- Tech: Next.js, real-time data processing

- Timeline: Built in 24 hours during Cyclone Ditwah

- Impact: Created to address critical gaps in Sri Lanka's disaster response infrastructure

- Screenshot/mockup



[Space for 2-3 more client projects as they come]



### Services Section

Title: "What I Build"



**Business Websites**

- Modern, mobile-optimized sites

- Timeline: 1-2 weeks

- Investment: 75,000-150,000 LKR



**Custom Platforms**

- E-commerce, booking systems, custom applications

- Timeline: 2-4 weeks

- Investment: 200,000-400,000 LKR



**Rush Projects Available**

- Need it faster? Let's talk.



### About Section

Title: "Who I Am"



"I'm a law student at University of Peradeniya with a passion for building digital solutions. 



What makes me different: I understand both code and contracts—rare for developers. This means I can translate business requirements into technical solutions while understanding the legal implications.



I work with businesses across Sri Lanka, delivering modern web solutions that actually drive results."



### Contact Section

Title: "Let's Build Something"



Simple contact form:

- Name

- Email

- Business/Project Type

- Message

- [Submit]



Also display:

- Email: shyan@[brandname].lk

- Phone: [if providing]

- LinkedIn: [profile]



Footer:

"© 2024 [Brand Name]. Based in Sri Lanka, working nationwide."



## Design Guidelines



### Visual Style

- Clean, modern, minimalist

- Professional but not corporate

- Fast-loading (optimize all images)

- Plenty of white space

- Clear hierarchy



### Color Scheme

- Primary: Choose something professional (not red, avoid overly bright)

- Suggestion: Deep blue (#1e40af) or dark gray (#1f2937) as primary

- Accent: Complementary (orange/green for CTAs)

- Background: White/light gray

- Text: Dark gray (not pure black)



### Typography

- Headings: Inter or similar modern sans-serif

- Body: System fonts for speed

- Clear size hierarchy (h1: 48px mobile/64px desktop, h2: 36px/48px, etc.)



### Components Needed

1. Navigation (sticky, minimal)

2. Hero with gradient background

3. Portfolio cards (hover effects, clean)

4. Service cards (3-column grid on desktop, stack on mobile)

5. Contact form (validation, loading states)

6. Footer (simple)



### Animations

- Keep minimal for speed

- Subtle fade-ins on scroll (use Intersection Observer)

- Smooth hover transitions

- Nothing that blocks rendering



## Technical Implementation



### Performance Optimizations

- Image optimization (next/image)

- Font optimization (next/font)

- Code splitting

- Lazy loading for below-fold content

- Minimize JavaScript bundle



### SEO

- Metadata for all pages

- Open Graph tags

- Structured data (Person schema)

- Sitemap

- robots.txt



### Mobile Optimization

- Touch-friendly tap targets (min 44px)

- Readable text without zoom (16px minimum)

- Fast on 3G connections

- No horizontal scroll



### Contact Form

- Client-side validation

- Server-side validation

- Email service integration (Resend recommended)

- Success/error states

- Spam protection (honeypot field)



## File Structure

```

/app

  /layout.tsx (root layout, metadata)

  /page.tsx (home page with all sections)

  /api

    /contact

      /route.ts (contact form handler)

/components

  /Hero.tsx

  /Portfolio.tsx

  /Services.tsx

  /About.tsx

  /Contact.tsx

  /Footer.tsx

/public

  /images (optimized portfolio screenshots)



## Environment Variables Needed

```

RESEND_API_KEY=xxx

CONTACT_EMAIL=shyan@[brandname].lk

```



## Deployment

- Vercel (recommended for Next.js)

- Custom domain: [brandname].lk

- SSL enabled

- Analytics (optional: Vercel Analytics or Plausible)



## Testing Checklist

- [ ] Mobile responsiveness (test on actual device)

- [ ] Contact form works

- [ ] All links work

- [ ] Images load properly

- [ ] Fast loading (<2s)

- [ ] Works on slow connection

- [ ] SEO metadata present

- [ ] No console errors

- [ ] Lighthouse score 95+



## Content Placeholders

[Brand Name] - Replace throughout with chosen name

[X weeks] - Replace with actual Vera.lk build time

shyan@[brandname].lk - Replace with actual email

[Phone] - Add if providing phone number



## Priority

Speed of delivery is crucial. Aim for completion within 4-6 hours of work. Site should be production-ready and deployable immediately.



Focus on:

1. Clean, professional design

2. Fast performance

3. Mobile optimization

4. Working contact form

5. Portfolio showcase



Avoid:

1. Overengineering

2. Unnecessary animations

3. Large dependencies

4. Complex state management

5. Premature optimization of things that don't matter

