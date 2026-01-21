# Project Images

Store your project and template images here.

## How to Add Images:

1. **Add your image files** to this folder (`/public/projects/`)
   - Supported formats: JPG, PNG, WebP, AVIF
   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Optimize before uploading (compress to < 500KB)

2. **Reference in code** using the path `/projects/filename.jpg`
   ```typescript
   {
     id: '1',
     title: 'My Project',
     image: '/projects/ecommerce-platform.jpg',  // ← Reference like this
     // ... other fields
   }
   ```

3. **Naming convention:**
   - Use lowercase with hyphens
   - Be descriptive
   - Examples:
     - `/projects/ecommerce-platform.jpg`
     - `/projects/saas-dashboard.png`
     - `/projects/healthcare-system.jpg`

## Image Optimization Tips:

- **Use WebP format** for best compression (70-80% smaller than JPG)
- **Compress images** before uploading:
  - Online: TinyPNG, Squoosh.app
  - CLI: `npm install -g sharp-cli` then `sharp -i input.jpg -o output.jpg --webp`
- **Recommended dimensions:**
  - Card thumbnail: 800x600px
  - Modal full size: 1600x1200px
- **Keep file size < 500KB** for fast loading

## Lazy Loading:

Images are automatically lazy-loaded:
- Only load when user scrolls to them
- Not loaded on other pages (home, about, etc.)
- Uses native browser lazy loading + Next.js optimization
