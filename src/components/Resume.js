import React from "react";
// resume page
function Resume () {
    // function to prevent page reload on button press - button doesn't do anything yet - will allow download of resume when backend added
    function buttonClick(e){
        e.preventDefault();
        console.log('Download')
    };
    // lists backend and frontend competencies
    return (
        <>
            <h2>Resume</h2>
            {/* resume download button - for future use */}
            <p>Download a copy of my resume <button type="submit" onClick={buttonClick}>Download Resume</button></p>
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
        </>       
    )
}

export default Resume;