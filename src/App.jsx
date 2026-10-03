import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from "react";
import './index.css'

function App() {

  useEffect(() => {
    const y = sessionStorage.getItem("scrollY");
    if (y) {
      setTimeout(() => window.scrollTo(0, Number(y)), 100);
    }

    const save = () => sessionStorage.setItem("scrollY", window.scrollY);
    window.addEventListener("scroll", save);
    return () => window.removeEventListener("scroll", save);
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Menu />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App
