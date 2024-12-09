import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
                    <p>Questions</p>
                    <p>Practice</p>
                    <p>Newsletter</p>
                    <p>Roadmap</p>
                    <p>Register</p>
                </div>
            </div>
        )

    };
export default Navbar;