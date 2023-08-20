import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TopPage } from "../components/TopPage";

function Router() {
	return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
	)
}

export default Router;