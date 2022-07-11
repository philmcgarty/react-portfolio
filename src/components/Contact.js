// code copied from module

import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

function ContactForm(){
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

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

    console.log(formState)

    
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h2>Contact me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="input-box" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br/>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} className="input-box" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br/>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className="input-area" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );

}

export default ContactForm;