import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TextDiffChecker from "./pages/TextDiffChecker";
import { Helmet } from "react-helmet-async";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-6GZ765LX4T";
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-6GZ765LX4T');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return (
    <>
      <Helmet>
        <title>Text Diff Tool - SlayItCoder</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/diff" />} />
          <Route path="/diff" element={<TextDiffChecker />} />
        </Routes>
      </Router>
    </>
  );
}