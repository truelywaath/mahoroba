import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TopPage } from "../components/TopPage";
import { Doublify } from "../components/Doublify";
import { NotFound } from "../components/NotFound";

function Router() {
	return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/doublify" element={<Doublify />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
	)
}

export default Router;