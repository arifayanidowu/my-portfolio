# Arifayan Idowu - Portfolio Website

A modern, performant portfolio website built with Next.js, shadcn/ui, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Friendly**: Complete SEO setup with metadata, sitemap, and robots.txt
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Built with accessibility best practices
- **PWA Ready**: Web app manifest for mobile app-like experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Performance**: Built-in Next.js optimizations

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   ├── sitemap.ts      # SEO sitemap
│   ├── robots.ts       # SEO robots.txt
│   └── manifest.ts     # PWA manifest
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
└── hooks/              # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📱 Customization

### Personal Information
Update the following files with your information:
- `src/app/layout.tsx` - Update metadata and title
- `src/app/page.tsx` - Update personal details, skills, and projects
- `src/app/sitemap.ts` - Update URLs
- `src/app/manifest.ts` - Update PWA information

### Styling
- Colors and themes can be customized in `src/app/globals.css`
- Component styles are in `src/components/ui/`
- Tailwind configuration can be extended in `tailwind.config.ts`

### Images
Place your images in the `public/` directory:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `og-image.jpg` - Open Graph image for social sharing

## 🔧 Configuration

### Next.js Config
The `next.config.ts` file includes:
- Image optimization
- Performance optimizations
- Security headers
- Package import optimization

### SEO Configuration
- Complete Open Graph metadata
- Twitter Card support
- Structured data ready
- Sitemap generation
- Robots.txt configuration

## 📊 Performance Features

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization
- **Lazy Loading**: Component-level lazy loading
- **Bundle Analysis**: Built-in bundle analyzer

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure build settings

### Other Platforms
The project is compatible with any Node.js hosting platform.

## 📈 Analytics & Monitoring

Add your analytics tools:
- Google Analytics
- Vercel Analytics
- Hotjar
- Sentry

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Contact

- **Portfolio**: [https://arifayanidowu.netlify.app/](https://arifayanidowu.netlify.app/)
- **GitHub**: [Your GitHub]
- **LinkedIn**: [Your LinkedIn]
- **Email**: [Your Email]

---

Built with ❤️ using Next.js, shadcn/ui, and Tailwind CSS
