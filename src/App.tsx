import React from "react";
import "./scss/index.scss";
import "./scss/common.scss";
import "./scss/App.scss";
import "./scss/responsive.scss";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRouter from "./components/AppRouter";

import "animate.css";

function App() {
    return (
        <div className="Wrap">
            <Header />
            <div className="mt-[75px]">
                <AppRouter />
                <Footer />
            </div>
        </div>
    );
}

export default App;
