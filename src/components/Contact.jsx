import React from 'react'
import '../App.css'
export default function Contact() {
    return (
        <section id="contact">
            <div className="contact">
                <h2>Contact me</h2>
                <div className="contact-text">
                    <form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact form">
                        <input type="hidden" name="access_key" value="1acce284-853e-4e36-9a7f-6d7dc9f63e2e" />
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" required={true} name="name"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@email.com" required={true} name="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Enter your message" required={true} name="message"/>
                        <button type="submit">Send</button>
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