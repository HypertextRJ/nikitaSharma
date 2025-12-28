# Portfolio Images Guide

The portfolio now needs the following images to be added to the `public` folder:

## Required Images

### Profile & About
```
public/
├── profile.jpg          (Profile picture - 400x400px, square)
└── about-image.jpg      (About section image - 600x600px, square)
```

###Certificates (in `public/certificates/` folder)
```
public/certificates/
├── deloitte-cert.jpg    (Deloitte certificate - any size)
├── tata-cert.jpg        (TATA certificate - any size)
└── stats-diploma.jpg    (Statistics diploma - any size)
```

## Quick Setup Options

### Option 1: Use Placeholder Images
Create simple colored placeholder images temporarily using any image editor.

### Option 2: Use AI Generated Images
You can use the image generation tool or find free stock images:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://www.pexels.com

### Option 3: Use Your Actual Images
- Profile photo: Your professional headshot
- About image: Photo of you working with data/computer, or data visualization
- Certificates: Screenshots of your actual certificates

## Image Specifications
- **Profile**: Square (400x400px), professional headshot
- **About**: Square or landscape (600x600px), professional setting
- **Certificates**: High resolution screenshots of certificates (readable text)
- **Format**: JPG or PNG
- **Size**: Keep under 500KB each for fast loading

## Fallback Behavior
The portfolio has fallback designs for missing images:
- Profile: Shows initials "YN" with gradient background
- About: Shows emoji icon with text
- Certificates: Shows document emoji icon

So the site works even without images, but looks much better with them!

## To Add Images:
1. Place images in the `public` folder (create `certificates` subfolder)
2. Name them exactly as listed above  
3. Refresh your browser at http://localhost:3000

That's it! The portfolio will automatically load them.
