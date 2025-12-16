import { WorkflowTile } from "./WorkflowTile";

interface Workflow {
  id: string;
  name: string;
  icon:
    | "piggy-bank"
    | "fragments"
    | "finance"
    | "money"
    | "book"
    | "application-mobile"
    | "user-profile";
  color: string;
}

interface WorkflowCategory {
  name: string;
  workflows: Workflow[];
}

interface WorkflowsLandingProps {
  onWorkflowClick: (workflowName: string) => void;
}

export function WorkflowsLanding({
  onWorkflowClick,
}: WorkflowsLandingProps) {
  // Define the workflow categories and their items
  const categories: WorkflowCategory[] = [
    {
      name: "CoreIgnite Setup",
      workflows: [
        {
          id: "account-creation",
          name: "CoreIgnite User Account Creation",
          icon: "user-profile",
          color: "#42BE65",
        },
        {
          id: "bank-setup",
          name: "New Core Banking Space Activation",
          icon: "finance",
          color: "#42BE65",
        },
      ],
    },
    {
      name: "CoreFlow",
      workflows: [
        {
          id: "coreflow-mint",
          name: "Digital Assets",
          icon: "piggy-bank",
          color: "#7A23D9",
        },
        {
          id: "coreflow-stripe",
          name: "Stripe Payment",
          icon: "money",
          color: "#7A23D9",
        },
      ],
    },
  ];

  // Only these 4 workflows are clickable
  const clickableWorkflows = [
    "CoreIgnite User Account Creation",
    "New Core Banking Space Activation",
    "Digital Assets",
    "Stripe Payment",
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-12">
      <div className="flex flex-col gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={`${category.name}-${index}`}
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          >
            <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[18px] w-full">
              <p className="leading-[normal]">
                {category.name}
              </p>
            </div>
            <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
              {category.workflows.map((workflow) => {
                const isClickable = clickableWorkflows.includes(
                  workflow.name,
                );
                return (
                  <WorkflowTile
                    key={workflow.id}
                    title={workflow.name}
                    icon={workflow.icon}
                    iconColor={workflow.color}
                    onClick={
                      isClickable
                        ? () => onWorkflowClick(workflow.name)
                        : undefined
                    }
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}