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

      {/* Demo content to show scrolling */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mb-8">Scrolling Content</h1>
        {[...Array(20)].map((_, i) => (
          <p key={i} className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
      </div>
    </div>
  );
}