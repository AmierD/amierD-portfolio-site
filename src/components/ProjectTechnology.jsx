import React from 'react'
import '../App.css'
export default function ProjectTechnology({ name, icon }) {
    return (
        <div className="project-card-technology">
            <img src={icon} alt={name} />
            <span>{name}</span>
        </div>
    )
}