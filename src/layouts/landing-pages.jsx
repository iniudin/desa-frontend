import React from "react";
import FooterMain from "../components/footer";
import NavbarMain from "../components/navbar";
import Benefit from "../pages/Home/benefit";
import FAQ from "../pages/Home/faq";
import Feature from "../pages/Home/feature";
import FeatureTwo from "../pages/Home/feature-two";
import Jumbutron from "../pages/Home/jumbutron";
import Solution from "../pages/Home/solution";
import Testimoni from "../pages/Home/testimoni";
import User from "../pages/Home/user";

export default function LandingPage() {
  return (
    <>
      <NavbarMain />
      <Jumbutron />
      <Feature />
      <Solution />
      <FeatureTwo />
      <Benefit />
      <User />
      <Testimoni />
      <FAQ />
      <FooterMain />
    </>
  );
}
