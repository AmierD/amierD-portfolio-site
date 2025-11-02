import React from 'react'
import '../App.css'
import { svgs } from '../assets/svgs.jsx';
export default function Hero({ resumePath }) {
    return (
        <section id="hero">
            <div className="hero">
                {/* Add background image/video */}
                <h1>
                    Computer Science <br />
                    Student. Former <br />
                    Google Intern.
                </h1>
                {/* TODO: add about me button */}
                <div className="hero-buttons">
                    <a href={resumePath} target="_blank" rel="noopener noreferrer">
                        Download Resume
                        {svgs.find((svg) => svg.name === "download").svg()}
                    </a>
                    <a href="#projects" rel="noopener noreferrer">
                        View Projects
                        {svgs.find((svg) => svg.name === "arrow-down-right").svg()}
                    </a>
                </div>
            </div>
        </section>
    )
}