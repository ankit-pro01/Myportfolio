import React from "react";
import "./About.css"

import avatar from "../../../../assets/avatar/avatar.jpg"

export default function About(params) {
    return(
    <div className="About">
        <div className = "Header">
            <h1>About <span>Me</span></h1>
            <p>this is something about me.</p>
        </div>
        <img className = "Avatar" src = {avatar} />
        <div className = "Bio">
            <h3>BIO</h3>
            <p>Qui anim qui adipisicing dolore dolor dolor ipsum aliqua ad ut anim. Aute consectetur do ea elit enim nulla. Labore quis incididunt amet officia consequat officia et et. Ea eiusmod velit aliqua deserunt magna anim sint. Duis aute pariatur consectetur labore culpa.</p>
            <p>Pariatur in proident consequat ex esse eiusmod magna amet elit magna tempor. Fugiat consequat reprehenderit ullamco duis adipisicing enim ut Lorem anim reprehenderit labore minim ad do. Id fugiat quis nulla mollit.</p>
        </div>

        <div className = "Job Job1">
            <h4>Work1</h4>
            <p>Dolore nisi anim officia ex quis nostrud velit sunt est enim. Voluptate excepteur est est labore do quis consectetur consequat veniam. Officia esse reprehenderit eiusmod proident sint anim adipisicing laboris exercitation aliqua et. Dolor et ea dolore nisi dolore pariatur aliquip reprehenderit do non ea velit minim.</p>

        </div>
        <div className = "Job Job2">
        <h4>Work2</h4>
            <p>Dolore nisi anim officia ex quis nostrud velit sunt est enim. Voluptate excepteur est est labore do quis consectetur consequat veniam. Officia esse reprehenderit eiusmod proident sint anim adipisicing laboris exercitation aliqua et. Dolor et ea dolore nisi dolore pariatur aliquip reprehenderit do non ea velit minim..</p>

        </div>    
        <div className = "Job Job3">
        <h4>Work3</h4>
            <p>Dolore nisi anim officia ex quis nostrud velit sunt est enim. Voluptate excepteur est est labore do quis consectetur consequat veniam. Officia esse reprehenderit eiusmod proident sint anim adipisicing laboris exercitation aliqua et. Dolor et ea dolore nisi dolore pariatur aliquip reprehenderit do non ea velit minim.</p>

        </div>        
    </div>
    )
}