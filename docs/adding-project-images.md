# How to Add Images to /our-work Page

## 📁 Folder Structure

```
portfolio-site/
├── public/
│   └── projects/          ← Put your images here
│       ├── ecommerce-platform.jpg
│       ├── healthcare-system.png
│       ├── saas-template.jpg
│       └── README.md
└── app/
    └── our-work/
        └── page.tsx       ← Reference images here
```

## 🖼️ Adding Images (3 Steps)

### Step 1: Add Image File

Place your image in `public/projects/` folder:

```bash
# Example structure
public/projects/
  ├── ecommerce-platform.jpg
  ├── healthcare-system.png
  └── dashboard-template.jpg
```

### Step 2: Reference in Code

Open `app/our-work/page.tsx` and update the `image` field:

```typescript
const highlightProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    // ... other fields
    image: '/projects/ecommerce-platform.jpg',  // ← Add this path
  },
];
```

**Path format:**
- Always start with `/projects/`
- Use the exact filename
- Examples:
  - `/projects/my-project.jpg`
  - `/projects/saas-dashboard.png`
  - `/projects/template-screenshot.webp`

### Step 3: Done!

That's it! Next.js will automatically:
- ✅ Optimize the image
- ✅ Lazy load (only when scrolled into view)
- ✅ Only load on /our-work page (not home, about, etc.)
- ✅ Generate responsive sizes
- ✅ Convert to modern formats (WebP/AVIF)

---

## 🎯 Image Requirements

### Recommended Specs:
- **Dimensions:** 1200x800px (3:2 ratio)
- **Format:** JPG, PNG, or WebP
- **File size:** < 500KB (compress before uploading)
- **Quality:** 80-90% (good balance)

### Naming Convention:
- ✅ `ecommerce-platform.jpg`
- ✅ `healthcare-dashboard.png`
- ✅ `saas-template-hero.jpg`
- ❌ `My Project Screenshot.JPG` (avoid spaces, capitals)
- ❌ `IMG_1234.jpg` (not descriptive)

---

## 🚀 Performance Features

### Automatic Optimizations:

1. **Lazy Loading** - Images only load when user scrolls to them
   ```typescript
   <Image loading="lazy" />  // Built-in
   ```

2. **Code Splitting** - Images only loaded on /our-work page
   - Home page loads: ✅ (no project images)
   - /our-work page loads: ✅ (project images lazy loaded)

3. **Responsive Images** - Different sizes for different screens
   ```typescript
   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   ```

4. **Modern Formats** - Auto-converts to WebP/AVIF when supported

---

## 📝 Complete Example

```typescript
// app/our-work/page.tsx

const highlightProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce solution...',
    description: 'Detailed description...',
    image: '/projects/ecommerce-platform.jpg',  // ← Image path
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/repo',
    category: 'project'
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    shortDescription: 'Real-time analytics platform...',
    description: 'Detailed description...',
    image: '/projects/saas-dashboard.png',  // ← Another image
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '',
    githubUrl: '',
    category: 'template'
  },
  // Add more projects...
];
```

---

## 🔧 Image Compression Tools

Before uploading, compress your images:

### Online Tools:
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **Compressor.io** - https://compressor.io/

### Command Line:
```bash
# Install sharp-cli
npm install -g sharp-cli

# Compress and convert to WebP
sharp -i input.jpg -o output.webp --webp quality=85

# Resize and compress
sharp -i input.jpg -o output.jpg --resize 1200 800
```

---

## ❓ FAQ

**Q: Can I use external URLs?**
A: Yes, but you need to configure `next.config.js`:
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
};
```

**Q: What if I don't have an image yet?**
A: Leave the `image` field empty (`image: ''`). It will show a placeholder gradient.

**Q: Do images load on other pages?**
A: No! Next.js automatically code-splits. Images only load when visiting /our-work.

**Q: Can I use SVG?**
A: Yes, but use a regular `<img>` tag for SVGs, not Next.js `<Image>`:
```typescript
image: '/projects/logo.svg',
// Component will still work, but SVGs aren't optimized by Next.js
```

**Q: How do I check image size?**
A: Right-click image → Properties (Windows) or Get Info (Mac)

---

## 🎨 Image Best Practices

1. **Use consistent aspect ratio** - 3:2 (landscape) works well
2. **Optimize before upload** - Don't upload 5MB images
3. **Use descriptive names** - `dashboard-screenshot.jpg` not `img1.jpg`
4. **Test on mobile** - Ensure images look good on small screens
5. **Use WebP when possible** - 30% smaller than JPG with same quality

---

## 📊 Performance Metrics

With proper optimization:
- **First load:** < 100KB (only visible images)
- **Lazy load:** Triggers 200px before scroll
- **Cache:** Images cached for 1 year
- **Bandwidth saved:** ~70% with WebP

---

## ✅ Checklist

- [ ] Image added to `public/projects/` folder
- [ ] File size < 500KB
- [ ] Dimensions: 1200x800px (or similar 3:2 ratio)
- [ ] Filename uses lowercase with hyphens
- [ ] Path updated in `app/our-work/page.tsx`
- [ ] Build successful (`npm run build`)
- [ ] Tested on /our-work page
- [ ] Verified lazy loading works (check Network tab)

---

That's it! Your images are now optimized and lazy-loaded on the /our-work page. 🎉
