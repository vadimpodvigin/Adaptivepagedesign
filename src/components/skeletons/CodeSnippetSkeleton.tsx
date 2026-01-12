import { Skeleton } from "../ui/skeleton";

interface CodeSnippetSkeletonProps {
  hasCaption?: boolean;
  lines?: number;
}

export function CodeSnippetSkeleton({ hasCaption = false, lines = 3 }: CodeSnippetSkeletonProps) {
  return (
    <div className="relative w-full">
      <div className="bg-[#f4f4f4] border border-[#ededed] rounded-[4px] p-[12px] overflow-hidden">
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, index) => (
            <Skeleton 
              key={index} 
              className="h-[14px]" 
              style={{ width: `${Math.random() * 30 + 60}%` }}
            />
          ))}
        </div>
      </div>
      {hasCaption && (
        <div className="mt-2">
          <Skeleton className="h-[12px] w-[40%]" />
        </div>
      )}
    </div>
  );
}
