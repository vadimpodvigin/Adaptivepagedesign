import { Skeleton } from "../ui/skeleton";
import { ReactNode } from "react";

interface FlexLayoutSkeletonProps {
  /**
   * Number of items to render
   */
  items?: number;
  
  /**
   * Direction of the flex layout
   */
  direction?: "row" | "col";
  
  /**
   * Gap between items (in pixels)
   */
  gap?: number;
  
  /**
   * Custom renderer for each item
   */
  renderItem?: (index: number) => ReactNode;
  
  /**
   * Default skeleton dimensions if no custom renderer is provided
   */
  itemHeight?: number;
  itemWidth?: string;
  
  /**
   * Additional classes for the container
   */
  className?: string;
}

/**
 * A flexible skeleton layout component that can be configured for various use cases
 */
export function FlexLayoutSkeleton({
  items = 3,
  direction = "col",
  gap = 16,
  renderItem,
  itemHeight = 100,
  itemWidth = "100%",
  className = ""
}: FlexLayoutSkeletonProps) {
  const defaultRenderItem = (index: number) => (
    <Skeleton 
      key={index}
      style={{ 
        height: `${itemHeight}px`,
        width: itemWidth
      }}
    />
  );

  return (
    <div 
      className={`flex flex-${direction} ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {Array.from({ length: items }).map((_, index) => 
        renderItem ? renderItem(index) : defaultRenderItem(index)
      )}
    </div>
  );
}

// Preset configurations for common layouts
export const FlexLayoutPresets = {
  /**
   * Grid of cards (3 columns)
   */
  cardGrid: (itemCount: number = 3) => (
    <FlexLayoutSkeleton
      items={itemCount}
      direction="row"
      gap={40}
      renderItem={(index) => (
        <div key={index} className="flex-1 min-w-0">
          <Skeleton className="h-[200px] w-full rounded-[8px]" />
        </div>
      )}
    />
  ),

  /**
   * Vertical list of items
   */
  verticalList: (itemCount: number = 5) => (
    <FlexLayoutSkeleton
      items={itemCount}
      direction="col"
      gap={8}
      itemHeight={60}
      itemWidth="100%"
    />
  ),

  /**
   * Horizontal tiles
   */
  horizontalTiles: (itemCount: number = 4) => (
    <FlexLayoutSkeleton
      items={itemCount}
      direction="row"
      gap={12}
      renderItem={(index) => (
        <Skeleton key={index} className="h-[120px] w-[308px] rounded-[4px]" />
      )}
    />
  ),

  /**
   * Two-column layout
   */
  twoColumn: () => (
    <FlexLayoutSkeleton
      items={2}
      direction="row"
      gap={32}
      renderItem={(index) => (
        <div key={index} className="flex-1 space-y-4">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[150px] w-full" />
        </div>
      )}
    />
  )
};
