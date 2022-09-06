import React from "react";
import resume from "../assets/resume/Phil McGarty_Web Developer_Resume.pdf"
// resume page
function Resume() {
    // function to prevent page reload on button press - button doesn't do anything yet - will allow download of resume when backend added
    // function buttonClick(e) {
    //     e.preventDefault();
    //     console.log('Download')
    // };
    // lists backend and frontend competencies
    return (
        <>
            <h2>Resume</h2>

            <div className="row">
                <div className="col-md-3 col-sm-0"></div>
                <div className="col-md-3 col-sm-12">
                    <h3>Front-end Proficiencies</h3>
                    <ul className="skill-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Handlebars</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h3>Back-end Proficiencies</h3>
                    <ul className="skill-list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>mySQL</li>
                        <li>MongoDB</li>
                        <li>Sequelize</li>
                        <li>APIs</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-0"></div>
            </div>

            {/* resume download button - for future use */}
            <div className="download-btn">
                <a href={resume} download="Phil McGarty_Web Developer_Resume">
                    <button type="button">Download Resume</button>
                </a>
            </div>



        </>
    )
}

export default Resume;