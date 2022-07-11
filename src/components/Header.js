import React from "react";
import Navigation from "./Navigation";
// header section
function Header(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory 
    } = props;
    
    return (
        <header className="hero">
            <h1>Phil McGarty</h1>
            {/* return nav links */}
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
        </header>
    )
}

export default Header;