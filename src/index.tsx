import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./layout/ScrollToTop";
import { LenisProvider } from "./hook/LenisContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LenisProvider>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </LenisProvider>
    </BrowserRouter>
);
