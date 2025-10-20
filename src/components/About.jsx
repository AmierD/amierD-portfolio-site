import React from 'react'
import '../App.css'
import headshotPhoto from '../assets/headshotPhoto.png'
export default function About() {
    return (
        <section id="about">
            <div className="about">
                <h2>About</h2>
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
                        &emsp;&emsp;Amier Davis is a student at Hampton University studying Computer Science
                        with a focus in Artificial Intelligence & Machine Learning. At Hampton, he is a 
                        TA, Tutor, and mentor to first-year students in the Computer Science department. He is also
                        active on campus in the Association of Computing Machinery (ACM), Cyber Club, and the Student Film Organization.
                        <br />
                        <br />
                        &emsp;&emsp;This past summer, Amier had the opportunity to be a Software Developer Intern at
                        Google where he worked on the Android XR team with prototype glasses hardware.
                        Working in collaboration with another intern, he implemented two new AI-powered
                        user journeys and presented them to company stakeholders, directors, and senior
                        engineers.
                        <br />
                        <br />
                        &emsp;&emsp;Outside of school and work, Amier enjoys creating content and music, taking 
                        photos, and working on various personal projects, solving problems with software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}