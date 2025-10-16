import React from 'react'
import ProjectTechnology from './ProjectTechnology.jsx';
import '../App.css'
export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            {/* TODO: Add "Learn More" button that expands to a full article of the project? */}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-card-technology-container">
                {project.technologies.map((tech) => (
                    <ProjectTechnology
                        name={tech.name}
                        icon={tech.icon}
                    />
                ))}
            </div>
            {/* TODO: Add github logo to button */}
            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </article>
    )
}