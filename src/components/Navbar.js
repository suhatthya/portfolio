import React from "react";

const LINKS = ["Home", "About", "Works", "Skills", "Transcript", "Contact"];

export default function Navbar({ current, navigate }) {
    return (
        <header>
            <h1 className="logo">Portfolio</h1>
            <nav>
                {LINKS.map((l) => (
                    <button
                        key={l}
                        className={`nav-btn ${current === l ? "active" : ""}`}
                        onClick={() => navigate(l)}
                    >
                        {l}
                    </button>
                ))}
            </nav>
        </header>
    );
}