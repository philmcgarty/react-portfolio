import React from "react";
// returns project tiles to portfolio
const Project = () => {
    // project array used to create tiles
    const projects= [
        {
            name: 'SquabbleHub',
            deployed: "https://mighty-meadow-52025.herokuapp.com/",
            repo: "https://github.com/philmcgarty/squabblehub",
            tech: "React, CSS, JavaScript, MongoDB",
            desc: "A social media site to debate which is better, the book v the movie!"
        },
        {
            name: 'Home Garden Manager',
            deployed: "https://warm-harbor-34559.herokuapp.com/",
            repo: "https://github.com/philmcgarty/Home-Garden-Manager",
            tech: "HTML, CSS, JavaScript, MySQL, Handlebars",
            desc: "Easy look up instructions for caring for your plants, and use the logging tool to remind you when watering is needed. Add your plant knowledge to our database!"
        },
        {
            name: 'Quizify',
            deployed: "https://philmcgarty.github.io/quizify/",
            repo: "https://github.com/philmcgarty/quizify",
            tech: "JavaScript, HTML, CSS",
            desc: "Complete for the best score by testing your JavaScript knowledge in this quick quiz."
        },
        {
            name: 'Weather Dashboard',
            deployed: "https://philmcgarty.github.io/weather/",
            repo: "https://github.com/philmcgarty/weather",
            tech: "JavaScript, HTML, CSS, 3rd Party APIs",
            desc: "Want to know the weather for the next few days? Use this simple tool to view the weather where you are."
        },
        {
            name: 'Tech Blog',
            deployed: "https://murmuring-island-53348.herokuapp.com/",
            repo: "https://github.com/philmcgarty/tech-blog",
            tech: "HTML, CSS, JavaScript, MySQL",
            desc: "A mini blogging site to share information and thoughts with your tech peers."
        },        
        {
            name: 'BBQ Boss',
            deployed: "https://philmcgarty.github.io/bbq/",
            repo: "https://github.com/philmcgarty/bbq",
            tech: "JavaScript, HTML, CSS, 3rd Party APIs",
            desc: "If you want to organize a BBQ party, then this is the app for you!"
        }
    ]

    return(
        <>
            <ul className="row mt-3">
                {/* loops through project array to render tiles */}
                {projects.map((project, i) => 
                // sets background image
                <li className="projects col-sm-12 col-md-6 col-lg-4" key={i} >
                    <h3 style={{backgroundImage: "url("+require(`../assets/images/${i}.png`)}}>
                        {/* link to deployed project */}
                        <a href={project.deployed} target="_blank" className="project-link align-middle">{project.name}</a>
                        <br/> 
                        {/* link to repo */}
                        <a href={project.repo} target="_blank">
                            <i className="fa fa-github project-icon"></i>
                        </a>
                    </h3>
                    <div className="desc">
                        {project.desc}
                    </div>
                    <div className="tech">
                        {project.tech}
                    </div>                    
                </li>)}
            </ul>
        </>
    )
}

export default Project;