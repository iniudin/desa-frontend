import React, { useEffect } from "react";
import FooterMain from "../components/footer";
import NavbarMain from "../components/navbar";
import ArticlesContent from "../pages/Article/articles-content";

export default function ListArticles() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <NavbarMain />
      <ArticlesContent />
      <FooterMain />
    </>
  );
}
