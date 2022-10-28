import React from "react"

export default function Sidebar(){
    return(
        <nav className="Sidenav">
            <div className="container">
                <h2 className="Sidebartitle">Vaccine Type</h2>
                <div className="hover-div">
                    <ul className="Siderbaritems">
                        <li><a href="#">Sinovac</a></li>
                        <li><a href="#">Oxford</a></li>
                        <li><a href="#">Pfizer</a></li>
                        <li><a href="#">Moderna</a></li>
                        <li><a href="#">Johnson</a></li>
                        <li><a href="#">CanSino</a></li>
                        <li><a href="#">Novavax</a></li>
                        <li><a href="#">Sinopharm</a></li>
                        <li><a href="#">Cavanxin</a></li>
                        <li><a href="#">Sputnik V</a></li>
                    </ul>
                </div>
            </div>    

        </nav>
    )
}