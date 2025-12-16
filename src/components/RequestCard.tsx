import svgPathsGrey from "../imports/svg-cne0z3qkwz";
import svgPathsUpGrey from "../imports/svg-9j3qgonek1";
import ArrowRightGrey159 from "../imports/ArrowRight-159-390";
import ArrowLeftGrey159 from "../imports/ArrowLeft-159-371";
import { useState, useEffect } from "react";
import yaml from "js-yaml";

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
  sections?: Array<{
    title: string;
    badge: string;
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
    <div className="bg-[#f6f2ff] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[32px] px-[8px] h-[32px]">
      <div
        aria-hidden="true"
        className="absolute border-[1.5px] border-[#7a23d9] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a23d9] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          {number}
        </p>
      </div>
    </div>
  );
}

function SectionNumberBadge({ number }: { number: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[32px] px-[8px] h-[32px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#d4bbff] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a56eff] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          {number}
        </p>
      </div>
    </div>
  );
}

function ArrowDownGrey() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow--down">
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
    <div className="relative shrink-0 size-[24px]" data-name="Arrow--up">
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
    <div className="bg-[#edf5ff] relative shrink-0 w-full rounded-[4px]">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[14px] items-start p-[8px] relative w-full">
          <div
            className={`basis-0 content-stretch flex flex-col ${description ? "gap-[4px] items-start" : "items-start justify-center"} grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-neutral-600`}
          >
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

function SectionCard({
  title,
  badge,
  description,
}: {
  title: string;
  badge: string;
  description: string;
}) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-stretch p-4 md:p-[16px] rounded-[4px] transition-shadow hover:shadow-md border border-[#e0e0e0]">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="flex-1 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] md:text-[18px]">
          <p className="leading-[normal]">{title}</p>
        </div>
        <SectionNumberBadge number={badge} />
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
  nestedcard?: Array<{
    title: string;
    description: string;
  }>;
  sections?: Array<{
    title: string;
    badge: string;
    description: string;
  }>;
  className?: string;
}

function Card({
  title,
  badge,
  description,
  nestedcard,
  sections,
  className = "",
}: CardProps) {
  const hasNestedCards =
    nestedcard &&
    Array.isArray(nestedcard) &&
    nestedcard.length > 0;
  const hasSections =
    sections && Array.isArray(sections) && sections.length > 0;
  const shouldShowDivider =
    description || hasNestedCards || hasSections;

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

      {hasSections && (
        <div className="flex flex-col gap-[16px] m-[16px]">
          {sections.map((section, index) => (
            <SectionCard
              key={index}
              title={section.title}
              badge={section.badge}
              description={section.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Static arrow component (non-interactive)
function StaticArrow({ direction }: { direction: "down" | "left" | "right" | "up" }) {
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
}

function CardWithArrows({
  card,
  cardsById,
  isLastCard,
}: CardWithArrowsProps) {
  // Group arrows by direction
  const leftArrows = card.arrows.filter((a) => a.direction === "left");

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

  // Build the horizontal row
  const renderHorizontalRow = () => {
    const elements: JSX.Element[] = [];

    // Left arrows and their cards
    leftArrows.forEach((arrow, idx) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      
      if (targetCard) {
        elements.push(
          <div key={`left-card-${idx}`} className="flex-1 min-w-0">
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              nestedcard={targetCard.nestedcard}
              sections={targetCard.sections}
            />
          </div>
        );
      }

      elements.push(
        <div
          key={`left-arrow-${idx}`}
          className="flex items-center justify-center w-[40px]"
        >
          <StaticArrow direction="left" />
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
          sections={card.sections}
        />
      </div>
    );

    // Right arrows - recursively collect all chained right cards
    const processRightArrows = (sourceCard: CardData, sourceCardId: string, startIdx: number = 0) => {
      const cardRightArrows = sourceCard.arrows.filter(
        (a) => a.direction === "right",
      );

      cardRightArrows.forEach((arrow, idx) => {
        const targetCard = cardsById.get(arrow.targetCardId);

        // Render the static arrow
        elements.push(
          <div
            key={`${sourceCardId}-right-arrow-${startIdx + idx}`}
            className="flex items-center justify-center w-[40px]"
          >
            <StaticArrow direction="right" />
          </div>
        );

        // Render the card and process its right arrows recursively
        if (targetCard) {
          elements.push(
            <div
              key={`${sourceCardId}-right-card-${startIdx + idx}`}
              className="flex-1 min-w-0"
            >
              <Card
                title={targetCard.title}
                badge={targetCard.badge}
                description={targetCard.description}
                nestedcard={targetCard.nestedcard}
                sections={targetCard.sections}
              />
            </div>
          );

          // Recursively process this card's right arrows
          processRightArrows(targetCard, targetCard.id, 0);
        }
      });
    };

    processRightArrows(card, card.id, 0);

    return elements;
  };

  return (
    <div className={`w-full ${isLastCard ? "pb-[64px]" : ""}`}>
      {/* Horizontal row */}
      <div className="flex flex-col lg:flex-row items-stretch gap-[8px] w-full">
        {renderHorizontalRow()}
      </div>

      {/* Down arrows and their target cards */}
      {allDownArrows.map((item, index) => {
        const targetCard = cardsById.get(item.arrow.targetCardId);

        return (
          <div
            key={`down-${item.sourceCardId}-${index}`}
            className="flex flex-col gap-[8px] w-full mt-[8px]"
          >
            {/* Arrow container - always centered */}
            <div className="flex justify-center w-full px-4 md:px-[24px] py-2">
              <StaticArrow direction="down" />
            </div>
            
            {targetCard && (
              <CardWithArrows
                card={targetCard}
                cardsById={cardsById}
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

        const text = await response.text();
        
        let data;
        if (jsonUrl.endsWith('.yaml') || jsonUrl.endsWith('.yml')) {
          // Parse YAML - returns JS object
          data = yaml.load(text);
        } else {
          // Parse JSON - returns JS object
          data = JSON.parse(text);
        }
        
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
          {error.includes("indentation") || error.includes("YAML") 
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
      />
    </div>
  );
}