import React from "react";

const Navbar = (props) => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
        <span className="navbar-text">
            Start Bootstrap
        </span>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
            </li>
            
            <li className="nav-item navbar-rigth">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        <span className="navbar-text">
      Navbar text with an inline element
    </span>
    </div>
    </nav>
    )
}

export default Navbar

