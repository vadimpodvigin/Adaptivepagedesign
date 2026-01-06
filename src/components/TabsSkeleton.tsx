import { Skeleton } from "./ui/skeleton";

interface TabsSkeletonProps {
  tabs?: number;
}

export function TabsSkeleton({ tabs = 3 }: TabsSkeletonProps) {
  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex gap-[8px] border-b border-[#ededed] mb-4">
        {Array.from({ length: tabs }).map((_, index) => (
          <div key={index} className="pb-2">
            <Skeleton className="h-[32px] w-[80px]" />
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className="space-y-3">
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[16px] w-[90%]" />
        <Skeleton className="h-[16px] w-[75%]" />
      </div>
    </div>
  );
}
