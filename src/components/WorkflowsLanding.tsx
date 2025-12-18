import { WorkflowTile } from "./WorkflowTile";
import { WorkflowMetadata } from "../App";

interface WorkflowCategory {
  name: string;
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
  const colorList = ['#7A23D9', '#3BAB5A', '#4589FF', '#FF9D00', '#FF0000'];

  // Group workflows by category
  const categories: WorkflowCategory[] = workflows.reduce((acc, workflow) => {
    const categoryName = workflow.category || "Other";
    let category = acc.find(cat => cat.name === categoryName);
    
    if (!category) {
      category = { name: categoryName, workflows: [] };
      acc.push(category);
    }
    
    category.workflows.push(workflow);
    return acc;
  }, [] as WorkflowCategory[]);

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-[32px] py-[24px]">
        <div className="flex items-center justify-center py-12">
          <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
            Loading workflows...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-[32px] py-[24px]">
      <div className="flex flex-col gap-[24px]">
        {categories.map((category, index) => {
          // Assign color based on category index, rotating through the color list
          const categoryColor = colorList[index % colorList.length];
          
          return (
            <div
              key={`${category.name}-${index}`}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[18px] w-full">
                <p className="leading-[normal]">
                  {category.name}
                </p>
              </div>
              <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
                {category.workflows.map((workflow, idx) => {
                  return (
                    <WorkflowTile
                      key={`${workflow.name}-${idx}`}
                      title={workflow.title}
                      icon={workflow.icon as any}
                      iconColor={categoryColor}
                      onClick={() => onWorkflowClick(workflow.name)}
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