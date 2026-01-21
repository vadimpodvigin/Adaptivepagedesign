import { useState, useEffect } from "react";
import svgPaths from "../../assets/svg/svg-pzm07h914j";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768; // md breakpoint

      // Show button if scrolled more than 1500px
      setIsVisible(scrollY > 1500);

      // Find the footer element to stop button at footer content start
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        
        // Footer has py-[24px] which is 24px top padding
        const footerPaddingTop = 24;
        const footerContentTop = footerRect.top + footerPaddingTop;
        
        // On mobile, also account for the bottom header (60px)
        const mobileHeaderHeight = isMobile ? 60 : 0;
        
        // If footer content is visible in viewport
        if (footerContentTop < windowHeight) {
          // Calculate distance from bottom of viewport to footer content top
          const distanceFooterContentFromBottom = windowHeight - footerContentTop;
          // Button should stop 24px above footer content start, plus mobile header space
          setBottomPosition(Math.max(40, distanceFooterContentFromBottom + 24 + mobileHeaderHeight));
        } else {
          // Footer not visible, keep button at 40px from bottom on desktop, above header on mobile
          setBottomPosition(isMobile ? 100 : 40);
        }
      } else {
        setBottomPosition(isMobile ? 100 : 40);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Also listen to resize for responsive updates
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
        right: 'max(40px, calc(50vw - 616px))', // Stay 16px from right edge of content, but minimum 40px from screen edge
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
              <path d={svgPaths.p22d08a00} fill="#161616" stroke="#161616" strokeWidth="0.2" id="Vector" />
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