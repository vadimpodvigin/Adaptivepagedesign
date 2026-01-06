import { Skeleton } from "./ui/skeleton";

interface ComplexCardSkeletonProps {
  variant?: "basic" | "with-tabs" | "with-table" | "with-sections" | "with-nested-cards";
  className?: string;
}

export function ComplexCardSkeleton({ 
  variant = "basic",
  className = "" 
}: ComplexCardSkeletonProps) {
  const renderContent = () => {
    switch (variant) {
      case "with-tabs":
        return (
          <>
            {/* Tab headers */}
            <div className="flex gap-[8px] border-b border-[#ededed] pb-2">
              <Skeleton className="h-[32px] w-[80px]" />
              <Skeleton className="h-[32px] w-[80px]" />
              <Skeleton className="h-[32px] w-[80px]" />
            </div>
            {/* Tab content */}
            <div className="space-y-2">
              <Skeleton className="h-[14px] w-full" />
              <Skeleton className="h-[14px] w-[90%]" />
            </div>
          </>
        );
      
      case "with-table":
        return (
          <div className="space-y-2">
            {/* Table header */}
            <div className="flex gap-2 pb-2 border-b border-[#ededed]">
              <Skeleton className="h-[16px] flex-1" />
              <Skeleton className="h-[16px] flex-1" />
              <Skeleton className="h-[16px] flex-1" />
            </div>
            {/* Table rows */}
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-2">
                <Skeleton className="h-[14px] flex-1" />
                <Skeleton className="h-[14px] flex-1" />
                <Skeleton className="h-[14px] flex-1" />
              </div>
            ))}
          </div>
        );
      
      case "with-sections":
        return (
          <div className="flex gap-[16px]">
            {[1, 2].map((section) => (
              <div key={section} className="flex-1 border border-[#ededed] rounded-[8px] p-[12px] space-y-3">
                <div className="flex gap-2 items-center">
                  <Skeleton className="size-[24px] rounded-full" />
                  <Skeleton className="h-[14px] flex-1" />
                </div>
                <Skeleton className="h-[12px] w-full" />
                <Skeleton className="h-[12px] w-[80%]" />
              </div>
            ))}
          </div>
        );
      
      case "with-nested-cards":
        return (
          <div className="space-y-2">
            {[1, 2, 3].map((card) => (
              <div key={card} className="border border-[#ededed] rounded-[8px] p-[8px] space-y-1">
                <Skeleton className="h-[12px] w-[60%]" />
                <Skeleton className="h-[12px] w-full" />
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="space-y-3">
            <Skeleton className="h-[40px] w-full" />
            <Skeleton className="h-[40px] w-full" />
            <Skeleton className="h-[40px] w-[70%]" />
          </div>
        );
    }
  };

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
      <div className="space-y-2">
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[16px] w-[85%]" />
      </div>

      {/* Dynamic content based on variant */}
      {renderContent()}
    </div>
  );
}
