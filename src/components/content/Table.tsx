export interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  const numColumns = headers.length;
  
  return (
    <div className="content-stretch flex flex-col isolate items-start relative w-full overflow-x-auto">
      {/* Grid container for aligned columns */}
      <div 
        className="w-full min-w-max"
        style={{ 
          display: 'grid',
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`
        }}
      >
        {/* Header Row */}
        {headers.map((header, index) => (
          <div
            key={`header-${index}`}
            className="bg-[#f4f4f4] content-stretch flex gap-[8px] items-center pl-[12px] sm:pl-[16px] pr-[8px] py-[8px] border-b border-[#ededed]"
          >
            <p className="font-['IBM_Plex_Sans',sans-serif] font-medium leading-[18px] not-italic overflow-ellipsis overflow-hidden text-[#161616] text-[12px] sm:text-[14px] text-nowrap tracking-[0.16px]">
              {header}
            </p>
          </div>
        ))}

        {/* Body Rows */}
        {rows.map((row, rowIndex) => (
          row.map((cell, cellIndex) => (
            <div
              key={`cell-${rowIndex}-${cellIndex}`}
              className="content-stretch flex flex-col gap-[16px] items-start p-[12px] sm:p-[16px] border-b border-[#ededed] relative"
            >
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col grow items-start relative">
                  <p className="font-['IBM_Plex_Sans',sans-serif] leading-[18px] not-italic text-[#525252] text-[12px] sm:text-[14px] tracking-[0.16px] w-full break-words">
                    {cell}
                  </p>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
}