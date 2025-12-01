import { Header } from "./components/Header";
import { RequestCard } from "./components/RequestCard";

export default function App() {
  // Replace this URL with your own JSON file URL
  const cardsJsonUrl = "https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/refs/heads/main/test.json";
  
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
        <RequestCard jsonUrl={cardsJsonUrl} />
      </div>
    </div>
  );
}