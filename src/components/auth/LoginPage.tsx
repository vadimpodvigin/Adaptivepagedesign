import { useState } from "react";
import svgPaths from "../../imports/svg-jbv9pku346";
import viewSvgPaths from "../../imports/svg-ii4aty865g";
import viewOffSvgPaths from "../../imports/svg-1157kohv19";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

function OverflowMenuHorizontal() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Overflow-menu--horizontal"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(255, 255, 255, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="Overflow-menu--horizontal">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="24"
              width="24"
            />
            <g id="Vector">
              <path d={svgPaths.p28385680} fill="#161616" />
              <path d={svgPaths.p11e47970} fill="#161616" />
              <path d={svgPaths.p25e8ad00} fill="#161616" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.pc6a3100} fill="#161616" />
              <path d={svgPaths.p3605a200} fill="#161616" />
              <path d={svgPaths.p282027f0} fill="#161616" />
            </g>
            <g id="Vector_3">
              <path d={svgPaths.p24092800} fill="#161616" />
              <path d={svgPaths.p4279900} fill="#161616" />
              <path d={svgPaths.p1de8f070} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuButton() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[39px]"
      data-name="Menu Button"
    >
      <OverflowMenuHorizontal />
    </div>
  );
}

function SiteTitle() {
  return (
    <div
      className="content-stretch flex items-end justify-center relative shrink-0"
      data-name="Site Title"
    >
      <div className="flex flex-col font-['IBM_Plex_Mono',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[0px] whitespace-nowrap">
        <p className="leading-[normal] text-[14px] whitespace-pre">
          CoreIgnite/
          <span className="text-[#7a23d9]">Docs</span>
        </p>
      </div>
    </div>
  );
}

