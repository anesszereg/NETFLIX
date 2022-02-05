import React from 'react';
import'./Navbar.css'
import Image from './logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return <div className="navbar">
            <a href=""><img src={Image}
                    alt=""
                    className="logo"/></a>
            <div className="left">

                <ul className="left">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/TVShow">TV Show</Link>
                    </li>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/Latest">Latest</Link>
                    </li>
                    <li>
                        <Link to="/MyList">My List</Link>
                    </li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder='search'/>


            </div>
        </div>


  
}

export default Navbar;
