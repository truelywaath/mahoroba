import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TopPage } from "../components/TopPage";
import { SelectArea } from '../components/SelectArea';
import { SelectSpot } from '../components/SelectSpot';
import { ShowSpotDetail } from '../components/ShowSpotDetail';
import { Doublify } from "../components/Doublify";
import { NotFound } from "../components/NotFound";

function Router() {
	return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/doublify" element={<Doublify />} />
      <Route path="/area" element={<SelectArea />} />
      <Route path="/spot" element={<SelectSpot />} />
      <Route path="/detail" element={<ShowSpotDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
	)
}

export default Router;