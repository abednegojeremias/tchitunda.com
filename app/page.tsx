import "./globals.css";
import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";


export default function Home() {
  console.log('<Home> está sendo renderizada no servidor');
  return (
    <main>
     <Navbar />
     <Header />
     <Footer />
    </main>
  )
}
