# Resume PDF Viewer Setup Guide

## Adding Your Resume

Your portfolio now includes a professional PDF viewer with zoom and download features. Follow these steps to add your resume:

### Step 1: Prepare Your Resume
- Make sure you have your resume as a PDF file
- Name it `resume.pdf` (or any name you prefer)

### Step 2: Place the File
Place your resume PDF file in the `public/` folder:
```
my-portfolio/
├── public/
│   └── resume.pdf  ← Place your file here
└── src/
```

## Features

The "View Resume" button in the Hero section opens a professional PDF viewer with:

- **Zoom Controls**: Zoom in (up to 300%) and out (down to 75%)
- **Page Navigation**: Navigate between pages with previous/next buttons
- **Page Indicator**: See current page and total pages
- **Download Button**: Users can download your resume directly
- **Responsive Design**: Works on mobile and desktop
- **Professional UI**: Dark theme matching your portfolio design

## How It Works

1. Click the "View Resume" button in the Hero section
2. A modal opens with the PDF viewer
3. Use the controls to zoom, navigate pages, or download
4. Click the X button or click outside to close

## Testing

To test the feature:

1. Run your development server: `npm run build`
2. Click the "View Resume" button
3. Test zoom controls, page navigation, and download functionality

