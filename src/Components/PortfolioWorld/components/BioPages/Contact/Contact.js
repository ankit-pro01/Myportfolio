import React from "react";
import "./Contact.css"

import { useForm } from "react-hook-form";


export default function Contact({setPage}) {   
    const { register, errors, handleSubmit, reset } = useForm();

    const handleData = (data) => {
        console.log(data);
        reset()
    }
    
    return (
        <div className = "Contact3D">
            <div className = "Contact3D-Content">
            <h2>Contact <span>Me</span></h2>
                <div>
                    <div className = "form3D" >
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
        
                        <p><button className = "Form3dButton" onClick = {handleSubmit(handleData)}>&#128640;</button></p>

                    </div>
                </div>
            
            <button className = "Contact3Dbutton" onClick = {() => setPage({"contact": false})}>Close</button>

            </div>

           
        </div>
    )
}