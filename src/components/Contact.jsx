import React from 'react'
import '../App.css'
export default function Contact() {
    return (
        <section id="contact">
            <div className="contact">
                <div className="contact-text">
                    <h2>Contact</h2>
                    {/* TODO: add form API to send email */}
                    {/* TODO: fix typing in form only allows 1 character then crashes site */}
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}