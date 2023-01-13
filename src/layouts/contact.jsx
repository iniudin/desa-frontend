import React, { useEffect } from "react";
import FooterMain from "../components/footer";
import NavbarMain from "../components/navbar";
import ContactContent from "../pages/Connection/contact-content";
import ContactJumbutron from "../pages/Connection/contact-jumbutron";

export default function Contact() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <NavbarMain />
      <ContactJumbutron />
      <ContactContent />
      <FooterMain />
    </>
  );
}
