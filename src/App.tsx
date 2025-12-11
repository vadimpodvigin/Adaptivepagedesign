import { Header } from "./components/Header";
import { RequestCard } from "./components/RequestCard";
import { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

export default function App() {
  const [currentWorkflow, setCurrentWorkflow] = useState(
    "CoreFlow (Mint Digital Asset)",
  );
  const [expandAll, setExpandAll] = useState(false);

  // Listen for workflow changes from the header
  useEffect(() => {
    const handleWorkflowChange = (event: CustomEvent) => {
      setCurrentWorkflow(event.detail.workflow);
      // Reset expand all when workflow changes
      setExpandAll(false);
    };

    window.addEventListener(
      "workflowChange",
      handleWorkflowChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "workflowChange",
        handleWorkflowChange as EventListener,
      );
    };
  }, []);

  // Map workflows to their JSON URLs
  const workflowJsonUrls: Record<string, string> = {
    "CoreFlow (Mint Digital Asset)":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/test.json",
    "CoreFlow (Stripe Payment Workflow)":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/test2.json",
    "CoreIgnite User Account Creation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/accountCreationVer2.json",
    "New Core Banking Space Activation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/BankSetupVer2.json",
  };

  const cardsJsonUrl =
    workflowJsonUrls[currentWorkflow] ||
    workflowJsonUrls["CoreFlow (Mint Digital Asset)"];

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
        <div className="flex items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            {currentWorkflow}
          </h1>
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-[4px] bg-white border border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors shrink-0"
            title={expandAll ? "Collapse all cards" : "Expand all cards"}
          >
            {expandAll ? (
              <Minimize2 className="w-5 h-5 text-[#161616]" />
            ) : (
              <Maximize2 className="w-5 h-5 text-[#161616]" />
            )}
          </button>
        </div>
        <RequestCard
          key={currentWorkflow}
          jsonUrl={cardsJsonUrl}
          expandAll={expandAll}
        />
      </div>
    </div>
  );
}