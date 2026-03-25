import InteractiveRibbon from "./components/InteractiveRibbon";

export default function App() {
  return (
    <div className="size-full bg-gray-50">
      {/* Left-anchored scrolling ribbon overlay */}
      <div className="fixed left-0 top-24 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <InteractiveRibbon />
        </div>
      </div>

      
    </div>
  );
}