import { Skeleton } from "../ui/skeleton";

interface ListSkeletonProps {
  items?: number;
  type?: "ordered" | "unordered";
}

export function ListSkeleton({ items = 3, type = "unordered" }: ListSkeletonProps) {
  const ListTag = type === "ordered" ? "ol" : "ul";
  
  return (
    <ListTag className="space-y-2 pl-[24px]">
      {Array.from({ length: items }).map((_, index) => (
        <li key={index} className="flex items-center gap-2">
          <Skeleton className="h-[14px] flex-1" />
        </li>
      ))}
    </ListTag>
  );
}
