import svgPaths from "../../assets/svg/svg-95r2qddasp";

export type StepState = "incomplete" | "completed" | "error" | "current";
export type StepDirection = "vertical" | "horizontal";

export interface Step {
  label: string;
  description?: string;
  state: StepState;
}

export interface StepperProps {
  steps: Step[];
  direction?: StepDirection;
  color?: string; // Main color for completed and current states
}

// Incomplete icon (unfilled circle with dashes)
function IncompleteIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Circle-dash">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={svgPaths.p54db600} fill="#c6c6c6" />
              <path d={svgPaths.p136a6280} fill="#c6c6c6" />
              <path d={svgPaths.p1df8f200} fill="#c6c6c6" />
              <path d={svgPaths.p3511c200} fill="#c6c6c6" />
              <path d={svgPaths.p3b1beae0} fill="#c6c6c6" />
              <path d={svgPaths.pc006f00} fill="#c6c6c6" />
              <path d={svgPaths.p10619200} fill="#c6c6c6" />
              <path d={svgPaths.p1cc00140} fill="#c6c6c6" />
              <path d={svgPaths.p2584dc80} fill="#c6c6c6" />
              <path d={svgPaths.p38c15470} fill="#c6c6c6" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// Current icon (half-filled circle)
function CurrentIcon({ color = "#0f62fe" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Incomplete--normal">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={svgPaths.p1fe6580} fill={color} />
              <path d={svgPaths.p115e8400} fill={color} />
              <path d={svgPaths.p105bf140} fill={color} />
              <path d={svgPaths.p17725600} fill={color} />
              <path d={svgPaths.p3be55240} fill={color} />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// Completed icon (checkmark in circle)
function CompletedIcon({ color = "#0f62fe" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[16px]" style={{ color }}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Checkmark--filled">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <path
              d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM11.2812 6.59375L7.59375 10.2812C7.54104 10.3341 7.47859 10.3761 7.40994 10.4049C7.34129 10.4336 7.26775 10.4485 7.19355 10.4488C7.11935 10.449 7.04571 10.4347 6.97687 10.4065C6.90804 10.3783 6.84532 10.3368 6.79229 10.2844L4.70479 8.19687C4.59808 8.09016 4.53792 7.94402 4.53792 7.79167C4.53792 7.63931 4.59808 7.49317 4.70479 7.38646C4.8115 7.27975 4.95764 7.21959 5.10999 7.21959C5.26235 7.21959 5.40849 7.27975 5.5152 7.38646L7.19792 9.07083L10.4714 5.79687C10.5781 5.69016 10.7242 5.63 10.8766 5.63C11.0289 5.63 11.1751 5.69016 11.2818 5.79687C11.3885 5.90358 11.4487 6.04972 11.4487 6.20208C11.4487 6.35443 11.3885 6.50057 11.2818 6.60729L11.2812 6.59375Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Error icon (X in circle)
function ErrorIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Error--filled">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <path
              d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM10.5 9.79688C10.5534 9.85008 10.5959 9.91331 10.6249 9.98297C10.654 10.0526 10.669 10.1274 10.6693 10.2029C10.6695 10.2785 10.6551 10.3533 10.6265 10.4232C10.598 10.4931 10.5559 10.5567 10.5028 10.6104C10.4498 10.6641 10.3868 10.7068 10.3174 10.736C10.248 10.7651 10.1736 10.7801 10.0984 10.7803C10.0233 10.7806 9.94878 10.7661 9.87917 10.7376C9.80955 10.709 9.74598 10.6669 9.69271 10.6137L8.01396 8.95938L6.33521 10.6137C6.22842 10.7205 6.08228 10.7807 5.92993 10.7807C5.77757 10.7807 5.63143 10.7205 5.52464 10.6137C5.41786 10.507 5.3577 10.3608 5.3577 10.2085C5.3577 10.0561 5.41786 9.90998 5.52464 9.80319L7.17896 8.12444L5.52464 6.44569C5.41786 6.3389 5.3577 6.19276 5.3577 6.04041C5.3577 5.88805 5.41786 5.74191 5.52464 5.63513C5.63143 5.52834 5.77757 5.46818 5.92993 5.46818C6.08228 5.46818 6.22842 5.52834 6.33521 5.63513L8.01396 7.28944L9.69271 5.63513C9.7995 5.52834 9.94564 5.46818 10.098 5.46818C10.2504 5.46818 10.3965 5.52834 10.5033 5.63513C10.6101 5.74191 10.6702 5.88805 10.6702 6.04041C10.6702 6.19276 10.6101 6.3389 10.5033 6.44569L8.84896 8.12444L10.5033 9.80319L10.5 9.79688Z"
              fill="#da1e28"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function getIconForState(state: StepState, color?: string) {
  switch (state) {
    case "completed":
      return <CompletedIcon color={color} />;
    case "current":
      return <CurrentIcon color={color} />;
    case "error":
      return <ErrorIcon />;
    case "incomplete":
    default:
      return <IncompleteIcon />;
  }
}

function getBorderColor(state: StepState, color?: string): string {
  switch (state) {
    case "completed":
    case "current":
      return color || "#0f62fe";
    case "error":
      return "#da1e28";
    case "incomplete":
    default:
      return "#c6c6c6";
  }
}

function getTextColor(state: StepState): string {
  switch (state) {
    case "completed":
    case "current":
    case "error":
      return "#161616";
    case "incomplete":
    default:
      return "#525252";
  }
}

export function Stepper({ steps, direction = "horizontal", color }: StepperProps) {
  const isVertical = direction === "vertical";

  if (isVertical) {
    // Vertical layout
    return (
      <div className="flex flex-col w-full">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const borderColor = getBorderColor(step.state, color);
          const textColor = getTextColor(step.state);

          return (
            <div key={index} className="flex w-full">
              {/* Left side: Icon and connecting line */}
              <div className="flex flex-col items-center shrink-0">
                {/* Icon */}
                <div className="flex items-start px-0 py-px shrink-0">
                  {getIconForState(step.state, color)}
                </div>

                {/* Vertical connecting line */}
                {!isLast && (
                  <div
                    className="w-px flex-1 min-h-[32px]"
                    style={{ backgroundColor: borderColor }}
                  />
                )}
              </div>

              {/* Right side: Label and description */}
              <div className="flex flex-col pl-[8px] pb-[16px] flex-1">
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] leading-[18px] not-italic text-[14px] tracking-[0.16px]"
                  style={{ color: textColor, fontWeight: 500 }}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="font-['IBM_Plex_Sans',sans-serif] leading-[16px] not-italic text-[#525252] text-[12px] tracking-[0.32px] mt-[4px]">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal layout
  return (
    <div className="content-stretch flex items-start relative w-full overflow-x-auto">
      {steps.map((step, index) => {
        const borderColor = getBorderColor(step.state, color);
        const textColor = getTextColor(step.state);

        return (
          <div
            key={index}
            className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0"
          >
            <div
              aria-hidden="true"
              className="absolute border-solid inset-0 pointer-events-none"
              style={{
                borderTop: `2px solid ${borderColor}`,
              }}
            />
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[16px] pt-[10px] relative w-full">
                  {/* Icon + Label */}
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-start px-0 py-px relative shrink-0">
                      {getIconForState(step.state, color)}
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[18px] items-start mix-blend-multiply overflow-clip relative shrink-0">
                      <p
                        className="font-['IBM_Plex_Sans',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px]"
                        style={{ color: textColor }}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>

                  {/* Optional label (description) */}
                  {step.description && (
                    <div className="relative shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-start pl-[24px] pr-0 py-0 relative w-full">
                          <p className="basis-0 font-['IBM_Plex_Sans',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Min-width constraint */}
            <div className="h-[0.001px] shrink-0 w-[128px]" />
          </div>
        );
      })}
    </div>
  );
}