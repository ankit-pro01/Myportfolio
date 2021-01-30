import React from "react"

import "./Contact.css";

import { useForm } from "react-hook-form";


function Contact() {
    const { register, errors, handleSubmit, reset } = useForm();

    const handleData = (data) => {
        console.log(data);
        reset()
    }

    console.log(errors)


  return (
    <div className = "Contact">
        <h1>Contact <span>Me</span></h1>
        <div className = "form" >

            <div className = "inline">
                <p><input name = "userName" 
                type = "text" 
                placeholder = "Full Name"
                ref={register({ required: true })}/></p>

                <p className = "errors">{errors.userName && "Name is required"}</p>

            </div>

            <div className = "inline">
                <p><input name = "email" 
                type = "email" 
                placeholder = "Email"
                ref={register({ required: true })}></input></p>

                <p className = "errors">{errors.email && "Email is required"}</p>

            </div>

            <div>
                <p><textarea  
                name = "message" rows="10" cols="50" 
                placeholder = "Message"
                ref={register({ required: true })}></textarea ></p>
                <p className = "errors">{errors.message && "message is required"}</p>

            </div>
    
            <p><button onClick = {handleSubmit(handleData)}>Send</button></p>
        </div>

    </div>
  )
}

export default Contact;

