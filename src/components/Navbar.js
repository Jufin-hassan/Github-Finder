import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=> {
   
        return (
            <nav>
            
                <h1><span><i className="fab fa-github"></i></span>Github Finder</h1>
                <ul>
                    <li>
                        <Link className="navLink" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    
}

export default Navbar
