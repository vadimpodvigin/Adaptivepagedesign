import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import {
  RequestCard,
  WorkflowData,
} from "./components/RequestCard";
import { WorkflowsLanding } from "./components/WorkflowsLanding";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Network from "./imports/Network";
import { useState, useEffect } from "react";
import yaml from "js-yaml";

// Extended interface to include URL
export interface WorkflowMetadata extends WorkflowData {
  url: string;
  name: string; // Used as the key/identifier
}

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

  // Map workflows to their JSON/YAML URLs
  const workflowJsonUrls: Record<string, string> = {
    "Digital Assets":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/coreflowDigitalAsset.yaml",
    "Stripe Payment":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/coreflowStripe.json",
    "CoreIgnite User Account Creation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/accountCreationVer2.json",
    "New Core Banking Space Activation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/BankSetupVer2.json",
    "Card Transaction":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/CardTransaction.yaml",
    "Direct Account":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/DirectAccount.yaml",
    "Direct Debit":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/DirectDebit.yaml",
    BNPL: "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/BNPL.yaml",
    "CoreIgnite Team: Add New Workflow":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/exampleCardComponents.yaml",
  };

  // Color mapping function (matching WorkflowsLanding and Sidebar)
  const getCategoryColor = (category: string): string => {
    const colorList = [
      "#7A23D9",
      "#3BAB5A",
      "#4589FF",
      "#FF9D00",
      "#FF0000",
    ];
    const categories = Array.from(
      new Set(allWorkflows.map((w) => w.category)),
    );
    const categoryIndex = categories.indexOf(category);
    return categoryIndex >= 0
      ? colorList[categoryIndex % colorList.length]
      : "#7A23D9";
  };

  // Get current workflow's color
  // Non-workflow pages (Home, FAQs) always use purple
  const currentColor = !currentWorkflow || currentWorkflow === "__FAQS__" || currentWorkflow === "CoreIgnite Team: Add New Workflow"
    ? "#7A23D9"
    : workflowData?.category
    ? getCategoryColor(workflowData.category)
    : "#7A23D9";

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
      // Don't reset workflowData here - let it stay null/loading until data loads
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