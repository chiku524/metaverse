import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CityWalk from '../images/City_walk.png';
import Gameroom from '../images/Gameroom.png';
import Skatepark from '../images/Skatepark.png';
import Nav from '../components/Nav';
import '../css/home.css';

const Home = () => {
    const [background, setBackground] = useState([CityWalk]);
    const [images] = useState([CityWalk, Gameroom, Skatepark]);
    const [bgClass, setBgClass] = useState('citywalk');

    const bgSwitcher = () => {
        if(background==images[0]){
            setBackground(images[1]);
            setBgClass('gameroom');
        }
        if(background==images[1]){
            setBackground(images[2]);
            setBgClass('skatepark');
        }
        if(background==images[2]){
            setBackground(images[0]);
            setBgClass('citywalk');
        }
    }

    return (
      <div className="home">
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
        <div className={bgClass} />
        <Nav />
        <div className='transition-btn' onClick={bgSwitcher}>
            <h3>CLICK HERE</h3>
        </div>
      </div>
    );
  }
  
  export default Home;
  