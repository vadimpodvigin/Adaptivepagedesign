interface ButtonProps {
  label: string;
  url: string;
  type?: "primary" | "tertiary";
  color?: string;
  onClick?: () => void;
}

export function Button({
  label,
  url,
  type = "primary",
  color = "#7a23d9",
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const isPrimary = type === "primary";

  return (
    <button
      onClick={handleClick}
      className={`m-1 px-[16px] py-[11px] rounded cursor-pointer transition-opacity w-fit ${
        isPrimary ? "hover:opacity-90" : "hover:opacity-70"
      }`}
      style={{
        backgroundColor: isPrimary ? color : "transparent",
      }}
    >
      <p
        className="font-['IBM_Plex_Sans',sans-serif] font-bold not-italic text-nowrap tracking-[0.16px]"
        style={{
          fontSize: "14px",
          lineHeight: "18px",
          color: isPrimary ? "white" : "#525252",
        }}
      >
        {label}
      </p>
    </button>
  );
}
