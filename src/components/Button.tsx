import svgPaths from "../imports/svg-94junnxbk1";

interface ButtonProps {
  label: string;
  url: string;
  color?: string;
  onClick?: () => void;
  fontSize?: number; // font size in px (14 for cards, 12 for sections, 10 for tabs)
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <div
        className="absolute inset-0"
        style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="Add">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="16"
              style={{ mixBlendMode: "multiply" }}
              width="16"
            />
            <path
              d={svgPaths.p349d7700}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Button({
  label,
  url,
  color = "#7a23d9",
  onClick,
  fontSize = 14,
}: ButtonProps) {
  const lineHeight = fontSize === 14 ? 18 : fontSize === 12 ? 16 : 14;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity w-fit"
      style={{ backgroundColor: color }}
      data-name="Button"
    >
      <div className="relative shrink-0" data-name="Button content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] h-full">
          <div className="content-stretch flex isolate items-center gap-6 px-[16px] py-[11px] relative">
            <p
              className="font-['IBM_Plex_Sans:SemiBold',sans-serif] not-italic relative shrink-0 text-nowrap text-white tracking-[0.16px]"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: `${lineHeight}px`,
              }}
            >
              {label}
            </p>
            <div
              className="content-stretch flex flex-col items-start overflow-clip shrink-0"
              data-name="Icon"
            >
              <AddIcon />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}