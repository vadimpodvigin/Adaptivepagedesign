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
      <div
        aria-hidden="true"
        className="absolute border border-[#7a23d9] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a23d9] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          {number}
        </p>
      </div>
    </div>
  );
}

function ArrowDownGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--down"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="Arrow--down">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="24"
              width="24"
            />
            <path
              d={svgPathsGrey.p2324eb80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUpGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--up"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="Arrow--up">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="16"
              width="16"
            />
            <path
              d={svgPathsUpGrey.p14ab8500}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
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

function NotificationBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#edf5ff] relative shrink-0 w-full rounded-[4px]">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[14px] items-start p-[8px] relative w-full">
          <div className={`basis-0 content-stretch flex flex-col ${description ? 'gap-[4px] items-start' : 'items-start justify-center'} grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-neutral-600`}>
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] relative shrink-0 w-full">
              {title}
            </p>
            {description && (
              <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 w-full">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  badge,
  description,
  nestedcard,
  className = "",
}: CardProps) {
  const hasNestedCards = nestedcard && Array.isArray(nestedcard) && nestedcard.length > 0;
  const shouldShowDivider = description || hasNestedCards;

  return (
    <div
      className={`bg-white box-border content-stretch flex flex-col gap-[16px] items-stretch p-4 md:p-[24px] rounded-[8px] transition-shadow hover:shadow-md h-full ${className}`}
    >
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[20px] md:text-[24px]">
          <p className="leading-[normal]">{title}</p>
        </div>
        <NumberBadge number={badge} />
      </div>

      {shouldShowDivider && (
        <div className="bg-[#ededed] shrink-0 h-px w-full" />
      )}

      {description && (
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] text-neutral-600 w-full">
          {description}
        </p>
      )}

      {hasNestedCards && (
        <div className="flex flex-col gap-[8px]">
          {nestedcard.map((card, index) => (
            <NotificationBlock
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
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

function ArrowButton({
  direction,
  isExpanded,
  isHovered,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: ArrowButtonProps) {
  // Debug logging
  useEffect(() => {
    if (isExpanded && direction === "right") {
      console.log(`ArrowButton direction=${direction}, isExpanded=${isExpanded}, isHovered=${isHovered}`);
    }
  }, [direction, isExpanded, isHovered]);

  // Compute icon directly without memoization
  let arrowIcon: JSX.Element;
  
  if (direction === "right") {
    if (isExpanded) {
      if (isHovered) {
        arrowIcon = <ArrowLeftGrey />; // Hover shows left (will collapse)
        console.log(`Rendering: isHovered=${isHovered}, rendering ArrowLeftGrey`);
      } else {
        arrowIcon = <ArrowRightGrey />; // Default shows right (expanded state)
        console.log(`Rendering: isHovered=${isHovered}, rendering ArrowRightGrey`);
      }
    } else {
      arrowIcon = <ArrowRightWhite />;
    }
  } else if (direction === "left") {
    if (isExpanded) {
      arrowIcon = isHovered ? <ArrowRightGrey /> : <ArrowLeftGrey />;
    } else {
      arrowIcon = <ArrowLeftWhite />;
    }
  } else if (direction === "down") {
    if (isExpanded) {
      arrowIcon = isHovered ? <ArrowUpGrey /> : <ArrowDownGrey />;
    } else {
      arrowIcon = <ArrowDown />;
    }
  } else {
    // up
    if (isExpanded) {
      arrowIcon = isHovered ? <ArrowDownGrey /> : <ArrowUpGrey />;
    } else {
      arrowIcon = <ArrowUpWhite />;
    }
  }

  const isVertical = direction === "up" || direction === "down";

  return (
    <button
      onClick={onToggle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`content-stretch size-[40px] flex-col flex isolate items-center justify-center overflow-clip shrink-0 transition-all duration-200 cursor-pointer ${
        isExpanded
          ? "bg-transparent hover:bg-[#EBEBEB]"
          : "bg-[#7a23d9] hover:bg-[#6a1fc9]"
      }`}
    >
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip size-full">
          <div
            className={`box-border content-stretch flex isolate items-center justify-center relative w-full ${
              isExpanded ? "p-[8px]" : "p-[12px]"
            }`}
          >
            <div
              className={`content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1] transition-all duration-200 ${
                isVertical && !isExpanded
                  ? "size-[16px]"
                  : "size-[24px]"
              }`}
            >
              {arrowIcon}
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
  scrollToCard?: (cardId: string) => void;
  cardElementsRef?: React.RefObject<
    Map<string, HTMLDivElement>
  >;
  onCollapseToCard?: (targetCardId: string) => void;
}

function CardWithArrows({
  card,
  cardsById,
  visibleCards,
  onToggleCard,
  hoveredArrows,
  onHoverArrow,
  isLastCard,
  scrollToCard,
  cardElementsRef,
  onCollapseToCard,
}: CardWithArrowsProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const downArrowRefs = useRef<Map<string, HTMLDivElement>>(
    new Map(),
  );
  const horizontalCardRefs = useRef<Map<string, HTMLDivElement>>(
    new Map(),
  );

  // Register this card element in the ref map
  useEffect(() => {
    if (cardRef.current && cardElementsRef?.current) {
      cardElementsRef.current.set(card.id, cardRef.current);
    }
    return () => {
      if (cardElementsRef?.current) {
        cardElementsRef.current.delete(card.id);
      }
    };
  }, [card.id, cardElementsRef]);

  // Register horizontal card refs
  useEffect(() => {
    if (cardElementsRef?.current) {
      horizontalCardRefs.current.forEach((element, cardId) => {
        cardElementsRef.current.set(cardId, element);
      });
    }
    return () => {
      if (cardElementsRef?.current) {
        horizontalCardRefs.current.forEach((_, cardId) => {
          cardElementsRef.current.delete(cardId);
        });
      }
    };
  }, [cardElementsRef, visibleCards]);

  // Group arrows by direction
  const downArrows = card.arrows.filter(
    (a) => a.direction === "down",
  );
  const leftArrows = card.arrows.filter(
    (a) => a.direction === "left",
  );
  const rightArrows = card.arrows.filter(
    (a) => a.direction === "right",
  );

  // Collect all cards in the current horizontal row (including main card and visible left/right cards)
  const allCardsInRow: CardData[] = [card];

  leftArrows.forEach((arrow) => {
    const targetCard = cardsById.get(arrow.targetCardId);
    if (visibleCards.has(arrow.targetCardId) && targetCard) {
      allCardsInRow.push(targetCard);
    }
  });

  // Recursively collect all right arrow cards (including chained)
  const collectRightCards = (sourceCard: CardData) => {
    const cardRightArrows = sourceCard.arrows.filter(
      (a) => a.direction === "right",
    );
    cardRightArrows.forEach((arrow) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      if (visibleCards.has(arrow.targetCardId) && targetCard) {
        allCardsInRow.push(targetCard);
        collectRightCards(targetCard); // Recurse for chained right cards
      }
    });
  };
  
  collectRightCards(card);

  // Collect ALL down arrows from all cards in the horizontal row
  const allDownArrows: Array<{
    arrow: {
      direction: "down" | "left" | "right";
      targetCardId: string;
    };
    sourceCardId: string;
    arrowIndex: number;
  }> = [];

  allCardsInRow.forEach((cardInRow) => {
    const cardDownArrows = cardInRow.arrows.filter(
      (a) => a.direction === "down",
    );
    cardDownArrows.forEach((arrow, idx) => {
      allDownArrows.push({
        arrow,
        sourceCardId: cardInRow.id,
        arrowIndex: idx,
      });
    });
  });

  // Count elements in the current horizontal row
  let currentRowCards = allCardsInRow.length;
  let currentRowArrowButtons = 0;
  
  // Count left arrow buttons
  leftArrows.forEach((arrow) => {
    if (visibleCards.has(arrow.targetCardId)) {
      currentRowArrowButtons++;
    }
  });
  
  // Count right arrow buttons (including chained)
  const countCurrentRightArrowButtons = (sourceCard: CardData): number => {
    let count = 0;
    const cardRightArrows = sourceCard.arrows.filter(
      (a) => a.direction === "right",
    );
    cardRightArrows.forEach((arrow) => {
      if (visibleCards.has(arrow.targetCardId)) {
        count++; // Arrow button
        const targetCard = cardsById.get(arrow.targetCardId);
        if (targetCard) {
          count += countCurrentRightArrowButtons(targetCard);
        }
      }
    });
    return count;
  };
  
  currentRowArrowButtons += countCurrentRightArrowButtons(card);
  
  const currentRowTotalElements = currentRowCards + currentRowArrowButtons;

  // Check if main card has right arrows pointing to cards with nestedcard content
  const hasNestedRightArrow = rightArrows.some((arrow) => {
    const targetCard = cardsById.get(arrow.targetCardId);
    return (
      targetCard?.nestedcard && targetCard.nestedcard.length > 0
    );
  });

  // Check if main card has any visible right arrow cards
  const hasVisibleRightCard = rightArrows.some((arrow) => {
    return visibleCards.has(arrow.targetCardId);
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
          <div
            key={`left-card-${idx}`}
            className="flex-1 min-w-0"
            ref={(el) => {
              if (el) {
                horizontalCardRefs.current.set(targetCard.id, el);
              } else {
                horizontalCardRefs.current.delete(targetCard.id);
              }
            }}
          >
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              nestedcard={targetCard.nestedcard}
            />
          </div>,
        );
      }

      elements.push(
        <div
          key={`left-arrow-${idx}`}
          className="flex items-center justify-center w-[40px]"
        >
          <ArrowButton
            direction="left"
            isExpanded={isVisible}
            isHovered={isHovered}
            onToggle={() => onToggleCard(arrow.targetCardId)}
            onMouseEnter={() => onHoverArrow(hoverKey, true)}
            onMouseLeave={() => onHoverArrow(hoverKey, false)}
          />
        </div>,
      );
    });

    // Main card
    elements.push(
      <div
        key="main-card"
        className={`flex-1 min-w-0 ${hasVisibleRightCard ? "" : "w-full"}`}
      >
        <Card
          title={card.title}
          badge={card.badge}
          description={card.description}
          nestedcard={card.nestedcard}
        />
      </div>,
    );

    // Right arrows - recursively collect all chained right cards
    const processRightArrows = (sourceCard: CardData, sourceCardId: string, startIdx: number = 0) => {
      const cardRightArrows = sourceCard.arrows.filter(
        (a) => a.direction === "right",
      );
      
      cardRightArrows.forEach((arrow, idx) => {
        const targetCard = cardsById.get(arrow.targetCardId);
        const isVisible = visibleCards.has(arrow.targetCardId);
        const hoverKey = `${sourceCardId}-right-${startIdx + idx}`;
        const isHovered = hoveredArrows.get(hoverKey) || false;

        // Render the arrow button - always centered
        elements.push(
          <div
            key={`${sourceCardId}-right-arrow-${startIdx + idx}`}
            className="flex items-center justify-center w-[40px]"
          >
            <ArrowButton
              direction="right"
              isExpanded={isVisible}
              isHovered={isHovered}
              onToggle={() => onToggleCard(arrow.targetCardId)}
              onMouseEnter={() => onHoverArrow(hoverKey, true)}
              onMouseLeave={() => onHoverArrow(hoverKey, false)}
            />
          </div>,
        );

        // If visible, render the card and process its right arrows recursively
        if (isVisible && targetCard) {
          elements.push(
            <div
              key={`${sourceCardId}-right-card-${startIdx + idx}`}
              className="flex-1 min-w-0"
              ref={(el) => {
                if (el) {
                  horizontalCardRefs.current.set(targetCard.id, el);
                } else {
                  horizontalCardRefs.current.delete(targetCard.id);
                }
              }}
            >
              <Card
                title={targetCard.title}
                badge={targetCard.badge}
                description={targetCard.description}
                nestedcard={targetCard.nestedcard}
              />
            </div>,
          );
          
          // Recursively process this card's right arrows
          processRightArrows(targetCard, targetCard.id, 0);
        }
      });
    };
    
    // Start processing from the main card's right arrows
    processRightArrows(card, card.id, 0);

    return elements;
  };

  return (
    <div
      className={`w-full ${isLastCard ? "pb-[64px]" : ""}`}
      ref={cardRef}
    >
      {/* Horizontal row: left arrows and main card and right arrows */}
      <div className="flex flex-col lg:flex-row items-stretch gap-[8px] w-full">
        {renderHorizontalRow()}
      </div>

      {/* All down arrows from all cards in the horizontal row - rendered at full width */}
      {allDownArrows.map((item, index) => {
        const targetCard = cardsById.get(
          item.arrow.targetCardId,
        );
        const isVisible = visibleCards.has(
          item.arrow.targetCardId,
        );
        const hoverKey = `${item.sourceCardId}-down-${item.arrowIndex}`;
        const isHovered = hoveredArrows.get(hoverKey) || false;

        // Count how many cards and arrow buttons will be in the horizontal row below
        let cardsInRowBelow = 1; // The target card itself
        let arrowButtonsInRowBelow = 0;
        
        if (targetCard && isVisible) {
          // Count visible left arrow cards and their arrow buttons
          const leftArrowsBelow = targetCard.arrows.filter(
            (a) => a.direction === "left",
          );
          leftArrowsBelow.forEach((arrow) => {
            if (visibleCards.has(arrow.targetCardId)) {
              cardsInRowBelow++;
              arrowButtonsInRowBelow++; // Arrow button before the left card
            }
          });

          // Count visible right arrow cards and buttons (including chained right arrows)
          const countVisibleRightElements = (card: CardData): { cards: number; arrows: number } => {
            let cards = 0;
            let arrows = 0;
            const rightArrows = card.arrows.filter(
              (a) => a.direction === "right",
            );
            rightArrows.forEach((arrow) => {
              if (visibleCards.has(arrow.targetCardId)) {
                arrows++; // Arrow button
                cards++; // The card itself
                const rightCard = cardsById.get(arrow.targetCardId);
                if (rightCard) {
                  const nested = countVisibleRightElements(rightCard);
                  cards += nested.cards;
                  arrows += nested.arrows;
                }
              }
            });
            return { cards, arrows };
          };
          
          const rightElements = countVisibleRightElements(targetCard);
          cardsInRowBelow += rightElements.cards;
          arrowButtonsInRowBelow += rightElements.arrows;
        }

        const totalElements = cardsInRowBelow + arrowButtonsInRowBelow;
        
        // Use the maximum of current row and row below to determine container count
        const maxElements = Math.max(currentRowTotalElements, totalElements);

        return (
          <div
            key={`down-${item.sourceCardId}-${index}`}
            className="flex flex-col gap-[8px] w-full mt-[8px]"
          >
            {/* Arrow container - violet buttons always centered, grey buttons use split layout */}
            {isVisible && (cardsInRowBelow >= 2 || currentRowTotalElements >= 2) ? (
              // Grey button with split container layout
              <div className="flex flex-col lg:flex-row items-stretch gap-[8px] w-full">
                {/* Render containers matching the structure below: cards + arrow buttons */}
                {Array.from({ length: maxElements }).map((_, idx) => {
                  // First container gets the arrow button
                  if (idx === 0) {
                    return (
                      <div key={`container-${idx}`} className="flex-1 min-w-0 flex justify-center px-4 md:px-[24px]">
                        <ArrowButton
                          direction="down"
                          isExpanded={isVisible}
                          isHovered={isHovered}
                          onToggle={() =>
                            onToggleCard(item.arrow.targetCardId)
                          }
                          onMouseEnter={() =>
                            onHoverArrow(hoverKey, true)
                          }
                          onMouseLeave={() =>
                            onHoverArrow(hoverKey, false)
                          }
                        />
                      </div>
                    );
                  }
                  
                  // Pattern below: Card, Arrow, Card, Arrow, Card...\n                  // So: even indices = cards (flex-1), odd indices = arrows (40px)
                  const isArrowPosition = idx % 2 === 1;
                  
                  if (isArrowPosition) {
                    // Spacer for arrow button - fixed width to match arrow button
                    return (
                      <div key={`container-${idx}`} className="flex items-center">
                        <div className="w-[40px]" /> {/* Match arrow button width */}
                      </div>
                    );
                  } else {
                    // Spacer for card - flex-1 to match card width
                    // Check if card 3.2 is visible - show collapse button in the middle container
                    // of the LAST down arrow row (the one displaying card 3.1 which has the arrow to card31)
                    const isCard32Visible = visibleCards.has("card31");
                    const middleIndex = Math.floor(maxElements / 2);
                    const isMidContainer = idx === middleIndex;
                    
                    // Check if this is the row displaying card 3.1 (card3)
                    // Card 3.1 is the one that has the down arrow to card31
                    const isCard31Row = targetCard?.id === "card3" && isVisible;
                    
                    const collapseHoverKey = "collapse-to-2.1";
                    const isCollapseHovered = hoveredArrows.get(collapseHoverKey) || false;
                    
                    return (
                      <div key={`container-${idx}`} className="flex-1 min-w-0 px-4 md:px-[24px] flex items-center">
                        {isCard32Visible && isCard31Row && isMidContainer && onCollapseToCard && (
                          <div className="pl-[16px]">
                            <ArrowButton
                              direction="down"
                              isExpanded={true}
                              isHovered={isCollapseHovered}
                              onToggle={() => onCollapseToCard("card31")}
                              onMouseEnter={() => onHoverArrow(collapseHoverKey, true)}
                              onMouseLeave={() => onHoverArrow(collapseHoverKey, false)}
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              // Violet button or single grey button - always centered in full width
              <div className="flex justify-center w-full px-4 md:px-[24px]">
                <ArrowButton
                  direction="down"
                  isExpanded={isVisible}
                  isHovered={isHovered}
                  onToggle={() =>
                    onToggleCard(item.arrow.targetCardId)
                  }
                  onMouseEnter={() =>
                    onHoverArrow(hoverKey, true)
                  }
                  onMouseLeave={() =>
                    onHoverArrow(hoverKey, false)
                  }
                />
              </div>
            )}
            {isVisible && targetCard && (
              <CardWithArrows
                card={targetCard}
                cardsById={cardsById}
                visibleCards={visibleCards}
                onToggleCard={onToggleCard}
                hoveredArrows={hoveredArrows}
                onHoverArrow={onHoverArrow}
                isLastCard={false}
                scrollToCard={scrollToCard}
                cardElementsRef={cardElementsRef}
                onCollapseToCard={onCollapseToCard}
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
  const [cardsData, setCardsData] = useState<CardsData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(
    new Set(),
  );
  const [hoveredArrows, setHoveredArrows] = useState<
    Map<string, boolean>
  >(new Map());
  const cardElementsRef = useRef<Map<string, HTMLDivElement>>(
    new Map(),
  );
  const [pendingScrollCardId, setPendingScrollCardId] =
    useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(jsonUrl, {
          cache: "reload",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch cards: ${response.statusText}`,
          );
        }

        const data = await response.json();
        setCardsData(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load cards",
        );
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [jsonUrl]);

  // Auto-scroll effect when a card becomes available
  useEffect(() => {
    if (pendingScrollCardId) {
      const element = cardElementsRef.current.get(
        pendingScrollCardId,
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          setPendingScrollCardId(null);
        }, 150);
      }
    }
  }, [pendingScrollCardId, cardElementsRef.current.size]);

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

  if (
    !cardsData ||
    !cardsData.cards ||
    cardsData.cards.length === 0
  ) {
    return (
      <div className="pb-[64px] flex items-center justify-center py-12">
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
          No cards data available
        </div>
      </div>
    );
  }

  const cardsById = new Map<string, CardData>();
  cardsData.cards.forEach((card) =>
    cardsById.set(card.id, card),
  );

  const scrollToCard = (cardId: string) => {
    const element = cardElementsRef.current.get(cardId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  const onToggleCard = (cardId: string) => {
    // Clear ALL hover states when toggling to prevent stuck hover states
    setHoveredArrows(new Map());
    
    setVisibleCards((prev) => {
      const newSet = new Set(prev);
      const isExpanding = !newSet.has(cardId);

      if (newSet.has(cardId)) {
        // Collapsing - remove this card and ALL its descendants
        newSet.delete(cardId);
        
        // Recursively find and remove all descendant cards
        const removeDescendants = (parentId: string) => {
          const parentCard = cardsById.get(parentId);
          if (!parentCard) return;
          
          // Check all arrows from this parent card
          parentCard.arrows.forEach((arrow) => {
            const childId = arrow.targetCardId;
            if (newSet.has(childId)) {
              newSet.delete(childId);
              // Recursively remove descendants of this child
              removeDescendants(childId);
            }
          });
        };
        
        removeDescendants(cardId);
      } else {
        // Expanding - only add this card
        newSet.add(cardId);
      }

      // Scroll to the newly expanded card
      if (isExpanding) {
        setPendingScrollCardId(cardId);
      }

      return newSet;
    });
  };

  const onHoverArrow = (key: string, isHovered: boolean) => {
    console.log(`onHoverArrow called: key=${key}, isHovered=${isHovered}`);
    setHoveredArrows((prev) => {
      const newMap = new Map(prev);
      newMap.set(key, isHovered);
      console.log(`Hover state set: ${key} = ${isHovered}`);
      return newMap;
    });
  };

  const onCollapseToCard = (targetCardId: string) => {
    setVisibleCards((prev) => {
      const newSet = new Set(prev);
      
      // Collapse the target card and all its descendants
      const collapseCardAndDescendants = (cardId: string) => {
        newSet.delete(cardId);
        const card = cardsById.get(cardId);
        if (!card) return;
        
        card.arrows.forEach((arrow) => {
          const childId = arrow.targetCardId;
          if (newSet.has(childId)) {
            collapseCardAndDescendants(childId);
          }
        });
      };
      
      collapseCardAndDescendants(targetCardId);
      
      return newSet;
    });
    
    // Clear hover states
    setHoveredArrows(new Map());
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
        scrollToCard={scrollToCard}
        cardElementsRef={cardElementsRef}
        onCollapseToCard={onCollapseToCard}
      />
    </div>
  );
}