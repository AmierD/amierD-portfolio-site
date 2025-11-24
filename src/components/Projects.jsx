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
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
                
            </div>
        </section>
    )
}