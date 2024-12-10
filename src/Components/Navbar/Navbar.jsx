import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../utilities.css'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    return (
            <div className = 'flex flex-space-between navbar-container'>
                <a href = '/'>
                <img src = '' alt = 'Website Logo' />
                </a>

                <div className = 'flex flex-left'>
                    <form className = 'flex flex-center'>
                        <input type = 'text' className = 'search-bar' />
                        <button type = 'submit' className = 'clear'>
                            <SearchIcon />
                        </button>
                    </form>

                    <nav>
                      <Link to="/newsletter" className = 'navbar-link'>Newsletter</Link>
                      <Link to="/questions" className = 'navbar-link'>Questions</Link>
                      <Link to="/practice" className = 'navbar-link'>Practice</Link>
                      <Link to="/roadmap" className = 'navbar-link'>Roadmap</Link>
                      <Link to="/register" className = 'navbar-link'>Register</Link>
                    </nav>

                </div>
            </div>
        )

    };

export default Navbar;