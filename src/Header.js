import React from 'react';
import "./Header.css";
import logo from './logo.png';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallIcon from '@mui/icons-material/LocalMall';
function Header() {
  return (
    <div className="header">
        <img className="header_logo" src={logo} alt='logo'/>
        <div className="header_search">
            
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="options">Auction</span>
                <LocalMallIcon className="header_auction" />
            </div>
            <Link to='/login'><div className="header_option">
                <span className="options">Log in</span>
                <LoginIcon className="header_Login" />
            </div></Link>
        </div>
    </div>
  )
}

export default Header
