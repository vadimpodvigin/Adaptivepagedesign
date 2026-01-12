# Migration Guide - Project Restructuring

This document outlines the changes made to improve the project structure and how to work with the new organization.

## Overview of Changes

The project has been reorganized to follow modern React/TypeScript best practices with clear separation of concerns.

## Directory Structure Changes

### Before vs After

```
Before:
src/
├── components/          (mixed: all components + docs)
├── imports/            (90+ files, auto-generated names)
├── public/             (❌ wrong location)
├── guidelines/
├── index.css
└── App.tsx

After:
src/
├── assets/
│   ├── icons/          (React icon components)
│   └── svg/            (SVG path data)
├── components/
│   ├── layout/         (Header, Footer, Sidebar)
│   ├── common/         (Button, Card, Tag, Loading, etc.)
│   ├── features/       (RequestCard, WorkflowsLanding, etc.)
│   ├── content/        (Accordion, Tabs, Table, etc.)
│   ├── skeletons/      (All skeleton components)
│   ├── legacy/         (Figma imports)
│   └── ui/             (shadcn components - unchanged)
├── types/              (TypeScript type definitions)
├── utils/              (Utility functions)
├── config/             (Configuration & constants)
├── hooks/              (Custom React hooks - ready for use)
├── styles/             (All CSS files)
└── App.tsx

public/
└── data/               (JSON/YAML data files)

docs/                   (All documentation)
```

## Key Changes

### 1. Public Assets (✅ CRITICAL)

**Before:**
- `src/public/` ❌ (incorrect location)

**After:**
- `public/data/` ✅ (correct Vite location)

All JSON and YAML files have been moved to `public/data/`.

### 2. Component Organization

Components are now organized by purpose:

- **layout/** - Page structure (Header, Footer, Sidebar)
- **common/** - Reusable UI elements (Button, Card, Tag, Loading, ScrollToTop)
- **features/** - Feature-specific components (RequestCard, WorkflowsLanding, WorkflowTile)
- **content/** - Content display components (Accordion, Tabs, Table, List, Notification, etc.)
- **skeletons/** - Loading skeletons (all *Skeleton.tsx files)
- **legacy/** - Figma-generated components (for reference/gradual migration)
- **ui/** - shadcn/ui components (unchanged)

### 3. Type Definitions

All TypeScript interfaces have been extracted to `src/types/`:

- `types/card.ts` - Card-related types (CardData, SharedSideCard, CardsData)
- `types/workflow.ts` - Workflow types (WorkflowData, WorkflowMetadata)
- `types/index.ts` - Barrel export for easy imports

**Usage:**
```typescript
// Before
import { CardData, WorkflowData } from "./components/RequestCard";

// After
import { CardData, WorkflowData } from "./types";
// or
import { CardData, WorkflowData } from "../types";
```

### 4. Utilities & Configuration

**Utils (`src/utils/`):**
- `colors.ts` - Color utility functions (getCategoryColor)
- `index.ts` - Barrel export

**Config (`src/config/`):**
- `workflows.ts` - Workflow URL mappings
- `constants.ts` - Application constants
- `index.ts` - Barrel export

**Usage:**
```typescript
// Before
const workflowJsonUrls = { /* inline definition */ };
const getCategoryColor = (category) => { /* inline function */ };

// After
import { workflowJsonUrls } from "./config";
import { getCategoryColor } from "./utils";
import { DEFAULT_THEME_COLOR } from "./config/constants";
```

### 5. Assets Organization

**Icons (`src/assets/icons/`):**
- React components for icons (Network.tsx, Arrow*.tsx)

**SVG Paths (`src/assets/svg/`):**
- SVG path data files (svg-*.ts)

**Before:**
```typescript
import Network from "./imports/Network";
import svgPaths from "./imports/svg-gc1pv1i3ew";
```

**After:**
```typescript
import Network from "./assets/icons/Network";
import svgPaths from "./assets/svg/svg-gc1pv1i3ew";
```

### 6. Styles Consolidation

All CSS files are now in `src/styles/`:
- `styles/index.css` - Main styles
- `styles/globals.css` - Global styles

**Update in main.tsx:**
```typescript
// Before
import "./index.css";

// After
import "./styles/index.css";
```

### 7. Documentation

All documentation moved to `docs/`:
- `docs/SKELETONS.md`
- `docs/SKELETON_IMPLEMENTATION.md`
- `docs/ATTRIBUTIONS.md`
- `docs/GUIDELINES.md`
- `docs/MIGRATION_GUIDE.md` (this file)

## Import Path Updates

### Component Imports

**Layout Components:**
```typescript
// Before
import { Header } from "./components/Header";

// After
import { Header } from "./components/layout/Header";
```

**Common Components:**
```typescript
// Before
import { Button } from "./components/Button";

// After
import { Button } from "./components/common/Button";
```

**Feature Components:**
```typescript
// Before
import { RequestCard } from "./components/RequestCard";

// After
import { RequestCard } from "./components/features/RequestCard";
```

**Content Components:**
```typescript
// Before
import { Accordion } from "./components/Accordion";

// After
import { Accordion } from "./components/content/Accordion";
```

**Skeleton Components:**
```typescript
// Before
import { CardSkeleton } from "./components/CardSkeleton";

// After
import { CardSkeleton } from "./components/skeletons/CardSkeleton";
// or use barrel export
import { CardSkeleton } from "./components/skeletons";
```

## Benefits of New Structure

1. **Improved Maintainability** - Clear separation of concerns
2. **Better Scalability** - Easy to add new features
3. **Enhanced Developer Experience** - Intuitive file locations
4. **Reduced Import Complexity** - Shorter, cleaner import paths
5. **Better Build Performance** - Proper public asset handling
6. **Easier Onboarding** - New developers can navigate quickly
7. **Type Safety** - Centralized type definitions
8. **Code Reusability** - Shared utilities and configurations

## Next Steps

### Recommended Future Improvements

1. **Custom Hooks** - Extract stateful logic to `src/hooks/`
2. **API Layer** - Create `src/api/` for data fetching
3. **Constants** - Move more magic strings to `src/config/constants.ts`
4. **Testing** - Add `src/__tests__/` or co-located tests
5. **Legacy Cleanup** - Gradually migrate or remove `src/components/legacy/`

### Gradual Migration

If you have existing code that hasn't been updated yet:

1. The old import paths will show errors - update them following this guide
2. Types are re-exported from RequestCard for backwards compatibility
3. Take your time migrating - the structure supports incremental updates

## Troubleshooting

### Import Errors

If you see import errors:
1. Check the new location of the file in the structure above
2. Update the import path relative to your current file
3. Use your IDE's auto-import feature

### Build Errors

If the build fails:
1. Ensure `public/data/` exists and contains the data files
2. Check that `src/styles/index.css` is imported in `main.tsx`
3. Verify all import paths have been updated

### Type Errors

If you see type errors:
1. Import types from `src/types/` instead of component files
2. Check that all type dependencies are properly imported
3. Use the barrel export: `import { CardData } from "./types"`

## Questions?

Refer to the other documentation files in `docs/` or check the component source code for examples of the new structure.

