import React from "react";

function Resume () {

    function buttonClick(e){
        e.preventDefault();
        console.log('Download')
    };

    return (
        <>
            <h2>Resume</h2>
            <p>Download a copy of my resume <button type="submit" onClick={buttonClick}>Download Resume</button></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Handlebars</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
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