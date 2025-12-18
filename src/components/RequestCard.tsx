import svgPathsGrey from "../imports/svg-cne0z3qkwz";
import svgPathsUpGrey from "../imports/svg-9j3qgonek1";
import ArrowRightGrey159 from "../imports/ArrowRight-159-390";
import ArrowLeftGrey159 from "../imports/ArrowLeft-159-371";
import { useState, useEffect } from "react";
import yaml from "js-yaml";
import { CodeSnippet } from "./CodeSnippet";
import { Tabs, TabItem } from "./Tabs";

// TypeScript type for card data structure
export interface CardData {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon?: string; // Optional icon for side cards
  sideCardRef?: string; // Reference to shared side cards
  codeSnippet?: {
    code: string;
    caption?: string;
  };
  tabs?: TabItem[];
  nestedcards?: Array<{
    title: string;
    subtext?: string;
  }>;
  sections?: Array<{
    title: string;
    badge: string;
    description: string;
  }>;
  arrows: Array<{
    direction: "down" | "left" | "right" | "up";
    targetCardId: string;
  }>;
}

export interface WorkflowData {
  title: string;
  description: string;
  category: string; // "CoreFlow" | "CoreIgnite Setup" | custom string
  icon:
    | "piggy-bank"
    | "fragments"
    | "finance"
    | "money"
    | "book"
    | "application-mobile"
    | "user-profile";
}

export interface SharedSideCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon?: string;
}

export interface CardsData {
  workflow: WorkflowData;
  cards: CardData[];
  sharedSideCards?: Record<string, SharedSideCard[]>; // Named groups of shared side cards
}

function NumberBadge({ number, color = '#7a23d9' }: { number: string; color?: string }) {
  if (!number) return null;

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[24px] px-[4px] py-[2px]" style={{ backgroundColor: color }}>
      <div
        aria-hidden="true"
        className="absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
        style={{ borderColor: color }}
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre font-['IBM_Plex_Mono:Regular',sans-serif] text-[16px]">
          {number}
        </p>
      </div>
    </div>
  );
}

