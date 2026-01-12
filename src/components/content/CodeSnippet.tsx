import svgPaths from "../../assets/svg/svg-ju1waauq4r";
import copyIconPaths from "../../assets/svg/svg-tv6jofgkbo";
import { useState } from "react";

interface CodeSnippetProps {
  code: string;
  caption?: string;
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--up">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Chevron--up">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p23aae480} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" transform="rotate(180)">
          <g id="Chevron--down">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p23aae480} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Copy">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Copy">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={copyIconPaths.p35c00080} fill="#161616" />
              <path d={copyIconPaths.p2aaf9200} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function CodeSnippet({ code, caption }: CodeSnippetProps) {
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const codeLines = code.split('\n');

  const handleCopy = async () => {
    try {
      // Use fallback method for iframe contexts where Clipboard API is blocked
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setShowCopyTooltip(true);
          setTimeout(() => setShowCopyTooltip(false), 2000);
        }
      } catch (err) {
        console.error('Copy failed:', err);
      } finally {
        document.body.removeChild(textarea);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="bg-[#f4f4f4] relative shrink-0 w-full rounded-[4px]" data-name="Code snippet - Multi-line">
        <div className="size-full">
          <div className="content-stretch flex items-start pl-[16px] pr-0 py-0 relative w-full">
            {/* Content */}
            <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px overflow-auto pb-[15px] pt-[16px] px-0 relative shrink-0" data-name="Content">
              {/* Line Numbers */}
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start mix-blend-multiply overflow-clip pl-0 pr-[16px] py-0 relative self-stretch shrink-0 border-r border-[#c6c6c6]" data-name="Numbers">
                <div className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-nowrap tracking-[0.32px]">
                  {codeLines.map((_, index) => (
                    <p key={index} className="mb-0">{index + 1}</p>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-auto relative self-stretch shrink-0" data-name="Snippet">
                <div className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] tracking-[0.32px] whitespace-pre">
                  {codeLines.map((line, index) => (
                    <p key={index} className="mb-0">{line || ' '}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient Wrapper */}
            <div className="absolute bottom-0 content-stretch flex flex-col items-end right-0 top-0 w-[72px] pointer-events-none" data-name="Gradient wrapper">
              <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px mix-blend-multiply relative shrink-0 w-full">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] size-full">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex isolate items-start relative size-full" data-name="Gradient (Variable)">
                    <div className="absolute bg-gradient-to-r from-[#f4f4f4] inset-0 to-[rgba(244,244,244,0)] z-[4]" data-name="Gradient - White Theme" />
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <div className="absolute right-[8px] top-[8px] z-[5] pointer-events-auto" data-name="Copy button">
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 hover:bg-[#e8e8e8] active:bg-[#e0e0e0] transition-colors cursor-pointer p-[8px]"
                  data-name="Button"
                  aria-label="Copy code"
                >
                  <CopyIcon />
                </button>
                {showCopyTooltip && (
                  <div className="fixed left-1/2 -translate-x-1/2 px-3 py-2 bg-[#161616] text-white text-[12px] rounded whitespace-nowrap pointer-events-none z-50" style={{ bottom: '40px' }}>
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic text-[12px] text-[#525252] w-full">
          {caption}
        </p>
      )}
    </div>
  );
}