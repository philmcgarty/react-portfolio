import React, { useState } from "react";
import AboutMe from './AboutMe'
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function MainContent (props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props
    
    console.log(currentCategory)

    let mainSection = function(){
        if (currentCategory.name === 'Portfolio') {
            return <Portfolio />
        } else if (currentCategory.name === 'Contact') {
            return <Contact />
        } else if (currentCategory.name === 'Resume') {
            return <Resume />
        } else {
            return <AboutMe />
        }
    }
    

    return (
        <div>
            {/* <p>Your current page is {currentCategory.name}</p> */}
            {mainSection()}
        </div>
    )
}

export default MainContent;