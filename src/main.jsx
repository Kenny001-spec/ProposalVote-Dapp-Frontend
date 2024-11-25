import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import App from "./App.jsx";
import { ProposalContextProvider } from "./context/proposalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme appearance="dark">
      <ProposalContextProvider>
        <App />
      </ProposalContextProvider>
    </Theme>
  </StrictMode>
);
