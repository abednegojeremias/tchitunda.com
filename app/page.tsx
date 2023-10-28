import "./globals.css";
import React from "react";
import Navbar from "./components/layout/navbar/Navbar";



export default function Home() {
  console.log('<Home> está sendo renderizada no servidor');
  return (
    <main>
     <Navbar />
    </main>
  )
}
