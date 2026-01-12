import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-pzm07h914j";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show button if scrolled more than 1500px
      setIsVisible(scrollY > 1500);

      // Find the footer element to stop button at footer content start
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        
        // Footer has py-[24px] which is 24px top padding
        const footerPaddingTop = 24;
        const footerContentTop = footerRect.top + footerPaddingTop;
        
        // If footer content is visible in viewport
        if (footerContentTop < windowHeight) {
          // Calculate distance from bottom of viewport to footer content top
          const distanceFooterContentFromBottom = windowHeight - footerContentTop;
          // Button should stop 24px above footer content start
          setBottomPosition(Math.max(40, distanceFooterContentFromBottom + 24));
        } else {
          // Footer not visible, keep button at 40px from bottom
          setBottomPosition(40);
        }
      } else {
        setBottomPosition(40);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 cursor-pointer hover:opacity-80 transition-opacity"
      style={{
        right: 'max(40px, calc(50vw - 600px))', // Stay 40px from right edge of content, but minimum 40px from screen edge
        bottom: `${bottomPosition}px`,
        width: '40px',
        height: '40px',
        overflow: 'visible',
      }}
      aria-label="Scroll to top"
    >
      <div className="relative size-full" style={{ overflow: 'visible' }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
          <g id="Group_12">
            <g filter="url(#filter0_d_scroll_to_top)" id="Ellipse_1">
              <circle cx="20" cy="20" fill="white" r="20" />
            </g>
            <g id="Chevron_up">
              <rect fill="white" fillOpacity="0.01" height="16" transform="translate(12 12)" width="16" />
              <path d={svgPaths.p22d08a00} fill="#161616" id="Vector" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_scroll_to_top" width="44" x="-2" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_scroll_to_top" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_scroll_to_top" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}