import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory 
    } = props;
    
    return (
        <header className="hero">
            <h1>Phil McGarty</h1>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
        </header>
    )
}

export default Header;