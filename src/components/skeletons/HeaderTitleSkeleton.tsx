import { Skeleton } from "../ui/skeleton";

export function HeaderTitleSkeleton() {
  return (
    <div className="max-w-[1200px] mx-auto px-[32px] pt-[24px] md:px-8 mb-8">
      {/* Icon + Title skeleton */}
      <div className="mb-[8px] flex items-center justify-center">
        <Skeleton className="size-[24px] rounded-full mr-[8px]" />
        <Skeleton className="h-[24px] w-[200px]" />
      </div>
      
      {/* Description skeleton */}
      <div className="flex justify-center px-[96px] py-[0px]">
        <div className="space-y-2 max-w-[600px] w-full">
          <Skeleton className="h-[16px] w-full" />
          <Skeleton className="h-[16px] w-[80%] mx-auto" />
        </div>
      </div>
    </div>
  );
}
