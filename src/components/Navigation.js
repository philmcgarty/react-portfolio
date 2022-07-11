import React, { useEffect } from "react";

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <ul>
            {categories.map((category) => (
                <li
                    className={`nav-links ${currentCategory.name === category.name && !contactSelected && 'nav-active'
                        }`}
                    key={category.name}
                >
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