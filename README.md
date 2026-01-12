
  # CoreIgnite Docs Application

  This is a code bundle for CoreIgnite Docs Application. The original project is available at https://www.figma.com/design/lxgqZNbSB3hhossMFjoVDK/CoreIgnite-Docs-Application.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Project Structure

  ```
  Adaptivepagedesign/
  ├── public/
  │   └── data/              # JSON/YAML workflow data files
  ├── docs/                  # Documentation
  │   ├── MIGRATION_GUIDE.md
  │   ├── SKELETONS.md
  │   ├── ATTRIBUTIONS.md
  │   └── GUIDELINES.md
  ├── src/
  │   ├── assets/
  │   │   ├── icons/         # React icon components
  │   │   └── svg/           # SVG path data
  │   ├── components/
  │   │   ├── layout/        # Header, Footer, Sidebar
  │   │   ├── common/        # Reusable UI components
  │   │   ├── features/      # Feature-specific components
  │   │   ├── content/       # Content display components
  │   │   ├── skeletons/     # Loading skeletons
  │   │   ├── legacy/        # Figma imports
  │   │   └── ui/            # shadcn/ui components
  │   ├── types/             # TypeScript type definitions
  │   ├── utils/             # Utility functions
  │   ├── config/            # Configuration & constants
  │   ├── hooks/             # Custom React hooks
  │   ├── styles/            # CSS files
  │   ├── App.tsx
  │   └── main.tsx
  ├── index.html
  ├── package.json
  ├── vite.config.ts
  └── README.md
  ```

  ## Documentation

  - **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Details on the recent project restructuring
  - **[Skeletons](docs/SKELETONS.md)** - Guide to using skeleton loading components
  - **[Guidelines](docs/GUIDELINES.md)** - Development guidelines
  - **[Attributions](docs/ATTRIBUTIONS.md)** - Third-party licenses and credits

  ## Key Features

  - 🎨 Modern, organized component structure
  - 📦 Type-safe TypeScript throughout
  - ⚡ Vite for fast development and builds
  - 🎭 Comprehensive skeleton loading states
  - 🧩 shadcn/ui component library
  - 🎯 Workflow-based adaptive page design
  