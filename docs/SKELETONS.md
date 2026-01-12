# Skeleton Components Documentation

This document provides an overview of all available skeleton loading components in the application.

## Overview

Skeleton loaders provide visual feedback to users during data loading, showing the structure of content before it appears. All skeleton components use a smooth shimmer animation effect.

## Available Skeleton Components

### 1. Base Skeleton
The foundational component for creating custom skeleton loaders.

```tsx
import { Skeleton } from "./ui/skeleton";

<Skeleton className="h-[20px] w-full" />
```

### 2. WorkflowTileSkeleton
Mimics the structure of a workflow tile with icon and title placeholders.

```tsx
import { WorkflowTileSkeleton } from "./WorkflowTileSkeleton";

<WorkflowTileSkeleton />
```

**Use case:** Loading state for workflow selection tiles in the landing page.

### 3. CardSkeleton
Basic card skeleton with customizable sections.

```tsx
import { CardSkeleton } from "./CardSkeleton";

<CardSkeleton 
  hasDescription={true} 
  hasContent={true} 
/>
```

**Props:**
- `hasDescription` (boolean): Show description placeholder
- `hasContent` (boolean): Show content area placeholder
- `className` (string): Additional CSS classes

### 4. SectionCardSkeleton
Smaller card variant for section items within cards.

```tsx
import { SectionCardSkeleton } from "./CardSkeleton";

<SectionCardSkeleton />
```

### 5. NestedCardSkeleton
Compact skeleton for nested notification-style cards.

```tsx
import { NestedCardSkeleton } from "./CardSkeleton";

<NestedCardSkeleton />
```

### 6. ComplexCardSkeleton
Advanced card skeleton with multiple variants for different content types.

```tsx
import { ComplexCardSkeleton } from "./ComplexCardSkeleton";

<ComplexCardSkeleton variant="with-tabs" />
```

**Variants:**
- `basic`: Simple content rows
- `with-tabs`: Tab headers and content
- `with-table`: Table structure with headers and rows
- `with-sections`: Two-column section layout
- `with-nested-cards`: Multiple nested card items

### 7. TableSkeleton
Table structure with customizable rows and columns.

```tsx
import { TableSkeleton } from "./TableSkeleton";

<TableSkeleton rows={5} columns={4} />
```

**Props:**
- `rows` (number, default: 3): Number of data rows
- `columns` (number, default: 3): Number of columns

### 8. ListSkeleton
List structure for ordered or unordered lists.

```tsx
import { ListSkeleton } from "./ListSkeleton";

<ListSkeleton items={4} type="unordered" />
```

**Props:**
- `items` (number, default: 3): Number of list items
- `type` ("ordered" | "unordered"): List type

### 9. AccordionSkeleton
Accordion component skeleton with multiple collapsed items.

```tsx
import { AccordionSkeleton } from "./AccordionSkeleton";

<AccordionSkeleton items={3} />
```

**Props:**
- `items` (number, default: 2): Number of accordion items

### 10. StepperSkeleton
Stepper/progress indicator skeleton.

```tsx
import { StepperSkeleton } from "./StepperSkeleton";

<StepperSkeleton steps={4} direction="vertical" />
```

**Props:**
- `steps` (number, default: 3): Number of steps
- `direction` ("horizontal" | "vertical"): Layout direction

### 11. CodeSnippetSkeleton
Code block skeleton with optional caption.

```tsx
import { CodeSnippetSkeleton } from "./CodeSnippetSkeleton";

<CodeSnippetSkeleton lines={5} hasCaption={true} />
```

**Props:**
- `lines` (number, default: 3): Number of code lines
- `hasCaption` (boolean): Show caption placeholder

### 12. TabsSkeleton
Tabbed interface skeleton with headers and content.

```tsx
import { TabsSkeleton } from "./TabsSkeleton";

<TabsSkeleton tabs={3} />
```

**Props:**
- `tabs` (number, default: 3): Number of tab headers

### 13. CheckboxSkeleton
Checkbox group skeleton.

```tsx
import { CheckboxSkeleton } from "./CheckboxSkeleton";

<CheckboxSkeleton items={4} hasTitle={true} />
```

**Props:**
- `items` (number, default: 3): Number of checkbox items
- `hasTitle` (boolean): Show title placeholder

### 14. NotificationSkeleton
Notification/alert skeleton with icon and text.

```tsx
import { NotificationSkeleton } from "./NotificationSkeleton";

<NotificationSkeleton />
```

## Bulk Import

Import all skeletons from a single file:

```tsx
import { 
  WorkflowTileSkeleton,
  CardSkeleton,
  ComplexCardSkeleton,
  TableSkeleton,
  // ... etc
} from "./Skeletons";
```

## Implementation Examples

### Workflow Landing Page
```tsx
if (loading) {
  return (
    <div className="max-w-[1200px] mx-auto px-[32px] py-[24px]">
      <div className="flex flex-col gap-[24px]">
        {[1, 2].map((categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-[8px]">
            <Skeleton className="h-[18px] w-[150px] mb-2" />
            <div className="flex flex-wrap gap-[8px]">
              {[1, 2, 3].map((tileIndex) => (
                <WorkflowTileSkeleton key={tileIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Card Grid Layout
```tsx
if (loading) {
  return (
    <div className="flex gap-[40px]">
      <CardSkeleton hasDescription={true} hasContent={true} />
      <ComplexCardSkeleton variant="with-tabs" />
      <CardSkeleton hasDescription={false} hasContent={true} />
    </div>
  );
}
```

## Animation Details

All skeleton components use a smooth shimmer animation defined in `/styles/globals.css`:

- **Duration:** 2 seconds
- **Timing:** ease-in-out
- **Loop:** Infinite
- **Effect:** Horizontal gradient sweep from left to right

## Best Practices

1. **Match Structure:** Choose skeleton variants that closely match your actual content structure
2. **Consistent Timing:** Keep all skeletons visible for at least 300-500ms to avoid flashing
3. **Realistic Layout:** Arrange skeletons in the same grid/flex layout as real content
4. **Quantity:** Show 2-4 skeleton items for lists to indicate more content without overloading
5. **Avoid Overuse:** Don't use skeletons for instant (<100ms) operations

## Performance

Skeleton animations are highly performant:
- CSS-based animations (GPU-accelerated)
- No JavaScript execution during animation
- Minimal DOM elements
- Zero re-renders after initial mount

## Accessibility

Skeleton loaders are purely visual and don't require ARIA labels since they're temporary placeholders. Screen readers should announce the loading state through parent component messaging, not the skeletons themselves.
