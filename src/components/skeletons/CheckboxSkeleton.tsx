import { Skeleton } from "../ui/skeleton";

interface CheckboxSkeletonProps {
  items?: number;
  hasTitle?: boolean;
}

export function CheckboxSkeleton({ items = 3, hasTitle = false }: CheckboxSkeletonProps) {
  return (
    <div className="w-full space-y-3">
      {hasTitle && (
        <Skeleton className="h-[16px] w-[40%]" />
      )}
      <div className="space-y-2">
        {Array.from({ length: items }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <Skeleton className="size-[16px] rounded-[2px]" />
            <Skeleton className="h-[14px] flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
