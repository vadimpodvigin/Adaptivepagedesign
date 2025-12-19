interface TagProps {
  label: string;
  color?: string;
}

export function Tag({ label, color = "#9f1853" }: TagProps) {
  // Calculate background color with opacity based on the text color
  const getBackgroundColor = (textColor: string) => {
    const hex = textColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
  };

  const backgroundColor = getBackgroundColor(color);

  return (
    <div
      className="content-stretch flex items-start relative rounded-[9px] shrink-0"
      style={{ backgroundColor }}
      data-name="Tag - Read-only"
    >
      <div className="content-stretch flex items-center pl-0 pr-[4px] py-0 relative rounded-[24px] shrink-0">
        <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] pt-0 px-[8px] relative shrink-0">
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[0.32px]"
            style={{ color }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
