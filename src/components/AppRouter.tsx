import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Service from "../pages/Service";
import Promotion from "../pages/Promotion";
import NotFound from "../pages/NotFound";
import NoticeList from "../pages/NoticeList";
import NoticeDetail from "../pages/NoticeDetail";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Company from "../pages/Company";
import Inquiry from "./Inquiry";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/company" element={<Company />}></Route>
                <Route path="/service" element={<Service />}></Route>
                <Route path="/promotion" element={<Promotion />}></Route>
                <Route path="/notice" element={<NoticeList />}></Route>
                <Route path="/notice/:id" element={<NoticeDetail />}></Route>
                <Route path="/terms" element={<Terms />}></Route>
                <Route path="/privacy" element={<Privacy />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}
