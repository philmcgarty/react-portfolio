import React from "react";
import Avatar from '../assets/images/AvatarMaker.svg';
// About Me section
function AboutMe() {
    return (
        <>
            <h2>About Me</h2>
            <div className="row">
                <div className="col-lg-1 col-sm-0"></div>
                <div className="col-lg-3 col-sm-12">
                    {/* avatar style image */}
                    <img className="avatar-image float-center" src={Avatar} alt="Web Developer Phil McGarty" />
                </div>
                <div className="col-lg-7 col-sm-12">
                    <p className="about-me-text">
                        Full-stack web developer switching from a career in the legal services industry.
                        Completed an intensive 6 month web development course with Carleton University Coding Bootcamp.
                        A highly adaptable, quick learner with a methodical approach, and passion for creative problem solving.
                        Latest project was a team collaboration to create a social media platform for users to debate whether a book is better than its movie counterpart.
                    </p>
                </div>
                
                <div className="col-lg-1 col-sm-0"></div>
            </div>


        </>
    )
}

export default AboutMe;