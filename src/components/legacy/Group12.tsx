import svgPaths from "./svg-pzm07h914j";

export default function Group() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_784_2949)" id="Group 12">
          <g filter="url(#filter0_d_784_2949)" id="Ellipse 1">
            <circle cx="20" cy="20" fill="var(--fill-0, white)" r="20" />
          </g>
          <g id="Chevron--up">
            <rect fill="white" fillOpacity="0.01" height="16" transform="translate(12 12)" width="16" />
            <path d={svgPaths.p22d08a00} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_784_2949" width="44" x="-2" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_784_2949" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_784_2949" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_784_2949">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}