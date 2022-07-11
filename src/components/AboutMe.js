import React from "react";
import Avatar from '../assets/images/AvatarMaker.svg';

function AboutMe () {
    return (
        <>
            <h2>About Me</h2>
            <p className="about-me-text">
                I'm a web developer based in Ottawa, Canada. 
                What started out as a hobby - tinkering with Python, and creating websites using HTML has turned into an exciting career. 
                Coding allows me to combine the rule following of my legal career, and the creativity of my media training to produce some incredible websites.
            </p>
            {/* avatar style image */}
            <img className="avatar-image" src={Avatar} alt="Web Developer Phil McGarty"/>
        </>   
    )
}

export default AboutMe;