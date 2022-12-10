import * as React from "react";
import { Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { IntroPage } from "./IntroPage";

export const Pages = () => {
  return (
    <div>
      <Navbar />
      <IntroPage />
      <Footer />
    {/* 
      <Routes>
        
      </Routes> */}
    </div>
  );
};
