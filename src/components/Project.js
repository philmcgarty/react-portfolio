import React from "react";
// returns project tiles to portfolio
const Project = () => {
    // project array used to create tiles
    const projects= [
        {
            name: 'SquabbleHub',
            deployed: "https://mighty-meadow-52025.herokuapp.com/",
            repo: "https://github.com/philmcgarty/squabblehub"
        },
        {
            name: 'Home Garden Manager',
            deployed: "https://warm-harbor-34559.herokuapp.com/",
            repo: "https://github.com/philmcgarty/Home-Garden-Manager"
        },
        {
            name: 'Quizify',
            deployed: "https://philmcgarty.github.io/quizify/",
            repo: "https://github.com/philmcgarty/quizify"
        },
        {
            name: 'Weather Dashboard',
            deployed: "https://philmcgarty.github.io/weather/",
            repo: "https://github.com/philmcgarty/weather"
        },
        {
            name: 'Tech Blog',
            deployed: "https://murmuring-island-53348.herokuapp.com/",
            repo: "https://github.com/philmcgarty/tech-blog"
        },
        
        {
            name: 'BBQ Boss',
            deployed: "https://philmcgarty.github.io/bbq/",
            repo: "https://github.com/philmcgarty/bbq"
        }
    ]

    return(
        <>
            <ul className="row mt-3">
                {/* loops through project array to render tiles */}
                {projects.map((project, i) => 
                // sets background image
                <li className="projects col-sm-12 col-md-6 col-lg-4" key={i} style={{backgroundImage: "url("+require(`../assets/images/${i}.png`)}}>
                    <h3>
                        {/* link to deployed project */}
                        <a href={project.deployed} target="_blank" className="project-link align-middle">{project.name}</a>
                        <br/> 
                        {/* link to repo */}
                        <a href={project.repo} target="_blank">
                            <i className="fa fa-github project-icon"></i>
                        </a>
                    </h3>
                </li>)}
            </ul>
        </>
    )
}

export default Project;