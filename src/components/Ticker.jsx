import React from 'react'
import '../App.css'

const accolades = [
    "Tutor | TA | Mentor",
    "CS: AI/ML @ Hampton University | Deans List",
    "Ex-Intern @ Google | Android XR",
    "Amazon Guides Mentee",
];

export default function Ticker() {
    return (
        <div className="ticker-track">
            {accolades.map((accolade, index) => (
                <div key={index} className="ticker-element">{accolade}</div>
            ))}
            {accolades.map((accolade, index) => (
                <div key={index} className="ticker-element" aria-hidden="true">{accolade}</div>
            ))}
        </div>
    )
}