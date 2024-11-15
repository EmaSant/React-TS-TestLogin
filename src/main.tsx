import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";

//Setting up Redux for state managing
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
