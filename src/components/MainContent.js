import React, { useState } from "react";
import AboutMe from './AboutMe'
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
// main body of page - returns selected element
function MainContent (props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props
    
    console.log(currentCategory)
    // conditional to return correct element/page based on navbar click
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