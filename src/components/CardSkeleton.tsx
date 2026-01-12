import { Skeleton } from "./ui/skeleton";

interface CardSkeletonProps {
  hasDescription?: boolean;
  hasContent?: boolean;
  className?: string;
}

export function CardSkeleton({ 
  hasDescription = true, 
  hasContent = true,
  className = "" 
}: CardSkeletonProps) {
  return (
    <div className={`bg-white box-border content-stretch flex flex-col gap-[16px] items-stretch p-[16px] rounded-[8px] h-full max-w-full ${className}`}>
      {/* Header with badge and title */}
      <div className="content-stretch flex flex-row gap-[8px] items-center relative shrink-0 w-full">
        <Skeleton className="size-[24px] rounded-full" />
        <Skeleton className="h-[24px] flex-1" />
      </div>

      {/* Divider */}
      <div className="bg-[#ededed] shrink-0 h-px w-full" />

      {/* Description */}
      {hasDescription && (
        <div className="space-y-2">
          <Skeleton className="h-[16px] w-full" />
          <Skeleton className="h-[16px] w-[85%]" />
        </div>
      )}

      {/* Content area */}
      {hasContent && (
        <div className="space-y-3">
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[40px] w-[70%]" />
        </div>
      )}
    </div>
  );
}

export function SectionCardSkeleton() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-stretch p-4 md:p-[16px] rounded-[8px] border border-[#ededed] w-full min-w-0 h-full">
      {/* Header */}
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
        <Skeleton className="size-[32px] rounded-full" />
        <Skeleton className="h-[16px] flex-1" />
      </div>

      {/* Divider */}
      <div className="bg-[#ededed] shrink-0 h-px w-full" />

      {/* Content */}
      <div className="space-y-2">
        <Skeleton className="h-[14px] w-full" />
        <Skeleton className="h-[14px] w-[90%]" />
        <Skeleton className="h-[14px] w-[75%]" />
      </div>
    </div>
  );
}

export function NestedCardSkeleton() {
  return (
    <div className="bg-white relative shrink-0 w-full rounded-[8px] border border-[#ededed]">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[4px] items-start grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
            <Skeleton className="h-[12px] w-[60%]" />
            <Skeleton className="h-[12px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
