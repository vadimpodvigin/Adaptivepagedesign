import { Skeleton } from "../ui/skeleton";

export function WorkflowTileSkeleton() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[120px] isolate items-start relative shrink-0 w-full max-w-[308px]">
      <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full z-[8]">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pl-[16px] pr-[8px] py-[16px] relative w-full">
              <Skeleton className="h-[18px] w-[80%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[48px] items-end justify-end relative shrink-0 w-full z-[5]">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-center mix-blend-multiply overflow-clip p-[3px] relative shrink-0 size-[48px]">
          <Skeleton className="size-[20px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
