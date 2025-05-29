# Personal Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast and optimized performance
- 🎯 SEO friendly
- 📝 Easy to customize

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
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

## Customization

### Personal Information

1. Update the metadata in `src/app/layout.tsx`:
   - Change the title and description
   - Update the font if desired

2. Modify the content in `src/app/page.tsx`:
   - Update your name and title
   - Add your own profile picture (replace `/profile-placeholder.jpg`)
   - Edit the About section
   - Update the skills list
   - Add your projects
   - Customize the contact form

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, spacing, and other design elements by modifying the Tailwind classes in the components.

### Images

Replace the placeholder images in the `public` directory with your own:
- `profile-placeholder.jpg` - Your profile picture
- `project-1-placeholder.jpg` - Project screenshots
- `project-2-placeholder.jpg`
- `project-3-placeholder.jpg`

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy your site

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

This project is open source and available under the [MIT License](LICENSE).