function HelpButton() {
  return (
    <div
      className="relative shrink-0 w-[22px] h-full hover:opacity-70 transition-opacity cursor-default"
      data-name="Help Button"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Help Button">
          <g id="Vector">
            <path d={svgPaths.pc953140} fill="#161616" />
            <path d={svgPaths.p1bdf2550} fill="#161616" />
            <path d={svgPaths.p3422c700} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || isLoading) return;

    setIsLoading(true);
    setHasError(false);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check password against environment variable or default
    const correctPassword =
      (typeof import.meta !== "undefined" &&
        import.meta.env?.VITE_LOGIN_PASSWORD) ||
      "123";

    if (password === correctPassword) {
      onLoginSuccess();
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-between relative"
      style={{ minHeight: '100dvh' }}
      data-name="Site Frame (Header + Footer)"
    >
      {/* Transparent Gray Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Main Content - Centered Modal */}
      <div className="flex-1 flex items-end md:items-center justify-center relative w-full z-10 px-4 pb-4 md:pb-0">
        <div className="bg-white relative rounded-[8px] shrink-0 w-[320px]">
          <form
            onSubmit={handleSubmit}
            className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[16px] relative rounded-[inherit] w-full"
          >
            {/* Title with Help Icon */}
            <div className="content-stretch flex items-center justify-between relative w-full">
              <div className="flex flex-col font-['IBM_Plex_Sans',sans-serif] font-medium justify-center not-italic text-[#161616] text-[18px]">
                <p className="leading-[normal]">Login</p>
              </div>
              
              {/* Help Button with Tooltip */}
              <div className="relative flex items-center">
                <button
                  type="button"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="bg-transparent border-none p-0 cursor-pointer"
                  aria-label="Help"
                >
                  <HelpButton />
                </button>
                
                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[28px] bg-[#161616] text-white px-[12px] py-[8px] rounded shadow-lg whitespace-nowrap z-50 max-w-[90vw]">
                    <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px]">
                      To get the password, reach out to your administrator
                    </p>
                    {/* Tooltip Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#161616]" />
                  </div>
                )}
              </div>
            </div>

            {/* Password Input with Label */}
            <div className="content-stretch flex flex-col items-start w-full relative shrink-0">
              {/* Label */}
              <div className="content-stretch flex flex-col items-start pb-[8px] relative w-full">
                <p className="font-['IBM_Plex_Sans',sans-serif] leading-[16px] not-italic text-[#525252] text-[12px] tracking-[0.32px]">
                  Password
                </p>
              </div>

              {/* Input Container */}
              <div className="h-[40px] relative w-full group">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[11px] relative size-full">
                    <div className="content-stretch flex flex-1 h-[18px] items-start overflow-x-auto overflow-y-clip relative z-[6]">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setHasError(false);
                        }}
                        disabled={isLoading}
                        className={`flex-1 font-['IBM_Plex_Sans',sans-serif] leading-[18px] not-italic text-[14px] tracking-[0.16px] text-left bg-transparent border-none outline-none overflow-hidden text-ellipsis ${
                          password
                            ? "text-[#161616]"
                            : "text-[#a8a8a8]"
                        } placeholder:text-[#a8a8a8] disabled:opacity-50`}
                      />
                    </div>
                    {/* Show/Hide Toggle Button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="shrink-0 size-[16px] cursor-pointer bg-transparent border-none p-0 z-[7]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        {showPassword ? (
                          /* Carbon View Off Icon from Figma */
                          <g>
                            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
                            <g>
                              <path d={viewOffSvgPaths.pc76100} fill="#161616" />
                              <path d={viewOffSvgPaths.p27e1cf80} fill="#161616" />
                              <path d={viewOffSvgPaths.p1693c980} fill="#161616" />
                            </g>
                          </g>
                        ) : (
                          /* Carbon View Icon from Figma */
                          <g>
                            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
                            <g>
                              <path d={viewSvgPaths.p3345a780} fill="#161616" />
                              <path d={viewSvgPaths.p2fbb9300} fill="#161616" />
                            </g>
                          </g>
                        )}
                      </svg>
                    </button>
                    {/* Background with border */}
                    <div className="absolute bg-[#f4f4f4] inset-0 z-[1]">
                      <div 
                        aria-hidden="true" 
                        className={`absolute border-b border-solid inset-0 pointer-events-none transition-colors ${
                          hasError 
                            ? "border-[#da1e28]" 
                            : "border-[#8d8d8d] group-focus-within:border-[#0f62fe]"
                        }`} 
                      />
                    </div>
                  </div>
                </div>
                {/* Outer border for focus/error states */}
                <div 
                  aria-hidden="true" 
                  className={`absolute border-b border-solid inset-0 pointer-events-none transition-colors ${
                    hasError 
                      ? "border-[#da1e28]" 
                      : "border-[#8d8d8d] group-focus-within:border-[#0f62fe]"
                  }`} 
                />
              </div>
            </div>

            {/* Error Message */}
            {hasError && (
              <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] text-[#da1e28] mt-[-12px] text-left mr-[0px] mb-[0px] ml-[0px] w-full">
                Incorrect password. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!password || isLoading}
              className={`px-[16px] py-[11px] rounded transition-opacity w-full ${
                !password || isLoading
                  ? "opacity-50 cursor-default"
                  : "hover:opacity-90 cursor-pointer"
              }`}
              style={{
                backgroundColor: "#7a23d9",
              }}
            >
              <p
                className="font-['IBM_Plex_Sans',sans-serif] font-bold not-italic text-nowrap tracking-[0.16px]"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "white",
                }}
              >
                {isLoading ? "Loading..." : "Submit"}
              </p>
            </button>
          </form>
          <div
            aria-hidden="true"
            className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* Footer */}
      <div
        className="content-stretch flex flex-col items-center justify-center px-[16px] py-[16px] relative shrink-0 w-full z-10"
        data-name="Footer"
      >
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#525252] text-[12px] text-center w-full whitespace-pre-wrap">
          © 2025 CoreIgnite. All Rights Reserved
        </p>
      </div>
    </div>
  );
}