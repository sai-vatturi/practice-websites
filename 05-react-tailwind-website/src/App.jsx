import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Analytics from "./assets/components/Analytics";
import NewsLetter from "./assets/components/NewsLetter";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <NewsLetter />
        </div>
    );
}

export default App;
