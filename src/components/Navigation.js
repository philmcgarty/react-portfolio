import React, { useEffect } from "react";

function Navigation(props){
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props
    
    useEffect(()=>{
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <ul>
            {categories.map((category)=> (
                <li
                    className={currentCategory.name }
                    key={category.name}
                >
                    <span
                        onClick={()=>{
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