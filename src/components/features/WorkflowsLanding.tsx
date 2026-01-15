import { WorkflowMetadata } from '../../types';
import { WorkflowTile } from './WorkflowTile';
import { WorkflowTileSkeleton } from '../skeletons/WorkflowTileSkeleton';
import { Loading } from '../common/Loading';

interface WorkflowCategory {
  category: string;
  workflows: WorkflowMetadata[];
}

interface WorkflowsLandingProps {
  onWorkflowClick: (workflowName: string) => void;
  workflows: WorkflowMetadata[];
  loading: boolean;
}

export function WorkflowsLanding({
  onWorkflowClick,
  workflows,
  loading,
}: WorkflowsLandingProps) {
  // Define color rotation list (matching Sidebar colors)
  const colorList = [
    "#7A23D9",
    "#3BAB5A",
    "#4589FF",
    "#FF9D00",
    "#FF0000",
  ];

  // Group workflows by category
  const categories: WorkflowCategory[] = workflows
    .filter(workflow => workflow.name !== 'CoreIgnite Team: Add New Workflow')
    .reduce(
      (acc, workflow) => {
        const categoryName = workflow.category || "Other";
        let category = acc.find(
          (cat) => cat.category === categoryName,
        );

        if (!category) {
          category = { category: categoryName, workflows: [] };
          acc.push(category);
        }

        category.workflows.push(workflow);
        return acc;
      },
      [] as WorkflowCategory[],
    );

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-[24px]">
        <div className="flex flex-col gap-[24px]">
          {/* Skeleton for categories */}
          {[1, 2].map((categoryIndex) => (
            <div
              key={categoryIndex}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              {/* Category title skeleton */}
              <div className="h-[18px] w-[150px] bg-gray-200 animate-pulse rounded mb-2" />

              {/* Workflow tiles skeleton */}
              <div className="content-start flex flex-wrap gap-2 items-start relative shrink-0 w-full">
                {[1, 2, 3].map((tileIndex) => (
                  <WorkflowTileSkeleton key={tileIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-[24px]">
      <div className="flex flex-col gap-[24px]">
        {categories.map((category, index) => {
          // Assign color based on category index, rotating through the color list
          const categoryColor =
            colorList[index % colorList.length];

          return (
            <div
              key={`${category.category}-${index}`}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[18px] w-full">
                <p className="leading-[normal] font-[IBM_Plex_Sans] font-bold font-normal mb-2">
                  {category.category}
                </p>
              </div>
              <div className="content-start flex flex-wrap gap-2 items-start relative shrink-0 w-full">
                {category.workflows.map((workflow, idx) => {
                  return (
                    <WorkflowTile
                      key={`${workflow.name}-${idx}`}
                      title={workflow.title}
                      description={workflow.description}
                      icon={workflow.icon as any}
                      iconColor={categoryColor}
                      onClick={() =>
                        onWorkflowClick(workflow.name)
                      }
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}