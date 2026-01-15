import svgPaths from "../../assets/svg/svg-fn6hlpras0";

export type CheckboxState = "checked" | "disabled" | "error" | "unchecked";

export interface CheckboxItem {
  label: string;
  state: CheckboxState;
}

export interface CheckboxGroupProps {
  title?: string; // Optional group title
  items: CheckboxItem[];
  color?: string; // Inherit from page color
}

// Checkbox icon - Unchecked (empty box)
function CheckboxUnchecked({ color = "#161616" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path d={svgPaths.pce6f280} fill="#b1b1b1" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Checkbox icon - Checked
function CheckboxChecked({ color = "#161616" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      {/* Border layer */}
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <g id="Vector">
              <path d={svgPaths.pce6f280} fill="#b1b1b1" />
              <path d={svgPaths.p19969e00} fill="#b1b1b1" />
            </g>
          </g>
        </svg>
      </div>
      {/* Checkmark layer */}
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path d={svgPaths.p1968240} fill="#161616" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Checkbox icon - Disabled (checked but grayed out)
function CheckboxDisabled() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <g id="Vector">
              <path d={svgPaths.pce6f280} fill="#8d8d8d" />
              <path d={svgPaths.p19969e00} fill="#8d8d8d" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path d={svgPaths.p1968240} fill="#8d8d8d" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Checkbox icon - Error (checked with error color)
function CheckboxError() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <g id="Vector">
              <path d={svgPaths.pce6f280} fill="#da1e28" />
              <path d={svgPaths.p19969e00} fill="#da1e28" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path d={svgPaths.p1968240} fill="#da1e28" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Single checkbox with label
function CheckboxWithLabel({
  label,
  state,
  color = "#161616",
}: {
  label: string;
  state: CheckboxState;
  color?: string;
}) {
  const getCheckboxIcon = () => {
    switch (state) {
      case "checked":
        return <CheckboxChecked color={color} />;
      case "disabled":
        return <CheckboxDisabled />;
      case "error":
        return <CheckboxError />;
      case "unchecked":
      default:
        return <CheckboxUnchecked color={color} />;
    }
  };

  const getLabelColor = () => {
    switch (state) {
      case "disabled":
        return "#c6c6c6";
      case "error":
        return "#da1e28";
      default:
        return "inherit"; // Inherit color from parent
    }
  };

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      {/* Checkbox icon */}
      {getCheckboxIcon()}

      {/* Label */}
      <div className="content-stretch flex flex-col items-start px-0 py-px relative shrink-0">
        <p
          className="font-['IBM_Plex_Sans',sans-serif] not-italic relative shrink-0 text-nowrap tracking-[0.16px] text-neutral-600 text-[12px] sm:text-[14px]"
        >
          {label}
        </p>
      </div>
    </div>
  );
}

// Checkbox group component
export function CheckboxGroup({ title, items, color = "#161616" }: CheckboxGroupProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0">
      {/* Optional group title */}
      {title && (
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <p className="font-['IBM_Plex_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] text-nowrap tracking-[0.32px]">
            {title}
          </p>
        </div>
      )}

      {/* Checkbox items */}
      {items.map((item, index) => (
        <CheckboxWithLabel
          key={index}
          label={item.label}
          state={item.state}
          color={color}
        />
      ))}
    </div>
  );
}