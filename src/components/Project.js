import React from "react";

const Project = () => {

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
                {projects.map((project, i) => 
                <li className="projects col-sm-12 col-md-6 col-lg-4" key={i} style={{backgroundImage: "url("+require(`../assets/images/${i}.png`)}}>
                    <h3>
                        <a href={project.deployed} target="_blank" className="project-link align-middle">{project.name}</a>
                        <br/> 
                        <a href={project.repo} target="_blank">
                            <i className="fa fa-github project-icon"></i>
                        </a>
                    </h3>
                    {/* <img 
                        src={require(`../assets/images/${i}.png`)}
                        alt={project.name}
                        className="project-image"
                        key={project.name}
                    /> */}
                    
                    {/* <br/>
                    <a href={project.repo} target="_blank">{project.name} GitHub Repo</a> */}
                </li>)}
            </ul>
        </>
    )
}

export default Project;