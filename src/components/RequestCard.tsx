import svgPaths from "../imports/svg-xpebenqrq1";
import svgPathsGrey from "../imports/svg-cne0z3qkwz";
import svgPathsUpGrey from "../imports/svg-9j3qgonek1";
import ArrowDown from "../imports/ArrowDown";
import ArrowRight from "../imports/ArrowRight";
import ArrowLeft from "../imports/ArrowLeft";
import ArrowRightGrey159 from "../imports/ArrowRight-159-390";
import ArrowLeftGrey159 from "../imports/ArrowLeft-159-371";
import { useState, useRef, useEffect } from "react";

// TypeScript type for card data structure
export interface CardData {
  title: string;
  badge: string;
  description: string;
  navigation: "vertical" | "horizontal";
}

export interface CardsData {
  cards: CardData[];
}

function NumberBadge({ number }: { number: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[32px] px-[8px] h-[32px]">
      <div aria-hidden="true" className="absolute border border-[#7a23d9] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a23d9] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{number}</p>
      </div>
    </div>
  );
}

function ArrowDownGrey() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow--down">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 82, 82, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Arrow--down">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <path d={svgPathsGrey.p2324eb80} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUpGrey() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow--up">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 82, 82, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Arrow--up">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <path d={svgPathsUpGrey.p14ab8500} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRightWhite() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowRight />
    </div>
  );
}

function ArrowRightGrey() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowRightGrey159 />
    </div>
  );
}

function ArrowLeftWhite() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowLeft />
    </div>
  );
}

function ArrowLeftGrey() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowLeftGrey159 />
    </div>
  );
}

interface CardProps {
  title: string;
  badge: string;
  description: string;
  className?: string;
}

function Card({ title, badge, description, className = "" }: CardProps) {
  return (
    <div className={`bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-4 md:p-[24px] rounded-[8px] transition-shadow hover:shadow-md h-full ${className}`}>
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[20px] md:text-[24px]">
          <p className="leading-[normal]">{title}</p>
        </div>
        <NumberBadge number={badge} />
      </div>
      
      <div className="bg-[#ededed] h-px shrink-0 w-full" />
      
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] text-neutral-600 w-full">
        {description}
      </p>
    </div>
  );
}

interface ExpandButtonProps {
  isExpanded: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  direction: "vertical" | "horizontal";
}

