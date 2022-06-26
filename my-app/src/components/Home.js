import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CityWalk from '../images/City_walk.png';
import Gameroom from '../images/Gameroom.png';
import Skatepark from '../images/Skatepark.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CloseIcon from '@mui/icons-material/Close';
import '../css/home.css';

const Home = () => {
    const [background, setBackground] = useState([CityWalk]);
    const [images] = useState([CityWalk, Gameroom, Skatepark]);
    const [bgClass, setBgClass] = useState('citywalk');
    const [clicked, setClicked] = useState(false);
    const [aboutClass, setAboutClass] = useState('about');
    const [fullClass, setFullClass] = useState('full');

    const onClickAbout = () => {
        if(bgClass=='citywalk'){setBgClass(`${bgClass} zoomIn-0`); setAboutClass('about w-0 expand');};
        if(bgClass=='skatepark'){setBgClass(`${bgClass} zoomIn-1`); setAboutClass('about w-1 expand');};
        if(bgClass=='gameroom'){setBgClass(`${bgClass} zoomIn-2`); setAboutClass('about w-2 expand');};
    }
    const onClickClose = () => {
        if(bgClass=='citywalk zoomIn-0'){setBgClass('citywalk'); setAboutClass('about w-0');}
        if(bgClass=='skatepark zoomIn-1'){setBgClass('skatepark'); setAboutClass('about w-1');}
        if(bgClass=='gameroom zoomIn-2'){setBgClass('gameroom'); setAboutClass('about w-2');}
    }

    const bgSwitcher = () => {
        if(background==images[0]){
            setBackground(images[1]);
            setBgClass('gameroom');
            setAboutClass('about w-2');
        }
        if(background==images[1]){
            setBackground(images[2]);
            setBgClass('skatepark');
            setAboutClass('about w-1');
        }
        if(background==images[2]){
            setBackground(images[0]);
            setBgClass('citywalk');
            setAboutClass('about w-0');
        }
    }



    return (
      <div className="home">
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
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
                <CloseIcon onClick={onClickClose}/>
            </div>
        </div>
        <div className='transition-btn' onClick={bgSwitcher}>
            <h3>CLICK HERE</h3>
        </div>
      </div>
    );
}
  
  export default Home;
  