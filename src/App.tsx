import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { RequestCard } from "./components/RequestCard";
import { WorkflowsLanding } from "./components/WorkflowsLanding";
import { Footer } from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [currentWorkflow, setCurrentWorkflow] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Map workflows to their JSON URLs
  const workflowJsonUrls: Record<string, string> = {
    "Digital Assets":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/YAML/coreflowDigitalAsset.yaml",
    "Stripe Payment":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/test2.json",
    "CoreIgnite User Account Creation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/accountCreationVer2.json",
    "New Core Banking Space Activation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/JSON/BankSetupVer2.json",
  };

  const cardsJsonUrl = currentWorkflow && workflowJsonUrls[currentWorkflow]
    ? workflowJsonUrls[currentWorkflow]
    : workflowJsonUrls["Digital Assets"];

  const handleWorkflowClick = (workflowName: string) => {
    if (workflowName === '__HOME__') {
      setCurrentWorkflow(null);
    } else {
      setCurrentWorkflow(workflowName);
    }
    setSidebarOpen(false);
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        isMenuOpen={sidebarOpen}
        onLogoClick={() => handleWorkflowClick('__HOME__')}
      />
      <Sidebar 
        currentWorkflow={currentWorkflow} 
        onWorkflowChange={handleWorkflowClick} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="pt-[61px] flex-grow">
        {!currentWorkflow ? (
          <WorkflowsLanding onWorkflowClick={handleWorkflowClick} />
        ) : (
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8">
              {currentWorkflow}
            </h1>
            <RequestCard
              key={currentWorkflow}
              jsonUrl={cardsJsonUrl}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}