function ExpandButton({ isExpanded, isHovered, onToggle, onMouseEnter, onMouseLeave, direction }: ExpandButtonProps) {
  if (direction === "horizontal") {
    // Horizontal button (right arrow) - aligned to the right of the card
    return (
      <div className="flex items-center justify-center">
        <button
          onClick={onToggle}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`content-stretch size-[40px] flex-col flex isolate items-center justify-center overflow-clip shrink-0 transition-all duration-200 cursor-pointer ${
            isExpanded 
              ? 'bg-transparent hover:bg-[#EBEBEB]' 
              : 'bg-[#7a23d9] hover:bg-[#6a1fc9]'
          }`}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip size-full">
              <div className={`box-border content-stretch flex isolate items-center justify-center relative w-full ${
                isExpanded ? 'p-[8px]' : 'p-[12px]'
              }`}>
                <div className={`content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1] transition-all duration-200 ${
                  isExpanded ? 'size-[24px]' : 'size-[24px]'
                }`}>
                  {isExpanded 
                    ? (isHovered === true ? <ArrowLeftGrey /> : <ArrowRightGrey />)
                    : <ArrowRightWhite />
                  }
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // Vertical button (down arrow) - centered below the card
  return (
    <div className="flex justify-center w-full px-4 md:px-[24px] mt-[8px] mr-[0px] mb-[0px] ml-[0px]">
      <button
        onClick={onToggle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`content-stretch size-[40px] flex-col flex isolate items-center justify-center overflow-clip shrink-0 transition-all duration-200 cursor-pointer ${
          isExpanded 
            ? 'bg-transparent hover:bg-[#EBEBEB]' 
            : 'bg-[#7a23d9] hover:bg-[#6a1fc9]'
        }`}
      >
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip size-full">
            <div className={`box-border content-stretch flex isolate items-center relative w-full ${
              isExpanded ? 'p-[8px]' : 'p-[12px]'
            }`}>
              <div className={`content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1] transition-all duration-200 ${
                isExpanded ? 'size-[24px]' : 'size-[16px]'
              }`}>
                {isExpanded 
                  ? (isHovered ? <ArrowUpGrey /> : <ArrowDownGrey />)
                  : <ArrowDown />
                }
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

interface CardRendererProps {
  cards: CardData[];
  startIndex: number;
  onHorizontalExpandChange?: (isExpanded: boolean) => void;
}

function CardRenderer({ cards, startIndex, onHorizontalExpandChange }: CardRendererProps) {
  const [showHorizontalCard, setShowHorizontalCard] = useState(false);
  const [showNextSection, setShowNextSection] = useState(false);
  const [isHoveredHorizontal, setIsHoveredHorizontal] = useState(false);
  const [isHoveredVertical, setIsHoveredVertical] = useState(false);
  const [nextSectionHorizontalExpanded, setNextSectionHorizontalExpanded] = useState(false);
  const expandRef = useRef<HTMLDivElement>(null);
  const horizontalButtonRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showNextSection && expandRef.current) {
      setTimeout(() => {
        expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [showNextSection]);

  useEffect(() => {
    if (showHorizontalCard && horizontalButtonRef.current) {
      setTimeout(() => {
        horizontalButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [showHorizontalCard]);

  useEffect(() => {
    if (onHorizontalExpandChange) {
      onHorizontalExpandChange(showHorizontalCard);
    }
  }, [showHorizontalCard, onHorizontalExpandChange]);

  if (startIndex >= cards.length) {
    return null;
  }

  const currentCard = cards[startIndex];
  const nextCard = startIndex + 1 < cards.length ? cards[startIndex + 1] : null;
  
  // Check if we should render horizontally (current AND next both horizontal)
  const shouldRenderHorizontal = currentCard.navigation === "horizontal" && nextCard?.navigation === "horizontal";

  if (shouldRenderHorizontal) {
    // Render horizontal pair
    const hasMoreAfterPair = startIndex + 2 < cards.length;
    const isLastPair = !hasMoreAfterPair;
    
    // Check if next section cards have dotted badges (e.g., "1.1", "1.2")
    const nextSectionCard1 = startIndex + 2 < cards.length ? cards[startIndex + 2] : null;
    const nextSectionCard2 = startIndex + 3 < cards.length ? cards[startIndex + 3] : null;
    const nextSectionHasDottedBadges = nextSectionCard1?.badge.includes('.') && nextSectionCard2?.badge.includes('.');
    
    // Scroll to last horizontal card when it appears
    useEffect(() => {
      if (isLastPair && showHorizontalCard && lastCardRef.current) {
        setTimeout(() => {
          lastCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }, [isLastPair, showHorizontalCard]);
    
    return (
      <>
        <div className={`flex flex-col lg:flex-row items-stretch gap-[8px] w-full ${isLastPair && showHorizontalCard ? 'pb-[64px]' : ''}`} ref={isLastPair && showHorizontalCard ? lastCardRef : null}>
          {/* First horizontal card */}
          <div className="flex-1 min-w-0">
            <Card
              title={currentCard.title}
              badge={currentCard.badge}
              description={currentCard.description}
            />
          </div>
          
          {/* Right arrow button */}
          <ExpandButton
            isExpanded={showHorizontalCard}
            isHovered={isHoveredHorizontal}
            onToggle={() => {
              setShowHorizontalCard(!showHorizontalCard);
              setIsHoveredHorizontal(false);
            }}
            onMouseEnter={() => setIsHoveredHorizontal(true)}
            onMouseLeave={() => setIsHoveredHorizontal(false)}
            direction="horizontal"
          />
          
          {/* Second horizontal card (revealed) */}
          {showHorizontalCard && (
            <div className="flex-1 min-w-0">
              <Card
                title={nextCard!.title}
                badge={nextCard!.badge}
                description={nextCard!.description}
              />
            </div>
          )}
        </div>
        
        {/* Down arrow button (after horizontal pair) - only visible after both horizontal cards are shown */}
        {showHorizontalCard && hasMoreAfterPair && (
          <>
            <div ref={horizontalButtonRef}>
              {/* Grey button (expanded): 2 containers, button position depends on next section badges */}
              {/* If next section has dotted badges, button in left container; otherwise right container */}
              {/* Violet button (not expanded): 1 container */}
              {showNextSection ? (
                <div className="flex flex-col lg:flex-row items-stretch gap-[8px] w-full">
                  {nextSectionHasDottedBadges ? (
                    <>
                      {/* Container 1: Grey arrow button (aligns with first horizontal card when next has dots) */}
                      <div className="flex-1 min-w-0 flex justify-center">
                        <ExpandButton
                          isExpanded={showNextSection}
                          isHovered={isHoveredVertical}
                          onToggle={() => {
                            setShowNextSection(!showNextSection);
                            setIsHoveredVertical(false);
                          }}
                          onMouseEnter={() => setIsHoveredVertical(true)}
                          onMouseLeave={() => setIsHoveredVertical(false)}
                          direction="vertical"
                        />
                      </div>
                      {/* Container 2: Empty spacer (aligns with second horizontal card) */}
                      <div className="flex-1 min-w-0 hidden lg:block" />
                    </>
                  ) : (
                    <>
                      {/* Container 1: Empty spacer (aligns with first horizontal card) */}
                      <div className="flex-1 min-w-0 hidden lg:block" />
                      {/* Container 2: Grey arrow button (aligns with second horizontal card) */}
                      <div className="flex-1 min-w-0 flex justify-center">
                        <ExpandButton
                          isExpanded={showNextSection}
                          isHovered={isHoveredVertical}
                          onToggle={() => {
                            setShowNextSection(!showNextSection);
                            setIsHoveredVertical(false);
                          }}
                          onMouseEnter={() => setIsHoveredVertical(true)}
                          onMouseLeave={() => setIsHoveredVertical(false)}
                          direction="vertical"
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <ExpandButton
                  isExpanded={showNextSection}
                  isHovered={isHoveredVertical}
                  onToggle={() => {
                    setShowNextSection(!showNextSection);
                    setIsHoveredVertical(false);
                  }}
                  onMouseEnter={() => setIsHoveredVertical(true)}
                  onMouseLeave={() => setIsHoveredVertical(false)}
                  direction="vertical"
                />
              )}
            </div>
            
            {showNextSection && (
              <div className="mt-[8px] w-full" ref={expandRef}>
                <CardRenderer 
                  cards={cards} 
                  startIndex={startIndex + 2}
                  onHorizontalExpandChange={(isExpanded) => {
                    // This is for potential future nested horizontal sections
                    // Currently not used but keeps the prop consistent
                  }}
                />
              </div>
            )}
          </>
        )}
      </>
    );
  }

  // Render single vertical card
  const hasNext = startIndex + 1 < cards.length;
  const isLastCard = !hasNext;
  
  // Check if next section is horizontal (2 cards)
  const cardAfterNext = startIndex + 2 < cards.length ? cards[startIndex + 2] : null;
  const nextSectionIsHorizontal = nextCard?.navigation === "horizontal" && cardAfterNext?.navigation === "horizontal";
  
  // Scroll to last card when it appears
  useEffect(() => {
    if (isLastCard && lastCardRef.current) {
      setTimeout(() => {
        lastCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [isLastCard]);
  
  return (
    <>
      <div className={`w-full ${isLastCard ? 'pb-[64px]' : ''}`} ref={isLastCard ? lastCardRef : null}>
        <Card
          title={currentCard.title}
          badge={currentCard.badge}
          description={currentCard.description}
        />
      </div>
      
      {hasNext && (
        <>
          {/* Grey button before horizontal cards: 1 container if only 1 card visible, 2 containers if both visible */}
          {showNextSection && nextSectionIsHorizontal && nextSectionHorizontalExpanded ? (
            <div className="flex flex-col lg:flex-row items-stretch gap-[8px] w-full">
              {/* Container 1: Grey arrow button (aligns with first horizontal card below) */}
              <div className="flex-1 min-w-0 flex justify-center">
                <ExpandButton
                  isExpanded={showNextSection}
                  isHovered={isHoveredVertical}
                  onToggle={() => setShowNextSection(!showNextSection)}
                  onMouseEnter={() => setIsHoveredVertical(true)}
                  onMouseLeave={() => setIsHoveredVertical(false)}
                  direction="vertical"
                />
              </div>
              
              {/* Container 2: Empty spacer (aligns with second horizontal card below) */}
              <div className="flex-1 min-w-0 hidden lg:block" />
            </div>
          ) : (
            <ExpandButton
              isExpanded={showNextSection}
              isHovered={isHoveredVertical}
              onToggle={() => setShowNextSection(!showNextSection)}
              onMouseEnter={() => setIsHoveredVertical(true)}
              onMouseLeave={() => setIsHoveredVertical(false)}
              direction="vertical"
            />
          )}
          
          {showNextSection && (
            <div className="mt-[8px] w-full" ref={expandRef}>
              <CardRenderer 
                cards={cards} 
                startIndex={startIndex + 1}
                onHorizontalExpandChange={(isExpanded) => setNextSectionHorizontalExpanded(isExpanded)}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

interface RequestCardProps {
  jsonUrl: string;
}

export function RequestCard({ jsonUrl }: RequestCardProps) {
  const [cardsData, setCardsData] = useState<CardsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(jsonUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch cards: ${response.statusText}`);
        }
        
        const data = await response.json();
        setCardsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load cards');
        console.error('Error fetching cards:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [jsonUrl]);

  if (loading) {
    return (
      <div className="pb-[64px] flex items-center justify-center py-12">
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
          Loading cards...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-[64px] flex items-center justify-center py-12">
        <div className="text-red-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!cardsData || !cardsData.cards || cardsData.cards.length === 0) {
    return (
      <div className="pb-[64px] flex items-center justify-center py-12">
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
          No cards data available
        </div>
      </div>
    );
  }

  return (
    <div>
      <CardRenderer cards={cardsData.cards} startIndex={0} />
    </div>
  );
}
