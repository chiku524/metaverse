import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CloseIcon from '@mui/icons-material/Close';
import '../css/nav.css';

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const [aboutClass, setAboutClass] = useState('about');
    const [fullClass, setFullClass] = useState('full');

    const onClickAbout = () => {
        if(clicked){setClicked(false); setAboutClass('about'); setFullClass('full')};
        if(!clicked){setClicked(true); setAboutClass('about zoom'); setFullClass('full zoomed')};
    }

    console.log(clicked);

    return (
        <div className={fullClass}>
            <div className='navbar'>
                <Link to='/home/' className='home-btn'>
                    <HomeRoundedIcon className='home-icon'/>
                </Link>
                <Link to='/about/' className='item' onClick={onClickAbout}>
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
            <div className={aboutClass}>
                <div className='exit'>
                    <CloseIcon onClick={onClickAbout}/>
                </div>
            </div>
        </div>
    )
}

export default Nav;