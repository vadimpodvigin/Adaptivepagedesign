import svgPathsInfo from "../../assets/svg/svg-k7jjb7zmtn";

// Info icon (filled circle with i)
function InfoIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": color } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Information--filled">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path d={svgPathsInfo.p2ac4270} fill="var(--fill-0)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Success icon (filled circle with checkmark)
function SuccessIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": color } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkmark--filled">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path 
              d="M10 1.25C8.26941 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91605 6.65152C1.25378 8.25037 1.0805 10.0097 1.41812 11.707C1.75575 13.4044 2.5891 14.9635 3.81281 16.1872C5.03652 17.4109 6.59562 18.2443 8.29296 18.5819C9.99029 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25V1.25ZM14.1016 8.39844L9.10156 13.3984C9.03813 13.4619 8.96279 13.5123 8.88009 13.5468C8.79738 13.5813 8.70892 13.5992 8.61953 13.5996C8.53014 13.6 8.44151 13.5829 8.35851 13.5492C8.27552 13.5155 8.19975 13.4658 8.13574 13.4029L5.88574 11.1529C5.75727 11.0244 5.68555 10.8491 5.68555 10.666C5.68555 10.4829 5.75727 10.3076 5.88574 10.1791C6.01422 10.0506 6.18951 9.97891 6.37262 9.97891C6.55572 9.97891 6.73101 10.0506 6.85949 10.1791L8.62246 11.9416L13.1279 7.43555C13.2564 7.30707 13.4317 7.23535 13.6148 7.23535C13.7979 7.23535 13.9732 7.30707 14.1016 7.43555C14.2301 7.56402 14.3018 7.73932 14.3018 7.92242C14.3018 8.10552 14.2301 8.28082 14.1016 8.40929V8.39844Z"
              fill="var(--fill-0)" 
              id="Vector" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Warning icon (filled triangle with exclamation)
function WarningIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": color } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Warning--filled">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path 
              d="M19.3359 16.4062L11.0859 2.03125C10.9704 1.8252 10.8011 1.65326 10.596 1.53359C10.3908 1.41392 10.1572 1.35059 9.91895 1.35059C9.68066 1.35059 9.44709 1.41392 9.24194 1.53359C9.03678 1.65326 8.86746 1.8252 8.75195 2.03125L0.501953 16.4062C0.388409 16.6095 0.329346 16.8392 0.330729 17.0726C0.332112 17.3061 0.393898 17.5351 0.509766 17.7371C0.625634 17.9391 0.791582 18.1071 0.99158 18.2251C1.19158 18.3432 1.41904 18.4073 1.65137 18.4111H18.1514C18.3837 18.4073 18.6111 18.3432 18.8111 18.2251C19.0111 18.1071 19.1771 17.9391 19.293 17.7371C19.4088 17.5351 19.4706 17.3061 19.472 17.0726C19.4734 16.8392 19.4143 16.6095 19.3008 16.4062H19.3359ZM10.625 15.625C10.625 15.7742 10.5656 15.9173 10.4594 16.0234C10.3533 16.1295 10.2103 16.1889 10.061 16.1889C9.91178 16.1889 9.76875 16.1295 9.66263 16.0234C9.55651 15.9173 9.49707 15.7742 9.49707 15.625V15.0611C9.49707 14.9119 9.55651 14.7688 9.66263 14.6627C9.76875 14.5566 9.91178 14.4972 10.061 14.4972C10.2103 14.4972 10.3533 14.5566 10.4594 14.6627C10.5656 14.7688 10.625 14.9119 10.625 15.0611V15.625ZM10.625 12.8056C10.625 12.9548 10.5656 13.0978 10.4594 13.2039C10.3533 13.3101 10.2103 13.3695 10.061 13.3695C9.91178 13.3695 9.76875 13.3101 9.66263 13.2039C9.55651 13.0978 9.49707 12.9548 9.49707 12.8056V7.91669C9.49707 7.76746 9.55651 7.62443 9.66263 7.51831C9.76875 7.41219 9.91178 7.35275 10.061 7.35275C10.2103 7.35275 10.3533 7.41219 10.4594 7.51831C10.5656 7.62443 10.625 7.76746 10.625 7.91669V12.8056Z"
              fill="var(--fill-0)" 
              id="Vector" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Error icon (filled circle with X)
function ErrorIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": color } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Error--filled">
            <rect fill="white" fillOpacity="0.01" height="20" width="20" />
            <path 
              d="M10 1.25C8.26941 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91605 6.65152C1.25378 8.25037 1.0805 10.0097 1.41812 11.707C1.75575 13.4044 2.5891 14.9635 3.81281 16.1872C5.03652 17.4109 6.59562 18.2443 8.29296 18.5819C9.99029 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25V1.25ZM13.1875 12.2168C13.2432 12.2725 13.2877 12.3386 13.3185 12.4114C13.3493 12.4842 13.3657 12.5624 13.3669 12.6416C13.3681 12.7208 13.3539 12.7995 13.3253 12.8732C13.2967 12.9469 13.2543 13.0142 13.2004 13.0715C13.1464 13.1287 13.0819 13.1749 13.0104 13.2075C12.9389 13.2401 12.8617 13.2585 12.7831 13.2616C12.7046 13.2648 12.6261 13.2527 12.5521 13.2259C12.4781 13.1992 12.4101 13.1584 12.3516 13.1055L10.0176 10.7969L7.68359 13.1055C7.56843 13.2206 7.41079 13.2853 7.24649 13.2853C7.0822 13.2853 6.92455 13.2206 6.80938 13.1055C6.69422 12.9903 6.62949 12.8326 6.62949 12.6683C6.62949 12.504 6.69422 12.3464 6.80938 12.2312L9.11914 9.92148L6.80938 7.61172C6.69422 7.49655 6.62949 7.33891 6.62949 7.17461C6.62949 7.01032 6.69422 6.85267 6.80938 6.73751C6.92455 6.62234 7.0822 6.55762 7.24649 6.55762C7.41079 6.55762 7.56843 6.62234 7.68359 6.73751L10.0176 9.04688L12.3516 6.73751C12.4667 6.62234 12.6244 6.55762 12.7887 6.55762C12.953 6.55762 13.1106 6.62234 13.2258 6.73751C13.341 6.85267 13.4057 7.01032 13.4057 7.17461C13.4057 7.33891 13.341 7.49655 13.2258 7.61172L10.916 9.92148L13.2258 12.2312L13.1875 12.2168Z"
              fill="var(--fill-0)" 
              id="Vector" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export type NotificationType = "info" | "success" | "warning" | "error";

export interface NotificationProps {
  type: NotificationType;
  title: string;
  message: string;
}

const notificationStyles: Record<
  NotificationType,
  {
    backgroundColor: string;
    borderColor: string;
    accentColor: string;
    icon: React.ComponentType<{ color: string }>;
  }
> = {
  info: {
    backgroundColor: "#edf5ff",
    borderColor: "rgba(0, 67, 206, 0.3)",
    accentColor: "#0043ce",
    icon: InfoIcon,
  },
  success: {
    backgroundColor: "#defbe6",
    borderColor: "rgba(36, 161, 72, 0.3)",
    accentColor: "#24a148",
    icon: SuccessIcon,
  },
  warning: {
    backgroundColor: "#fcf4d6",
    borderColor: "rgba(241, 194, 27, 0.3)",
    accentColor: "#f1c21b",
    icon: WarningIcon,
  },
  error: {
    backgroundColor: "#fff1f1",
    borderColor: "rgba(218, 30, 40, 0.3)",
    accentColor: "#da1e28",
    icon: ErrorIcon,
  },
};

export function Notification({ type, title, message }: NotificationProps) {
  const style = notificationStyles[type];
  const IconComponent = style.icon;

  return (
    <div
      className="relative w-full"
      style={{ backgroundColor: style.backgroundColor }}
      data-name="Notification"
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none"
        style={{ borderColor: style.borderColor }}
      />
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-0 relative size-full">
          {/* Icon margin */}
          <div className="content-stretch flex items-start pb-0 pt-[14px] px-0 relative shrink-0">
            <IconComponent color={style.accentColor} />
          </div>

          {/* Title + Message */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic px-[16px] py-[15px] relative text-[#161616] text-[14px] tracking-[0.16px] w-full">
                <p className="font-['IBM_Plex_Sans',sans-serif] font-semibold relative shrink-0 w-full">
                  {title}
                </p>
                <p className="font-['IBM_Plex_Sans',sans-serif] relative shrink-0 w-full">
                  {message}
                </p>
              </div>
            </div>
          </div>

          {/* Left accent border (vertical bar) */}
          <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-0">
            <div className="flex-none h-px rotate-[90deg] w-[68px]">
              <div className="relative size-full">
                <div
                  className="absolute inset-[-3px_0_0_0]"
                  style={{ "--stroke-0": style.accentColor } as React.CSSProperties}
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 68 3"
                  >
                    <line
                      stroke="var(--stroke-0)"
                      strokeWidth="3"
                      x2="68"
                      y1="1.5"
                      y2="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}