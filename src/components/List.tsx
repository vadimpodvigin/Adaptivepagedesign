export interface ListItem {
  text: string;
  nested?: ListItem[];
}

interface ListProps {
  items: ListItem[];
  type?: "ordered" | "unordered";
  startNumber?: number;
  nestedType?: "alpha" | "bullet";
}

function getOrderedMarker(index: number): string {
  return `${index + 1}.`;
}

function getAlphaMarker(index: number): string {
  return `${String.fromCharCode(97 + index)}.`;
}

function getUnorderedMarker(): string {
  return "–";
}

function getBulletMarker(): string {
  return "■";
}

function ListItemComponent({
  text,
  marker,
  markerWidth,
  nested,
  nestedType = "alpha",
}: {
  text: string;
  marker: string;
  markerWidth: string;
  nested?: ListItem[];
  nestedType?: "alpha" | "bullet";
}) {
  const hasNested = nested && nested.length > 0;

  return (
    <>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] mix-blend-multiply not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full">
        <p className={`relative self-stretch shrink-0 ${markerWidth}`}>
          {marker}
        </p>
        <p className="basis-0 grow min-h-px min-w-px relative shrink-0">
          {text}
        </p>
      </div>

      {/* Render nested items */}
      {hasNested &&
        nested.map((nestedItem, index) => {
          const nestedMarker =
            nestedType === "alpha"
              ? getAlphaMarker(index)
              : getBulletMarker();
          const nestedMarkerWidth =
            nestedType === "alpha" ? "w-[13px]" : "w-[8px] text-[6px] text-center";

          return (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 w-full"
            >
              <div className="size-full">
                <div
                  className={`content-stretch flex gap-[8px] items-start leading-[20px] not-italic pl-[24px] pr-0 py-0 relative text-[#161616] tracking-[0.16px] w-full ${nestedType === "bullet" ? "font-['IBM_Plex_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif]" : "font-['IBM_Plex_Sans:Regular',sans-serif]"}`}
                >
                  <p
                    className={`relative self-stretch shrink-0 ${nestedMarkerWidth} ${nestedType === "bullet" ? "font-['IBM_Plex_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] text-[6px]" : "font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px]"}`}
                  >
                    {nestedMarker}
                  </p>
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',sans-serif] grow min-h-px min-w-px relative shrink-0 text-[14px]">
                    {nestedItem.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export function List({
  items,
  type = "unordered",
  startNumber = 1,
  nestedType = "alpha",
}: ListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative w-full">
      {items.map((item, index) => {
        let marker: string;
        let markerWidth: string;

        if (type === "ordered") {
          marker = getOrderedMarker(startNumber - 1 + index);
          markerWidth = "w-[13px]";
        } else {
          marker = getUnorderedMarker();
          markerWidth = "w-[8px]";
        }

        return (
          <ListItemComponent
            key={index}
            text={item.text}
            marker={marker}
            markerWidth={markerWidth}
            nested={item.nested}
            nestedType={nestedType}
          />
        );
      })}
    </div>
  );
}
