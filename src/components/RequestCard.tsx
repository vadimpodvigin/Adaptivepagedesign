import svgPaths from "../imports/svg-xpebenqrq1";
import svgPathsGrey from "../imports/svg-cne0z3qkwz";
import svgPathsUpGrey from "../imports/svg-9j3qgonek1";
import ArrowDown from "../imports/ArrowDown";
import ArrowRight from "../imports/ArrowRight";
import ArrowLeft from "../imports/ArrowLeft";
import ArrowUp from "../imports/ArrowUp";
import ArrowRightGrey159 from "../imports/ArrowRight-159-390";
import ArrowLeftGrey159 from "../imports/ArrowLeft-159-371";
import { useState, useRef, useEffect } from "react";

// TypeScript type for card data structure
export interface CardData {
  id: string;
  title: string;
  badge: string;
  description: string;
  nestedcard?: Array<{
    title: string;
    description: string;
  }>;
  arrows: Array<{
    direction: "down" | "left" | "right";
    targetCardId: string;
  }>;
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

function ArrowUpWhite() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowUp />
    </div>
  );
}

interface CardProps {
  title: string;
  badge: string;
  description: string;
  nestedcard?: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}

function NotificationBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#edf5ff] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[14px] items-start p-[8px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-neutral-600">
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] relative shrink-0 w-full">{title}</p>
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 w-full">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, badge, description, nestedcard, className = "" }: CardProps) {
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
      
      {nestedcard && Array.isArray(nestedcard) && nestedcard.length > 0 && (
        <>
          {nestedcard.map((card, index) => (
            <NotificationBlock 
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </>
      )}
    </div>
  );
}

interface ArrowButtonProps {
  direction: "up" | "down" | "left" | "right";
  isExpanded: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ArrowButton({ direction, isExpanded, isHovered, onToggle, onMouseEnter, onMouseLeave }: ArrowButtonProps) {
  const getArrowIcon = () => {
    if (direction === "right") {
      return isExpanded 
        ? <ArrowRightGrey />
        : <ArrowRightWhite />;
    } else if (direction === "left") {
      return isExpanded 
        ? <ArrowLeftGrey />
        : <ArrowLeftWhite />;
    } else if (direction === "down") {
      return isExpanded 
        ? (isHovered ? <ArrowUpGrey /> : <ArrowDownGrey />)
        : <ArrowDown />;
    } else { // up
      return isExpanded 
        ? (isHovered ? <ArrowDownGrey /> : <ArrowUpGrey />)
        : <ArrowUpWhite />;
    }
  };

  const isVertical = direction === "up" || direction === "down";

  return (
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
              isVertical && !isExpanded ? 'size-[16px]' : 'size-[24px]'
            }`}>
              {getArrowIcon()}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

interface CardWithArrowsProps {
  card: CardData;
  cardsById: Map<string, CardData>;
  visibleCards: Set<string>;
  onToggleCard: (cardId: string) => void;
  hoveredArrows: Map<string, boolean>;
  onHoverArrow: (key: string, isHovered: boolean) => void;
  isLastCard: boolean;
}

function CardWithArrows({ 
  card, 
  cardsById, 
  visibleCards, 
  onToggleCard, 
  hoveredArrows,
  onHoverArrow,
  isLastCard 
}: CardWithArrowsProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Group arrows by direction
  const downArrows = card.arrows.filter(a => a.direction === "down");
  const leftArrows = card.arrows.filter(a => a.direction === "left");
  const rightArrows = card.arrows.filter(a => a.direction === "right");

  // Collect all cards in the current horizontal row (including main card and visible left/right cards)
  const allCardsInRow: CardData[] = [card];
  
  leftArrows.forEach(arrow => {
    const targetCard = cardsById.get(arrow.targetCardId);
    if (visibleCards.has(arrow.targetCardId) && targetCard) {
      allCardsInRow.push(targetCard);
    }
  });
  
  rightArrows.forEach(arrow => {
    const targetCard = cardsById.get(arrow.targetCardId);
    if (visibleCards.has(arrow.targetCardId) && targetCard) {
      allCardsInRow.push(targetCard);
    }
  });

  // Collect ALL down arrows from all cards in the horizontal row
  const allDownArrows: Array<{
    arrow: { direction: "down" | "left" | "right"; targetCardId: string };
    sourceCardId: string;
    arrowIndex: number;
  }> = [];

  allCardsInRow.forEach(cardInRow => {
    const cardDownArrows = cardInRow.arrows.filter(a => a.direction === "down");
    cardDownArrows.forEach((arrow, idx) => {
      allDownArrows.push({
        arrow,
        sourceCardId: cardInRow.id,
        arrowIndex: idx
      });
    });
  });

  // Build the horizontal row (left arrows + card + right arrows)
  const renderHorizontalRow = () => {
    const elements: JSX.Element[] = [];

    // Left arrows and their cards
    leftArrows.forEach((arrow, idx) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      const isVisible = visibleCards.has(arrow.targetCardId);
      const hoverKey = `${card.id}-left-${idx}`;
      const isHovered = hoveredArrows.get(hoverKey) || false;

      if (isVisible && targetCard) {
        elements.push(
          <div key={`left-card-${idx}`} className="flex-1 min-w-0">
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              nestedcard={targetCard.nestedcard}
            />
          </div>
        );
      }

      elements.push(
        <div key={`left-arrow-${idx}`} className="flex items-center">
          <ArrowButton
            direction="left"
            isExpanded={isVisible}
            isHovered={isHovered}
            onToggle={() => onToggleCard(arrow.targetCardId)}
            onMouseEnter={() => onHoverArrow(hoverKey, true)}
            onMouseLeave={() => onHoverArrow(hoverKey, false)}
          />
        </div>
      );
    });

    // Main card
    elements.push(
      <div key="main-card" className="flex-1 min-w-0">
        <Card
          title={card.title}
          badge={card.badge}
          description={card.description}
          nestedcard={card.nestedcard}
        />
      </div>
    );

    // Right arrows and their cards
    rightArrows.forEach((arrow, idx) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      const isVisible = visibleCards.has(arrow.targetCardId);
      const hoverKey = `${card.id}-right-${idx}`;
      const isHovered = hoveredArrows.get(hoverKey) || false;

      elements.push(
        <div key={`right-arrow-${idx}`} className="flex items-center">
          <ArrowButton
            direction="right"
            isExpanded={isVisible}
            isHovered={isHovered}
            onToggle={() => onToggleCard(arrow.targetCardId)}
            onMouseEnter={() => onHoverArrow(hoverKey, true)}
            onMouseLeave={() => onHoverArrow(hoverKey, false)}
          />
        </div>
      );

      if (isVisible && targetCard) {
        elements.push(
          <div key={`right-card-${idx}`} className="flex-1 min-w-0">
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              nestedcard={targetCard.nestedcard}
            />
          </div>
        );
      }
    });

    return elements;
  };

  return (
    <div className={`w-full ${isLastCard ? 'pb-[64px]' : ''}`} ref={cardRef}>
      {/* Horizontal row: cards with arrows between them */}
      <div className="flex flex-col lg:flex-row items-start gap-[8px] w-full">
        {renderHorizontalRow()}
      </div>

      {/* All down arrows from all cards in the horizontal row - rendered at full width */}
      {allDownArrows.map((item, index) => {
        const targetCard = cardsById.get(item.arrow.targetCardId);
        const isVisible = visibleCards.has(item.arrow.targetCardId);
        const hoverKey = `${item.sourceCardId}-down-${item.arrowIndex}`;
        const isHovered = hoveredArrows.get(hoverKey) || false;

        return (
          <div key={`down-${item.sourceCardId}-${index}`} className="flex flex-col gap-[8px] w-full mt-[8px]">
            <div className="flex justify-center w-full px-4 md:px-[24px]">
              <ArrowButton
                direction="down"
                isExpanded={isVisible}
                isHovered={isHovered}
                onToggle={() => onToggleCard(item.arrow.targetCardId)}
                onMouseEnter={() => onHoverArrow(hoverKey, true)}
                onMouseLeave={() => onHoverArrow(hoverKey, false)}
              />
            </div>
            {isVisible && targetCard && (
              <CardWithArrows 
                card={targetCard}
                cardsById={cardsById}
                visibleCards={visibleCards}
                onToggleCard={onToggleCard}
                hoveredArrows={hoveredArrows}
                onHoverArrow={onHoverArrow}
                isLastCard={false}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

interface RequestCardProps {
  jsonUrl: string;
}

export function RequestCard({ jsonUrl }: RequestCardProps) {
  const [cardsData, setCardsData] = useState<CardsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [hoveredArrows, setHoveredArrows] = useState<Map<string, boolean>>(new Map());

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(jsonUrl, {
          cache: 'reload'
        });
        
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

  const cardsById = new Map<string, CardData>();
  cardsData.cards.forEach(card => cardsById.set(card.id, card));

  const onToggleCard = (cardId: string) => {
    setVisibleCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const onHoverArrow = (key: string, isHovered: boolean) => {
    setHoveredArrows(prev => {
      const newMap = new Map(prev);
      newMap.set(key, isHovered);
      return newMap;
    });
  };

  return (
    <div>
      <CardWithArrows 
        card={cardsData.cards[0]}
        cardsById={cardsById}
        visibleCards={visibleCards}
        onToggleCard={onToggleCard}
        hoveredArrows={hoveredArrows}
        onHoverArrow={onHoverArrow}
        isLastCard={true}
      />
    </div>
  );
}