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
        <header className="hero row">
            <div className="col-md-4">
                <h1>Phil McGarty</h1>
            </div>
            <div className="col-md-8">
                {/* return nav links */}
                <Navigation
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                />
            </div>

        </header>
    )
}

export default Header;