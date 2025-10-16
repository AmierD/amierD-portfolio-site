import React from 'react'
import '../App.css'
import headshotPhoto from '../assets/headshotPhoto.png'
export default function About() {
    return (
        <section id="about">
            <div className="about">
                <h2>About me</h2>
                {/* TODO:
                    - Make each paragraph of the about bio be its own "slide"
                    with a button to go to the next/previous slide
                    - each slide with a different photo/collage along with the blurb
                */}
                <div className="about-content">
                    {/* TODO: add scrolling collage of photos instead of headshot photo */}
                    <img src={headshotPhoto} alt="About me" />
                    {/* TODO: add colored/bolded/italicized text, make text more personable instead of just descriptive */}
                    <div className="about-text">
                        <p>
                        &emsp;&emsp;Hi, I'm Amier! I am a student at Hampton University studying Computer Science
                        with a focus in Artificial Intelligence & Machine Learning. At Hampton I am a 
                        TA, Tutor, and mentor to first-year students in the CS department. I am also
                        active on campus in the ACM, Cyber Club, and the Student Film Organization.
                        <br />
                        <br />
                        &emsp;&emsp;This past summer, I had the opportunity to be a Software Developer Intern at
                        Google where I worked on the Android XR team with prototype glasses hardware.
                        Working collaboratively with another intern, I implemented two new AI-powered
                        user journeys and presented the features to company stakeholders, directors,
                        and senior engineering managers.
                        <br />
                        <br />
                        &emsp;&emsp;Outside of school and work, I enjoy creating content and music, taking 
                        photos, and working on personal projects solving problems with software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}