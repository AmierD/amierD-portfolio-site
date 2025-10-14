import React from 'react'
import '../App.css'
import Ticker from './Ticker'
export default function Navbar() {
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar-left">
                    <a href="#hero" className="nav-link">Amier Davis</a>
                </div>
                <div className="nav-bar-right">
                    <a href="https://github.com/amierd" className="nav-link" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="http://linkedin.com/in/amierdavis/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="/src/assets/AmierDResume091025.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
                    {/* TODO: add hamburger menu */}
                </div>
            </nav>
            <div className="ticker">
                <Ticker />
            </div>
        </>
    )
}