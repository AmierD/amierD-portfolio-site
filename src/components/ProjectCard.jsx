import React from 'react'
import ProjectTechnology from './ProjectTechnology.jsx';
import '../App.css'
export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            {/* TODO: Add "Learn More" button? */}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <div className="project-card-technology-container">
                {project.technologies.map((tech) => (
                    <ProjectTechnology
                        name={tech.name}
                        icon={tech.icon}
                    />
                ))}
            </div>
        </article>
    )
}