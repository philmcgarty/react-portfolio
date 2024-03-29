// code copied from module

import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';


// contact form
function ContactForm(){
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // error handling for form
    function handleChange(e) {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if (!isValid){
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length){
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    //console.log(formState)

    // submit button handler
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h2>Contact me</h2>

            <div>
                <a href="mailto: philipmcgarty@gmail.com"><i className="fa fa-solid fa-envelope email-icon"></i></a>                
                
            </div>
            <div>
                <span className="email-add-text">philipmcgarty@gmail.com</span>
            </div>


            {/* <form id="contact-form" onSubmit={handleSubmit}> */}
                {/* name input */}
                {/* <div>
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="input-box" />
                </div>
                <div> */}
                    {/* email input */}
                    {/* <label htmlFor="email">Email address:</label>
                    <br/>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} className="input-box" />
                </div>
                <div> */}
                    {/* message input */}
                    {/* <label htmlFor="message">Message:</label>
                    <br/>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className="input-area" />
                </div> */}
                {/* {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} */}
                {/* submit button */}
                {/* <button data-testid="button" type="submit">Submit</button>
            </form> */}
        </section>
    );

}

export default ContactForm;