import React, { useEffect } from "react";
// nav bar - inserted into header
function Navigation(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props
    // set page title based on current page
    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <ul>
            {/* loops through page categories to render links */}
            {categories.map((category) => (
                <li
                    className={`nav-links ${currentCategory.name === category.name && !contactSelected && 'nav-active'
                        }`}
                    key={category.name}
                >   
                    {/* sets category based on user input click */}
                    <span
                        onClick={() => {
                            setCurrentCategory(category)
                        }}
                    >
                        {category.name}

                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;