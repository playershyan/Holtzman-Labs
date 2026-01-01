# Template Preview Images

This directory contains preview images for templates used across the site (homepage previews and modal demos).

## Required Images

Add the following image files to this directory. Images should be:
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 800x600px or similar aspect ratio
- **File size**: Optimize to < 200KB per image for fast loading

### Current Status

✅ **All Images Added (5/6)**
- `gym-demo-1-tau.png` - Gym Demo 1 - Tau template
- `gym-demo-2-ten.jpg` - Gym Demo 2 - Ten template
- `gym-demo-3-teal.png` - Gym Demo 3 - Teal template
- `restaurant-demo-1-alpha.jpg` - Restaurant Demo 1 - Alpha template
- `restaurant-demo-2-umber.jpg` - Restaurant Demo 2 - Umber template

❌ **Still Needed (1/6)**
1. `aurium-one.jpg` - Aurium One template

## How to Create Preview Images

### Option 1: Screenshots
Take screenshots of the live demo sites and crop/optimize them.

### Option 2: Automated Screenshots
Use a tool like:
- Puppeteer
- Playwright
- Screenshot services (Screely, etc.)

### Example using Puppeteer:
```bash
npm install puppeteer
node scripts/generate-screenshots.js
```

## Next.js Image Optimization

The `TemplateCard` component uses Next.js Image component which automatically:
- Converts images to WebP/AVIF for modern browsers
- Lazy loads images as users scroll
- Serves responsive images based on viewport size
- Caches optimized images for fast subsequent loads

No additional optimization needed beyond adding the source images to this directory.
