import React from 'react';
import {Link} from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import '../css/nav.css';

const Nav = () => {

    return (
        <div className='navbar'>
            <Link to='/home/' className='home-btn'>
                <HomeRoundedIcon className='home-icon'/>
            </Link>
            <Link to='/about/' className='item'>
                <h4>ABOUT</h4>
            </Link>
            <Link to='/roadmap/' className='item'>
                <h4>ROADMAP</h4>
            </Link>
            <Link to='/savology/' className='item'>
                <h4>SAVOLOGY</h4>
            </Link>
            <Link to='/store/' className='item'>
                <h4>STORE</h4>
            </Link>
            <Link to='/about/' className='home-btn-row'>
                <div className='home-trio'>
                    <HomeRoundedIcon className='home-icon'/>
                    <HomeRoundedIcon className='home-icon'/>
                    <HomeRoundedIcon className='home-icon'/>
                </div>
            </Link>
            <Link to='/about/' className='home-btn'>
                <HomeRoundedIcon className='home-icon'/>
            </Link>
        </div>
    )
}

export default Nav;