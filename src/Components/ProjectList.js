import React from "react";

export default function ProjectList({ projects }) {


    return <ul className="projects-list">
        {projects.map((item, index) =>{
            return <li key={index} className="project-img"><img src={item.img} alt="" /></li>
        })}
    </ul>
}