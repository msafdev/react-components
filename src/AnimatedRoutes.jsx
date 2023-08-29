import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Introduction from "./container/Introduction";
import Installation from "./container/Installation";
import ComponentContainer from "./container/components/ComponentContainer";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>
          <Route index element={<Introduction />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/component" element={<ComponentContainer />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
