import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProvideStore } from "./store/provider";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvideStore store={store}>
      <App />
    </ProvideStore>
  </React.StrictMode>
);
