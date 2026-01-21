import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import {
  RequestCard,
  WorkflowData,
} from "./components/RequestCard";
import { WorkflowsLanding } from "./components/features/WorkflowsLanding";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Network from "./components/legacy/Network";
import { LoginPage } from "./components/auth/LoginPage";
import { useState, useEffect } from "react";
import yaml from "js-yaml";
import { WORKFLOW_URLS } from "./config/workflows";

// Extended interface to include URL
export interface WorkflowMetadata extends WorkflowData {
  url: string;
  name: string; // Used as the key/identifier
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  const [failedWorkflows, setFailedWorkflows] = useState<
    Array<{ name: string; error: string }>
  >([]);

  // Check sessionStorage for authentication on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem("coreIgniteAuth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch workflow metadata on mount (only when authenticated)
  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchAllWorkflowMetadata() {
      setLoading(true);
      const workflows: WorkflowMetadata[] = [];

      for (const [name, url] of Object.entries(
        WORKFLOW_URLS,
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
              setFailedWorkflows((prev) => [
                ...prev,
                { name, error: "Missing workflow key in data structure" },
              ]);
            }
          } catch (parseError) {
            const errorMsg =
              parseError instanceof Error
                ? parseError.message
                : String(parseError);
            console.error(`Failed to parse ${name}:`, errorMsg);
            console.error(`URL attempted: ${url}`);
            setFailedWorkflows((prev) => [
              ...prev,
              { name, error: errorMsg },
            ]);
            continue;
          }
        } catch (error) {
          console.warn(`Failed to fetch ${name}:`, error);
          setFailedWorkflows((prev) => [
            ...prev,
            { name, error: error instanceof Error ? error.message : String(error) },
          ]);
        }
      }

      setAllWorkflows(workflows);
      setLoading(false);
    }

    fetchAllWorkflowMetadata();
  }, [isAuthenticated]);

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("coreIgniteAuth", "authenticated");
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("coreIgniteAuth");
    setCurrentWorkflow(null);
    setWorkflowData(null);
    setSidebarOpen(false);
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
  // Non-workflow pages (Home, Questions) always use purple
  const currentColor =
    !currentWorkflow ||
    currentWorkflow === "__QUESTIONS__" ||
    currentWorkflow === "CoreIgnite Team: Add New Workflow"
      ? "#7A23D9"
      : workflowData?.category
        ? getCategoryColor(workflowData.category)
        : "#7A23D9";

  const cardsJsonUrl =
    currentWorkflow && WORKFLOW_URLS[currentWorkflow]
      ? WORKFLOW_URLS[currentWorkflow]
      : WORKFLOW_URLS["Digital Assets"];

  const handleWorkflowClick = (workflowName: string) => {
    if (workflowName === "__HOME__") {
      setCurrentWorkflow(null);
      setWorkflowData(null);
    } else if (workflowName === "__QUESTIONS__") {
      setCurrentWorkflow("__QUESTIONS__");
      setWorkflowData(null);
    } else {
      setCurrentWorkflow(workflowName);
      // Don't reset workflowData here - let it stay null/loading until data loads
    }
    setSidebarOpen(false);
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col">
      {/* Error notification banner */}
      {failedWorkflows.length > 0 && (
        <div className="bg-[#fff1f1] border-b border-[#da1e28] px-4 py-3 z-50 sticky top-0">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[#da1e28] shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] text-[#161616] font-semibold mb-1">
                  Failed to load {failedWorkflows.length} workflow
                  {failedWorkflows.length > 1 ? "s" : ""}
                </p>
                <ul className="font-['IBM_Plex_Sans',sans-serif] text-[12px] text-[#525252] space-y-1">
                  {failedWorkflows.map((failed, index) => (
                    <li key={index} className="break-words">
                      <span className="font-semibold">{failed.name}:</span>{" "}
                      {failed.error}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setFailedWorkflows([])}
                className="text-[#161616] hover:text-[#525252] transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        isMenuOpen={sidebarOpen}
        onLogoClick={() => handleWorkflowClick("__HOME__")}
        themeColor={currentColor}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <Sidebar
        currentWorkflow={currentWorkflow}
        onWorkflowChange={handleWorkflowClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        workflows={allWorkflows}
      />
      <div className="md:pt-[61px] flex-grow pr-[0px] pl-[0px]">
        {!currentWorkflow ? (
          <WorkflowsLanding
            onWorkflowClick={handleWorkflowClick}
            workflows={allWorkflows}
            loading={loading}
          />
        ) : currentWorkflow === "__QUESTIONS__" ? (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-[24px]">
            <h1 className="mb-[8px] font-[IBM_Plex_Sans] text-[20px] sm:text-[24px] font-medium text-center mt-[0px]">
              Questions
            </h1>
          </div>
        ) : (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-[24px]">
            <h1 className="mb-[8px] font-[IBM_Plex_Sans] text-[20px] sm:text-[24px] font-medium text-center flex items-center justify-center mt-[0px] mr-[0px] ml-[0px]">
              <Network
                icon={workflowData?.icon}
                iconColor={currentColor}
                className="mr-[8px]"
              />
              {workflowData?.title || currentWorkflow}
            </h1>
            <p className="mb-8 font-[IBM_Plex_Sans] text-[14px] sm:text-[16px] text-[#525252] text-center px-4 sm:px-8 md:px-16 lg:px-24 py-[0px]">
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