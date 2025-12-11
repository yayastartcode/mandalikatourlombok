# Mandalika Tour - Tour Company Website

A modern, responsive tour company website built with the latest web technologies.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS v4** - Styling with the latest high-performance engine
- **Motion (Framer Motion)** - Animations and transitions
- **Shadcn UI** - Component library
- **Lucide React** - Icons

## Features

- ✨ Transparent header with responsive navigation
- 🎠 Hero slider with 3 beautiful images and smooth animations
- 📱 Fully responsive design
- ⚡ Lightning-fast performance with Vite and Tailwind v4
- 🎨 Modern animations using Motion library

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mandalikatour/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Transparent header component
│   │   └── HeroSlider.tsx    # Hero slider with animations
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles (Tailwind imports)
├── public/                   # Static assets
├── components.json           # Shadcn UI configuration
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## Customization

### Changing Slider Images

Edit the `slides` array in `src/components/HeroSlider.tsx`:

```typescript
const slides = [
  {
    id: 1,
    image: "your-image-url",
    title: "Your Title",
    subtitle: "Your subtitle"
  },
  // Add more slides...
]
```

### Adding Shadcn UI Components

```bash
npx shadcn-ui@latest add button
```

### Customizing Theme

Tailwind CSS v4 uses CSS-first configuration. Add your custom theme in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.5 0.2 250);
  --font-display: "Your Font", sans-serif;
}
```

## License

MIT
