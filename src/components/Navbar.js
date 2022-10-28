import React from "react"

export default function Navbar(){
    return(
        <nav className="NavBar">
            <img src = {require("../images/vaccine_logo.jpeg")} alt='' className="Logo" />
            <h1 className="Navtitle">World Covid-19 Vaccination Injection Map by Brand</h1>
            
        </nav>
    )
}