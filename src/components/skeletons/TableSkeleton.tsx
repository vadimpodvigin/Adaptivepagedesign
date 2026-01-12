import { Skeleton } from "../ui/skeleton";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export function TableSkeleton({ rows = 3, columns = 3 }: TableSkeletonProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#ededed]">
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="p-[12px] text-left">
                <Skeleton className="h-[16px] w-full" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[#ededed] last:border-0">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="p-[12px]">
                  <Skeleton className="h-[14px] w-[90%]" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
