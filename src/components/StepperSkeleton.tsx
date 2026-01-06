import { Skeleton } from "./ui/skeleton";

interface StepperSkeletonProps {
  steps?: number;
  direction?: "horizontal" | "vertical";
}

export function StepperSkeleton({ steps = 3, direction = "vertical" }: StepperSkeletonProps) {
  if (direction === "horizontal") {
    return (
      <div className="flex items-center gap-4 w-full">
        {Array.from({ length: steps }).map((_, index) => (
          <div key={index} className="flex items-center gap-2 flex-1">
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="size-[24px] rounded-full" />
              <Skeleton className="h-[14px] w-[60px]" />
            </div>
            {index < steps - 1 && (
              <Skeleton className="h-px flex-1" />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {Array.from({ length: steps }).map((_, index) => (
        <div key={index} className="flex gap-3 items-start">
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="size-[24px] rounded-full" />
            {index < steps - 1 && (
              <Skeleton className="w-px h-[40px]" />
            )}
          </div>
          <div className="flex-1 space-y-2">
            <Skeleton className="h-[16px] w-[40%]" />
            <Skeleton className="h-[14px] w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
