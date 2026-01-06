export interface ListItem {
  text: string;
  nested?: ListItem[];
}

interface ListProps {
  items: ListItem[];
  type?: "ordered" | "unordered";
  startNumber?: number;
  nestedType?: "alpha" | "bullet";
  // Inherited text styles from previous text block
  inheritedColor?: string;
  inheritedFontSize?: string;
  inheritedFontWeight?: string;
  inheritedFontFamily?: string;
  inheritedLineHeight?: string;
  inheritedLetterSpacing?: string;
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
  inheritedColor,
  inheritedFontSize,
  inheritedFontWeight,
  inheritedFontFamily,
  inheritedLineHeight,
  inheritedLetterSpacing,
}: {
  text: string;
  marker: string;
  markerWidth: string;
  nested?: ListItem[];
  nestedType?: "alpha" | "bullet";
  inheritedColor?: string;
  inheritedFontSize?: string;
  inheritedFontWeight?: string;
  inheritedFontFamily?: string;
  inheritedLineHeight?: string;
  inheritedLetterSpacing?: string;
}) {
  const hasNested = nested && nested.length > 0;

  // Default styles
  const color = inheritedColor || "#737373"; // text-neutral-600
  const fontSize = inheritedFontSize || "16px";
  const fontWeight = inheritedFontWeight || "400";
  const fontFamily = inheritedFontFamily || "IBM Plex Sans, sans-serif";
  const lineHeight = inheritedLineHeight || "normal";
  const letterSpacing = inheritedLetterSpacing || "normal";

  const textStyle = {
    color,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    letterSpacing,
  };

  return (
    <>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start mix-blend-multiply not-italic relative shrink-0 w-full">
        <p className={`relative self-stretch shrink-0 ${markerWidth}`} style={textStyle}>
          {marker}
        </p>
        <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={textStyle}>
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

          const nestedMarkerStyle = nestedType === "bullet" 
            ? { ...textStyle, fontSize: "6px", fontFamily: "IBM Plex Sans, Noto Sans Symbols2, sans-serif" }
            : textStyle;

          return (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 w-full"
            >
              <div className="size-full">
                <div className="content-stretch flex gap-[8px] items-start not-italic pl-[24px] pr-0 py-0 relative w-full">
                  <p
                    className={`relative self-stretch shrink-0 ${nestedMarkerWidth}`}
                    style={nestedMarkerStyle}
                  >
                    {nestedMarker}
                  </p>
                  <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={textStyle}>
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
  inheritedColor,
  inheritedFontSize,
  inheritedFontWeight,
  inheritedFontFamily,
  inheritedLineHeight,
  inheritedLetterSpacing,
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
            inheritedColor={inheritedColor}
            inheritedFontSize={inheritedFontSize}
            inheritedFontWeight={inheritedFontWeight}
            inheritedFontFamily={inheritedFontFamily}
            inheritedLineHeight={inheritedLineHeight}
            inheritedLetterSpacing={inheritedLetterSpacing}
          />
        );
      })}
    </div>
  );
}