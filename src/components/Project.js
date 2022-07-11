import React from "react";
// returns project tiles to portfolio
const Project = () => {
    // project array used to create tiles
    const projects= [
        {
            name: 'Home Garden Manager',
            deployed: "https://warm-harbor-34559.herokuapp.com/",
            repo: "https://github.com/SierraDavis2000/Home-Garden-Manager"
        },
        {
            name: 'BBQ Boss',
            deployed: "https://philmcgarty.github.io/bbq/",
            repo: "https://github.com/philmcgarty/bbq"
        },
        {
            name: 'Weather Dashboard',
            deployed: "https://philmcgarty.github.io/weather/",
            repo: "https://github.com/philmcgarty/weather"
        },
        {
            name: 'Horiseon',
            deployed: "https://philmcgarty.github.io/horiseon/",
            repo: "https://github.com/philmcgarty/horiseon"
        },
        {
            name: 'Robot Gladiators',
            deployed: "https://philmcgarty.github.io/robot-gladiators/",
            repo: "https://github.com/philmcgarty/robot-gladiators"
        },
        {
            name: 'Run Buddy',
            deployed: "",
            repo: "https://github.com/philmcgarty/run-buddy"
        },
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