import "./globals.css";
import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import About from "./components/modules/about/About";
import Service from "./components/modules/services/Services";
import NextProject from "./components/modules/nextproject/nextproject";
import Detailshome from "./components/modules/detailshome/Detailshome";
import Portfolio from "./components/modules/portfolio/Portfolio";


export default function Home() {
  console.log('<Home> está sendo renderizada no servidor');
  return (
    <main>
     <Navbar />
     <Header />
     <About />
     <Service />
     <Detailshome />
     <Portfolio />
     <NextProject />
     <Footer />
    </main>
  )
}
