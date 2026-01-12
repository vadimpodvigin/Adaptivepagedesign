import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { RequestCard } from "./components/features/RequestCard";
import { WorkflowsLanding } from "./components/features/WorkflowsLanding";
import Network from "./assets/icons/Network";
import { WorkflowData, WorkflowMetadata } from "./types";
import { workflowJsonUrls } from "./config";
import { getCategoryColor } from "./utils";
import { DEFAULT_THEME_COLOR } from "./config/constants";
import { useState, useEffect } from "react";
import yaml from "js-yaml";

export default function App() {
  const [currentWorkflow, setCurrentWorkflow] = useState<
    string | null
  >(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [workflowData, setWorkflowData] =
    useState<WorkflowData | null>(null);
  const [allWorkflows, setAllWorkflows] = useState<
    WorkflowMetadata[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Get current workflow's color
  // Non-workflow pages (Home, FAQs) always use purple
  const currentColor = !currentWorkflow || currentWorkflow === "__FAQS__" || currentWorkflow === "CoreIgnite Team: Add New Workflow"
    ? DEFAULT_THEME_COLOR
    : workflowData?.category
    ? getCategoryColor(workflowData.category, allWorkflows)
    : DEFAULT_THEME_COLOR;

  // Fetch workflow metadata on mount
  useEffect(() => {
    async function fetchAllWorkflowMetadata() {
      setLoading(true);
      const workflows: WorkflowMetadata[] = [];

      for (const [name, url] of Object.entries(
        workflowJsonUrls,
      )) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.warn(
              `Skipping ${name}: ${response.status} ${response.statusText}`,
            );
            continue;
          }

          const text = await response.text();
          let data;

          try {
            if (url.endsWith(".yaml") || url.endsWith(".yml")) {
              data = yaml.load(text) as {
                workflow: WorkflowData;
              };
            } else {
              data = JSON.parse(text) as {
                workflow: WorkflowData;
              };
            }

            if (data && data.workflow) {
              workflows.push({
                ...data.workflow,
                url,
                name,
              });
            } else {
              console.warn(
                `${name}: Missing workflow key in data structure`,
              );
            }
          } catch (parseError) {
            console.error(
              `Failed to parse ${name}:`,
              parseError instanceof Error
                ? parseError.message
                : parseError,
            );
            continue;
          }
        } catch (error) {
          console.warn(`Failed to fetch ${name}:`, error);
        }
      }

      setAllWorkflows(workflows);
      setLoading(false);
    }

    fetchAllWorkflowMetadata();
  }, []);

  const cardsJsonUrl =
    currentWorkflow && workflowJsonUrls[currentWorkflow]
      ? workflowJsonUrls[currentWorkflow]
      : workflowJsonUrls["Digital Assets"];

  const handleWorkflowClick = (workflowName: string) => {
    if (workflowName === "__HOME__") {
      setCurrentWorkflow(null);
      setWorkflowData(null);
    } else if (workflowName === "__FAQS__") {
      setCurrentWorkflow("__FAQS__");
      setWorkflowData(null);
    } else {
      setCurrentWorkflow(workflowName);
      setWorkflowData(null); // Reset workflow data when switching
    }
    setSidebarOpen(false);
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col">
      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        isMenuOpen={sidebarOpen}
        onLogoClick={() => handleWorkflowClick("__HOME__")}
        themeColor={currentColor}
      />
      <Sidebar
        currentWorkflow={currentWorkflow}
        onWorkflowChange={handleWorkflowClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        workflows={allWorkflows}
      />
      <div className="py-[61px] flex-grow pt-[61px] pr-[0px] pb-[0px] pl-[0px]">
        {!currentWorkflow ? (
          <WorkflowsLanding
            onWorkflowClick={handleWorkflowClick}
            workflows={allWorkflows}
            loading={loading}
          />
        ) : currentWorkflow === "__FAQS__" ? (
          <div className="max-w-[1200px] mx-auto px-[32px] pt-[24px] md:px-8">
            <h1 className="mb-[8px] font-[IBM_Plex_Sans] text-[24px] font-medium text-center mt-[0px]">
              CoreIgnite FAQs
            </h1>
          </div>
        ) : (
          <div className="max-w-[1200px] mx-auto px-[32px] pt-[24px] md:px-8">
            <h1 className="mb-[8px] font-[IBM_Plex_Sans] text-[24px] font-medium text-center flex items-center justify-center mt-[0px] mr-[0px] ml-[0px]">
              <Network
                icon={workflowData?.icon}
                iconColor={currentColor}
                className="mr-[8px]"
              />
              {workflowData?.title || currentWorkflow}
            </h1>
            <p className="mb-8 font-[IBM_Plex_Sans] text-[16px] text-[#525252] text-center px-[96px] py-[0px]">
              {workflowData?.description ||
                "Loading workflow description..."}
            </p>
            <RequestCard
              key={currentWorkflow}
              jsonUrl={cardsJsonUrl}
              onWorkflowDataLoaded={setWorkflowData}
              themeColor={currentColor}
            />
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}