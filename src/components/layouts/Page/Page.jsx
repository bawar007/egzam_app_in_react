import React from "react";
import { Route, Routes } from "react-router-dom";

import PassPage from "../../pages/PassPage/PassPage";
import HomePage from "../../pages/HomePage/HomePage";
import WikiPage from "../../pages/WikiPage/WikiPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pass" element={<PassPage />} />
      <Route path="/wikisite" element={<WikiPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<p>AdminPage</p>} />
    </Routes>
  );
};

export default Page;
