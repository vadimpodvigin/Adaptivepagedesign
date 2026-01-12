import { Skeleton } from "../ui/skeleton";

interface AccordionSkeletonProps {
  items?: number;
}

export function AccordionSkeleton({ items = 2 }: AccordionSkeletonProps) {
  return (
    <div className="w-full space-y-2">
      {Array.from({ length: items }).map((_, index) => (
        <div 
          key={index} 
          className="border border-[#ededed] rounded-[4px] overflow-hidden"
        >
          <div className="flex items-center justify-between p-[12px] bg-white">
            <Skeleton className="h-[16px] w-[70%]" />
            <Skeleton className="size-[16px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
