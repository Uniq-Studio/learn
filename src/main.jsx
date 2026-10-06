import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "../public/css/styles.css";
import "../public/css/material_design.css";
import "../public/css/text_style.css";

import NavHost from "./components/NavHost.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <NavHost />
    </StrictMode>
);