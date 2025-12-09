import { Header } from "./components/Header";
import { RequestCard } from "./components/RequestCard";
import { useState, useEffect } from "react";

export default function App() {
  const [currentWorkflow, setCurrentWorkflow] = useState(
    "CoreFlow (Mint Digital Asset)",
  );

  // Listen for workflow changes from the header
  useEffect(() => {
    const handleWorkflowChange = (event: CustomEvent) => {
      setCurrentWorkflow(event.detail.workflow);
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
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/AccountActivation.json",
    "New Core Banking Space Activation":
      "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/BankSetup.json",
  };

  const cardsJsonUrl =
    workflowJsonUrls[currentWorkflow] ||
    workflowJsonUrls["CoreFlow (Mint Digital Asset)"];

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8">
          {currentWorkflow}
        </h1>
        <RequestCard
          key={currentWorkflow}
          jsonUrl={cardsJsonUrl}
        />
      </div>
    </div>
  );
}