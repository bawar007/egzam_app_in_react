import React from "react";
import { Route, Routes } from "react-router-dom";

import PassPage from "../pages/PassPage";
import HomePage from "../pages/HomePage";
import WikiPage from "../pages/WikiPage";
import ContactPage from "../pages/ContactPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pass" element={<PassPage />} />
      <Route path="/wikisite" element={<WikiPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Page;
