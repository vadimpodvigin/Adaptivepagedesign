import { useState } from "react";
import svgPaths from "../../imports/svg-jbv9pku346";

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
      className="relative shrink-0 size-[22px]"
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
      className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-between min-h-screen relative"
      data-name="Site Frame (Header + Footer)"
    >
      {/* Transparent Gray Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Header */}
      <div className="bg-white content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full px-4 md:px-6 z-10">
        <div
          aria-hidden="true"
          className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none"
        />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative z-10">
          <div className="content-stretch flex flex-col items-center justify-center p-[10.5px] relative shrink-0">
            <MenuButton />
          </div>
          <SiteTitle />
        </div>
        <div className="aspect-[22/22] content-stretch flex h-full items-center justify-center relative shrink-0 z-10">
          <HelpButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-10">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-4 md:px-[80px] py-[40px] relative size-full">
            <div className="bg-white relative rounded-[8px] shrink-0 w-full max-w-[440px]">
              <form
                onSubmit={handleSubmit}
                className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-center justify-center overflow-clip px-6 md:px-8 lg:px-[64px] py-8 md:py-[64px] relative rounded-[inherit] w-full"
              >
                <p className="font-['IBM_Plex_Sans',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black text-center">
                  CoreIgnite Docs
                </p>
                <p className="font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-center w-full">
                  This information is password protected.
                </p>

                {/* Password Input */}
                <div className="relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-center px-[8px] h-[44px] relative w-full">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setHasError(false);
                        }}
                        placeholder="Enter password..."
                        disabled={isLoading}
                        className={`font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic w-full text-[14px] text-left bg-transparent border-none outline-none ${
                          password
                            ? "text-[#161616]"
                            : "text-[#525252]"
                        } placeholder:text-[#525252] disabled:opacity-50`}
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className={`absolute border ${hasError ? "border-[#da1e28]" : "border-[#cecece]"} border-solid inset-0 pointer-events-none rounded-[8px]`}
                  />
                </div>

                {/* Error Message */}
                {hasError && (
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] text-[#da1e28] -mt-2 md:-mt-4 text-center md:text-left">
                    Incorrect password. Please try again.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!password || isLoading}
                  className={`px-[12px] sm:px-[16px] py-[11px] rounded cursor-pointer transition-opacity w-full md:w-auto ${
                    !password || isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90"
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
        </div>
      </div>

      {/* Footer */}
      <div
        className="content-stretch flex flex-col items-center justify-center px-4 md:px-0 py-[40px] relative shrink-0 w-full z-10"
        data-name="Footer"
      >
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#525252] text-[12px] text-center w-full whitespace-pre-wrap">
          © 2025 CoreIgnite. All Rights Reserved
        </p>
      </div>
    </div>
  );
}