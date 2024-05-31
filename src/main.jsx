import React from "react";
import ReactDOM from "react-dom/client";
import { Navigation } from "./routes/Navigation";
import "./index.css";
import { InitDataProvider } from "./context/InitDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <InitDataProvider>
            <Navigation />
        </InitDataProvider>
    </React.StrictMode>
);
