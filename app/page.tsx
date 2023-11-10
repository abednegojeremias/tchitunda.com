import "./globals.css";
import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import About from "./components/modules/about/About";
import Service from "./components/modules/services/Services";
import NextProject from "./components/modules/nextproject/nextproject";
import Detailsdesign from "./components/modules/details/detailsdesign/Detailsdesign";
import Portfolio from "./components/modules/portfolio/Portfolio";
import Plans from "./components/modules/plans/Plans";
import Detailsmarketing from "./components/modules/details/detailsmarketing/Detailsmarketing";
import Detailswebsites from "./components/modules/details/detailswebsites/Detailswebsites";
import Questions from "./components/modules/questions/Questions";
import Clients from "./components/modules/clients/clients";
import Details from "./components/modules/callaction/Callaction";

export default function Home() {
  console.log("<Home> está sendo renderizada no servidor");
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Detailsdesign />
      <Portfolio />
      <Detailsmarketing />
      <NextProject />
      <Plans />
      <Detailswebsites />
      <Clients />
      <Details />
      <Questions />
      <Footer />
    </main>
  );
}
