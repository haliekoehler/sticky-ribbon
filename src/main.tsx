import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Tell TypeScript about your global function
declare global {
  interface Window {
    renderFigmaWidget?: (elementId: string) => void;
  }
}

// Expose a global function so GTM can trigger the app
window.renderFigmaWidget = (elementId: string) => {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error(`[FigmaWidget] Element #${elementId} not found`);
    return;
  }

  // Mount React normally, but only when GTM calls it
  const root = createRoot(container);
  root.render(<App />);
};