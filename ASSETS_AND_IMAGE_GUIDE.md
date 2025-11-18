# Assets & Image Guide

This file explains where to place images and recommended sizes/formats for each page section. Use the placeholder SVGs in `src/assets/images/` as a quick visual until you replace them with real photos.

General rules
- File formats: JPEG (for photos) or PNG (when transparency needed). Use WebP where possible for better compression.
- Color profile: sRGB.
- Filenames: lowercase, hyphen-separated. Example: `home-hero.jpg`, `team-priya-sharma.jpg`.
- Optimize images for web (compress to reasonable quality). Tools: `squoosh`, `imagemin`, `cwebp`.

Paths and placeholders
- Home
  - Hero background: `src/assets/images/home/hero-placeholder.svg` (recommended final: `src/assets/images/home/home-hero.jpg`) — recommended size: 1600×800 or 1920×1080, aspect ~16:9.
  - Logo: `src/assets/images/home/logo-placeholder.svg` (final: `src/assets/images/home/logo.svg` or PNG) — recommended size: 200×200 (use an SVG logo if possible).

- Blog
  - Post card image: `src/assets/images/blog/post-placeholder.svg` (final: `src/assets/images/blog/post-<id>.jpg`) — recommended size: 800×400.

- Team
  - Avatar images: `src/assets/images/team/avatar-placeholder.svg` (final: `src/assets/images/team/<name>.jpg`) — recommended size: 300×300 (square). Use consistent background or crop.

- Programs
  - Program hero/thumbnail: `src/assets/images/programs/program-placeholder.svg` (final: `src/assets/images/programs/<program>.jpg`) — recommended size: 1000×600.

- Gallery
  - Gallery images: `src/assets/images/gallery/gallery-placeholder.svg` (final: `src/assets/images/gallery/<name>.jpg`) — recommended size: 1200×800.

Tips for replacing placeholders
1. Keep filenames as listed above and overwrite the placeholder files with the same names when ready.
2. Use `src` paths in components exactly as `src/assets/images/...` or import them in React: `import hero from '../../assets/images/home/home-hero.jpg'` and use `<img src={hero} />`.
3. When using background images in CSS, put them in `public/` for faster static serving or import in React and use inline styles.

Accessibility & performance
- Always include meaningful `alt` text for decorative and informative images.
- Use `loading="lazy"` on images that are not above-the-fold.
- Provide aspect-ratio wrappers or CSS rules to avoid layout shift.

Example usage (React):

```jsx
import hero from '../../assets/images/home/home-hero.jpg'

function Hero(){
  return (
    <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
      {/* content */}
    </div>
  )
}
```

If you want, I can also:
- Add WebP variants and HTML picture tags for responsive images.
- Generate small demo photos to populate the site with realistic content.
- Add automatic image optimization to the build pipeline (Vite plugins).
