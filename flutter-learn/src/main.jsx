import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./css/styles.css";
import "./css/material_design.css";
import "./css/text_style.css";

import NavHost from "./components/NavHost.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <NavHost />
    </StrictMode>
);