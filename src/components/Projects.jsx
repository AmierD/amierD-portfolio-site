import React from 'react'
import '../App.css'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects.js';
export default function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                <h2>Projects</h2>
                <div className="project-card-container">
                    <ProjectCard key={projects[0].id} project={projects[0]} />
                    <ProjectCard key={projects[1].id} project={projects[1]} />
                </div>
                
            </div>
        </section>
    )
}