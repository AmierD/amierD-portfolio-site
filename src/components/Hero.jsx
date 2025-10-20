import React from 'react'
import '../App.css'
export default function Hero({ resumePath }) {
    return (
        <section id="hero">
            <div className="hero">
                {/* Add background image */}
                <h1>
                    Computer Science <br />
                    Student. Former <br />
                    Google Intern.
                </h1>
                {/* TODO: add about me button */}
                <div className="hero-buttons">
                    <a href={resumePath} target="_blank" rel="noopener noreferrer">
                        Download Resume
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-color)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 3V17M12 17L6 11M12 17L18 11M3 21H21" stroke="var(--text-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                    <a href="#projects" rel="noopener noreferrer">
                        View Projects
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-color)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18.5 18.5L5.5 5.5M18.5 18.5H8.5M18.5 18.5V8.5" stroke="var(--text-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}