export interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative w-full overflow-x-auto">
      {/* Header Row */}
      <div className="content-stretch flex items-start relative shrink-0 w-full min-w-max">
        {headers.map((header, index) => (
          <div
            key={index}
            className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0"
          >
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
                  <p className="basis-0 font-['IBM_Plex_Sans',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">
                    {header}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Body Rows */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full min-w-max"
          >
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0"
                >
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <p className="font-['IBM_Plex_Sans',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">
                              {cell}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Divider line between rows */}
            <div className="absolute bg-[#ededed] h-px left-0 right-0 top-0" />
          </div>
        ))}
      </div>
    </div>
  );
}