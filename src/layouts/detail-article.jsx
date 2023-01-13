import React, { useEffect } from "react";
import NavbarMain from "../components/navbar";
import ArticleDetail from "../pages/Article/article-detail";

export default function DetailArticle() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <NavbarMain />
      <ArticleDetail />
    </>
  );
}
