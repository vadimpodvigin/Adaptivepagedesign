import { NotificationSkeleton } from "./NotificationSkeleton";

export function NotificationsSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      {Array.from({ length: count }).map((_, index) => (
        <NotificationSkeleton key={index} />
      ))}
    </div>
  );
}
