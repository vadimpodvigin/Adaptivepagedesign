import { Skeleton } from "./ui/skeleton";

export function NotificationSkeleton() {
  return (
    <div className="border border-[#ededed] rounded-[4px] p-[12px]">
      <div className="flex gap-3 items-start">
        <Skeleton className="size-[20px] shrink-0 mt-[2px]" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-[16px] w-[40%]" />
          <Skeleton className="h-[14px] w-full" />
          <Skeleton className="h-[14px] w-[85%]" />
        </div>
      </div>
    </div>
  );
}
