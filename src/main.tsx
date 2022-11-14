import ReactDOM from "react-dom/client";
import App from "./App";
import { ValuesProvider } from "./Contexts/value";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ValuesProvider>
    <App />
  </ValuesProvider>
);
