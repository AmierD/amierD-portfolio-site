import React, { useState } from 'react'
import '../App.css'
import { svgs } from '../assets/svgs.jsx';
export default function Contact() {
    const [isValid, setIsValid] = useState(false);
    const handleChange = () => {
        if (document.getElementById('name').value.length > 0 && document.getElementById('email').value.length > 0 && document.getElementById('message').value.length > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }
    return (
        <section id="contact">
            <div className="contact">
                <h2>Connect</h2>
                <div className="contact-text">
                    <form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact form">
                        <input type="hidden" name="access_key" value="1acce284-853e-4e36-9a7f-6d7dc9f63e2e" />
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Enter your name" required={true} name="name" onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="example@email.com" required={true} name="email" onChange={handleChange}/>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message" required={true} name="message" onChange={handleChange}/>
                        <button type="submit" disabled={!isValid}>
                            Send
                            {svgs.find((svg) => svg.name === "send").svg()}
                        </button>
                    </form>
                </div>
                {/* 
                    TODO: add the following links:
                        - Calendly link to schedule meeting with me
                        - Email link
                        - LinkedIn link
                        - Github link
                */}
            </div>
        </section>
    )
}