function SectionNumberBadge({ number, color = '#7a23d9' }: { number: string; color?: string }) {
  // Calculate lighter border and text colors based on the theme color
  const getLighterShade = (hexColor: string, opacity: number) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const borderColor = getLighterShade(color, 0.3);
  const textColor = color;

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[32px] px-[8px] h-[32px]">
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
        style={{ borderColor }}
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap" style={{ color: textColor }}>
        <p className="leading-[normal] whitespace-pre font-['IBM_Plex_Mono:Regular',sans-serif] text-[16px]">
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

function ArrowRightGrey() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowRightGrey159 />
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

function NotificationBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white relative shrink-0 w-full rounded-[8px] border border-[#ededed]">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <div
            className={`basis-0 content-stretch flex flex-col ${description ? "gap-[4px] items-start" : "items-start justify-center"} grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#525252]`}
          >
            <p className="font-['IBM_Plex_Sans:Medium',sans-serif] relative shrink-0 w-full text-[12px] md:text-[14px]">
              {title}
            </p>
            {description && (
              <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 w-full text-[12px] md:text-[14px]">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  badge,
  description,
  color = '#7a23d9',
}: {
  title: string;
  badge: string;
  description: string;
  color?: string;
}) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-stretch p-4 md:p-[16px] rounded-[8px] transition-shadow hover:shadow-md border border-[#ededed]">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
        <SectionNumberBadge number={badge} color={color} />
        <div className="flex-1 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] md:text-[18px]">
          <p className="leading-[normal]">{title}</p>
        </div>
      </div>

      {description && (
        <>
          <div className="bg-[#ededed] shrink-0 h-px w-full" />
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] md:text-[16px] text-neutral-600 w-full">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

interface CardProps {
  title: string;
  badge: string;
  description: string;
  codeSnippet?: {
    code: string;
    caption?: string;
  };
  tabs?: TabItem[];
  nestedcards?: Array<{
    title: string;
    subtext?: string;
  }>;
  sections?: Array<{
    title: string;
    badge: string;
    description: string;
  }>;
  className?: string;
  color?: string;
}

function Card({
  title,
  badge,
  description,
  codeSnippet,
  tabs,
  nestedcards,
  sections,
  className = "",
  color = '#7a23d9',
}: CardProps) {
  const hasNestedCards =
    nestedcards &&
    Array.isArray(nestedcards) &&
    nestedcards.length > 0;
  const hasSections =
    sections && Array.isArray(sections) && sections.length > 0;
  const hasCodeSnippet = codeSnippet && codeSnippet.code;
  const hasTabs = tabs && Array.isArray(tabs) && tabs.length > 0;
  const shouldShowDivider =
    description || hasNestedCards || hasSections || hasCodeSnippet || hasTabs;

  return (
    <div
      className={`bg-white box-border content-stretch flex flex-col gap-[16px] items-stretch p-[16px] rounded-[8px] transition-shadow hover:shadow-md h-full max-w-full ${className}`}
    >
      <div className="content-stretch flex flex-row gap-[8px] items-center relative shrink-0 w-full">
        <NumberBadge number={badge} color={color} />
        <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[20px] md:text-[24px]">
          <p className="leading-[normal] text-[18px] font-['IBM_Plex_Sans:Medium',sans-serif]">
            {title}
          </p>
        </div>
      </div>

      {shouldShowDivider && (
        <div className="bg-[#ededed] shrink-0 h-px w-full" />
      )}

      {description && (
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[16px] text-neutral-600 w-full">
          {description}
        </p>
      )}

      {hasCodeSnippet && (
        <CodeSnippet 
          code={codeSnippet.code} 
          caption={codeSnippet.caption}
        />
      )}

      {hasTabs && (
        <Tabs tabs={tabs} color={color} />
      )}

      {hasNestedCards && (
        <div className="flex flex-col gap-[8px]">
          {nestedcards.map((card, index) => (
            <NotificationBlock
              key={index}
              title={card.title}
              description={card.subtext || ""}
            />
          ))}
        </div>
      )}

      {hasSections && (
        <div className="flex flex-col gap-[16px]">
          {sections.map((section, index) => (
            <SectionCard
              key={index}
              title={section.title}
              badge={section.badge}
              description={section.description}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Static arrow component (non-interactive)
function StaticArrow({
  direction,
}: {
  direction: "down" | "left" | "right" | "up";
}) {
  let ArrowComponent;

  switch (direction) {
    case "down":
      ArrowComponent = ArrowDownGrey;
      break;
    case "up":
      ArrowComponent = ArrowUpGrey;
      break;
    case "left":
      ArrowComponent = ArrowLeftGrey;
      break;
    case "right":
      ArrowComponent = ArrowRightGrey;
      break;
  }

  const isVertical = direction === "up" || direction === "down";

  return (
    <div className="content-stretch size-[40px] flex-col flex isolate items-center justify-center overflow-clip shrink-0 bg-transparent">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip size-full">
          <div className="box-border content-stretch flex isolate items-center justify-center relative w-full p-[8px]">
            <div className="flex items-center justify-center shrink-0">
              <ArrowComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardWithArrowsProps {
  card: CardData;
  cardsById: Map<string, CardData>;
  isLastCard: boolean;
  color?: string;
}

function CardWithArrows({
  card,
  cardsById,
  isLastCard,
  color = '#7a23d9',
}: CardWithArrowsProps) {
  // Helper function to check if a badge is a "main" badge (whole number like 1, 2, 1.0, 2.0)
  const isMainBadge = (badge: string): boolean => {
    if (!badge) return false;
    const num = parseFloat(badge);
    return !isNaN(num) && num === Math.floor(num);
  };

  // Group arrows by direction
  const leftArrows = card.arrows.filter(
    (a) => a.direction === "left",
  );

  // Collect all cards in the current horizontal row
  const allCardsInRow: CardData[] = [card];

  leftArrows.forEach((arrow) => {
    const targetCard = cardsById.get(arrow.targetCardId);
    if (targetCard) {
      allCardsInRow.push(targetCard);
    }
  });

  // Recursively collect all right arrow cards
  const collectRightCards = (sourceCard: CardData) => {
    const cardRightArrows = sourceCard.arrows.filter(
      (a) => a.direction === "right",
    );
    cardRightArrows.forEach((arrow) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      if (targetCard) {
        allCardsInRow.push(targetCard);
        collectRightCards(targetCard);
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
  }> = [];

  allCardsInRow.forEach((cardInRow) => {
    const cardDownArrows = cardInRow.arrows.filter(
      (a) => a.direction === "down",
    );
    cardDownArrows.forEach((arrow) => {
      allDownArrows.push({
        arrow,
        sourceCardId: cardInRow.id,
      });
    });
  });

  // Count total cards in this row to determine if we need width constraints
  let totalCardsInRow = 1; // Start with main card
  totalCardsInRow += leftArrows.length; // Add left cards
  
  // Count right cards recursively
  const countRightCards = (sourceCard: CardData): number => {
    const cardRightArrows = sourceCard.arrows.filter((a) => a.direction === "right");
    let count = 0;
    cardRightArrows.forEach((arrow) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      if (targetCard) {
        count += 1;
        count += countRightCards(targetCard);
      }
    });
    return count;
  };
  totalCardsInRow += countRightCards(card);

  // Build the horizontal row
  const renderHorizontalRow = () => {
    const elements: JSX.Element[] = [];

    const hasMultipleCards = totalCardsInRow > 1;

    // Left arrows and their cards
    leftArrows.forEach((arrow, idx) => {
      const targetCard = cardsById.get(arrow.targetCardId);

      if (targetCard) {
        // Cards with main badges (1, 2, 1.0, 2.0) get 50% width only if there are multiple cards in the row
        // Sub-cards (2.1, 3.2, etc.) use normal adaptive width
        const cardWidthClass = (hasMultipleCards && isMainBadge(targetCard.badge)) 
          ? "lg:w-1/2 lg:flex-none flex-1 min-w-0" 
          : "flex-1 min-w-0";
        
        elements.push(
          <div
            key={`left-card-${idx}`}
            className={cardWidthClass}
          >
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              codeSnippet={targetCard.codeSnippet}
              tabs={targetCard.tabs}
              nestedcards={targetCard.nestedcards}
              sections={targetCard.sections}
              color={color}
            />
          </div>,
        );
      }

      elements.push(
        <div
          key={`left-arrow-${idx}`}
          className="flex items-center justify-center w-[40px]"
        >
          <StaticArrow direction="left" />
        </div>,
      );
    });

    // Main card
    const mainCardWidthClass = (hasMultipleCards && isMainBadge(card.badge)) 
      ? "lg:w-1/2 lg:flex-none flex-1 min-w-0" 
      : "flex-1 min-w-0";
    
    elements.push(
      <div key="main-card" className={mainCardWidthClass}>
        <Card
          title={card.title}
          badge={card.badge}
          description={card.description}
          codeSnippet={card.codeSnippet}
          tabs={card.tabs}
          nestedcards={card.nestedcards}
          sections={card.sections}
          color={color}
        />
      </div>,
    );

    // Right arrows - recursively collect all chained right cards
    const processRightArrows = (
      sourceCard: CardData,
      sourceCardId: string,
      startIdx: number = 0,
      depth: number = 0,
    ) => {
      const cardRightArrows = sourceCard.arrows.filter(
        (a) => a.direction === "right",
      );

      cardRightArrows.forEach((arrow, idx) => {
        const targetCard = cardsById.get(arrow.targetCardId);

        // Only render arrow for the first right connection (depth 0), otherwise add margin
        if (depth === 0) {
          // Render the static arrow
          elements.push(
            <div
              key={`${sourceCardId}-right-arrow-${startIdx + idx}`}
              className="flex items-center justify-center w-[40px]"
            >
              <StaticArrow direction="right" />
            </div>,
          );
        } else {
          // Add 4px gap instead of arrow
          elements.push(
            <div
              key={`${sourceCardId}-right-gap-${startIdx + idx}`}
              className="w-[4px]"
            />,
          );
        }

        // Render the card and process its right arrows recursively
        if (targetCard) {
          // Cards with main badges (1, 2, 1.0, 2.0) get 50% width only if there are multiple cards in the row
          // Sub-cards (2.1, 3.2, etc.) use normal adaptive width
          const cardWidthClass = (hasMultipleCards && isMainBadge(targetCard.badge)) 
            ? "lg:w-1/2 lg:flex-none flex-1 min-w-0" 
            : "flex-1 min-w-0";
          
          elements.push(
            <div
              key={`${sourceCardId}-right-card-${startIdx + idx}`}
              className={cardWidthClass}
            >
              <Card
                title={targetCard.title}
                badge={targetCard.badge}
                description={targetCard.description}
                codeSnippet={targetCard.codeSnippet}
                tabs={targetCard.tabs}
                nestedcards={targetCard.nestedcards}
                sections={targetCard.sections}
                color={color}
              />
            </div>,
          );

          // Recursively process this card's right arrows with increased depth
          processRightArrows(
            targetCard,
            targetCard.id,
            0,
            depth + 1,
          );
        }
      });
    };

    processRightArrows(card, card.id, 0, 0);

    return elements;
  };

  return (
    <div className={`w-full ${isLastCard ? "pb-[0px]" : ""}`}>
      {/* Horizontal row */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        {renderHorizontalRow()}
      </div>

      {/* Down arrows and their target cards */}
      {allDownArrows.map((item, index) => {
        const targetCard = cardsById.get(
          item.arrow.targetCardId,
        );

        // Count cards in THIS specific target card's row (not all down arrows combined)
        let targetRowCardCount = 0;
        
        if (targetCard) {
          // Count this card
          targetRowCardCount = 1;
          
          // Count its left arrows
          const targetLeftArrows = targetCard.arrows.filter((a) => a.direction === "left");
          targetRowCardCount += targetLeftArrows.length;
          
          // Count its right arrows recursively
          const countTargetRightCards = (sourceCard: CardData): number => {
            const cardRightArrows = sourceCard.arrows.filter((a) => a.direction === "right");
            let count = 0;
            cardRightArrows.forEach((arrow) => {
              const rightCard = cardsById.get(arrow.targetCardId);
              if (rightCard) {
                count += 1;
                count += countTargetRightCards(rightCard);
              }
            });
            return count;
          };
          targetRowCardCount += countTargetRightCards(targetCard);
        }

        // Simple logic: when going from fewer cards to more cards, split 50/50
        // When going from more to fewer (or equal), arrow takes full width
        const currentRowCards = totalCardsInRow;
        const targetRowCards = targetRowCardCount;
        
        // Need spacer when either row has multiple cards - this centers the arrow
        // to match the card column widths (each card is 50% when there are 2+ cards)
        const needsSpacer = currentRowCards > 1 || targetRowCards > 1;
        
        console.log(`Arrow from card ${item.sourceCardId} (badge ${cardsById.get(item.sourceCardId)?.badge}) → card ${item.arrow.targetCardId} (badge ${targetCard?.badge}): ${currentRowCards} cards → ${targetRowCards} cards, needsSpacer: ${needsSpacer}`);

        return (
          <div
            key={`down-${item.sourceCardId}-${index}`}
            className="flex flex-col w-full"
          >
            {/* Arrow container - split into max 2 containers */}
            <div className="flex flex-col lg:flex-row items-stretch w-full">
              <div 
                className="flex justify-center" 
                style={{ 
                  flexBasis: needsSpacer ? '50%' : '100%', 
                  flexGrow: 0, 
                  flexShrink: 0 
                }}
              >
                <StaticArrow direction="down" />
              </div>
              {needsSpacer && (
                <div 
                  className="flex justify-center items-center"
                  style={{ 
                    flexBasis: '50%', 
                    flexGrow: 0, 
                    flexShrink: 0
                  }}
                />
              )}
            </div>

            {targetCard && (
              <CardWithArrows
                card={targetCard}
                cardsById={cardsById}
                isLastCard={false}
                color={color}
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
  onWorkflowDataLoaded?: (workflow: WorkflowData) => void;
  themeColor?: string;
}

export function RequestCard({
  jsonUrl,
  onWorkflowDataLoaded,
  themeColor = '#7a23d9',
}: RequestCardProps) {
  const [cardsData, setCardsData] = useState<CardsData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            `Failed to fetch cards: ${response.status} ${response.statusText}`,
          );
        }

        const text = await response.text();

        let data;
        if (
          jsonUrl.endsWith(".yaml") ||
          jsonUrl.endsWith(".yml")
        ) {
          // Parse YAML - returns JS object
          data = yaml.load(text) as CardsData;
        } else {
          // Parse JSON - returns JS object
          data = JSON.parse(text) as CardsData;
        }

        // Validate that we have the expected structure
        if (
          !data ||
          !data.cards ||
          !Array.isArray(data.cards)
        ) {
          throw new Error(
            "Invalid data structure: missing 'cards' array",
          );
        }

        setCardsData(data);

        // Notify parent of workflow data
        if (data && data.workflow && onWorkflowDataLoaded) {
          onWorkflowDataLoaded(data.workflow);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to load cards";
        setError(errorMessage);
        console.error("Error fetching cards:", err);
        console.error("URL attempted:", jsonUrl);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [jsonUrl, onWorkflowDataLoaded]);

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
      <div className="pb-[64px] flex flex-col items-center justify-center py-12 gap-4">
        <div className="text-red-600 font-['IBM_Plex_Sans:SemiBold',sans-serif] text-lg">
          Failed to Load Workflow
        </div>
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif] text-sm max-w-[600px] text-center">
          {error.includes("indentation") ||
          error.includes("YAML")
            ? "The workflow file has formatting errors. Please check the YAML file for proper indentation."
            : error}
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

  return (
    <div>
      <CardWithArrows
        card={cardsData.cards[0]}
        cardsById={cardsById}
        isLastCard={true}
        color={themeColor}
      />
    </div>
  );
}