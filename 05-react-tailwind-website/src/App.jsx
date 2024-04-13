import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Analytics from "./assets/components/Analytics";
import NewsLetter from "./assets/components/NewsLetter";
import Cards from "./assets/components/Cards";
import Footer from "./assets/components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <NewsLetter />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
