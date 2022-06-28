import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import CityWalk from '../images/City_walk.png';
import Gameroom from '../images/Gameroom.png';
import Skatepark from '../images/Skatepark.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CloseIcon from '@mui/icons-material/Close';
import {InView} from 'react-intersection-observer';
import '../css/home.css';

const Home = () => {
    const [background, setBackground] = useState([CityWalk]);
    const [images] = useState([CityWalk, Gameroom, Skatepark]);
    const [bgClass, setBgClass] = useState('citywalk');
    const [scrollbtn, setScrollbtn] = useState(false);
    const [aboutClass, setAboutClass] = useState('about w-0');
    const [wPos, setWPos] = useState('wPos-0');

    const onClickAbout = () => {
        if(bgClass=='citywalk'){setBgClass(`${bgClass} zoomIn-0`); setAboutClass('about w-0 expand');};
        if(bgClass=='skatepark'){setBgClass(`${bgClass} zoomIn-1`); setAboutClass('about w-1 expand1');};
        if(bgClass=='gameroom'){setBgClass(`${bgClass} zoomIn-2`); setAboutClass('about w-2 expand2');};
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
            setWPos('wPos-2');
        }
        if(background==images[1]){
            setBackground(images[2]);
            setBgClass('skatepark');
            setAboutClass('about w-1');
            setWPos('wPos-1');
        }
        if(background==images[2]){
            setBackground(images[0]);
            setBgClass('citywalk');
            setAboutClass('about w-0');
            setWPos('wPos-0');
        }
    }

    const escFunction = (event) => {
        if(event.key === "Escape") {onClickClose()};
    }

    document.addEventListener("keydown", escFunction, false);

    // const scroller = () => {
    //     if(document.querySelector(".textBox1") !== document.querySelector(".textBox1").) {
    //         document.querySelector(".scroller").classList.add("active");
    //         console.log('i made it');
    //     }
    //     // console.log(document.querySelector(".scroller").classList);
    // }

    // document.addEventListener("wheel", scroller);
    
    const people = [
        {person: 'steve', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'pete', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
        {person: 'nico', profilepic: CityWalk, title: 'engineer/blockchain enthusiast'},
    ]

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
        <div className={wPos}>
            <div className={aboutClass}>
                { aboutClass.includes('expand') ? (<div className='aboutTextContainer'>
                    <div className='mininav'>
                        <a href="#team" className="scroller">|</a>
                        <a href="#team1" className="scroller1">|</a>
                        <a href="#team2" className="scroller2">|</a>
                        <a href="#team3" className="scroller3">|</a>
                    </div>
                    <div className='textboxes'>
                        <div id='team' className='xtraspace' />
                        <InView threshold={0.7} onChange={(InView, entry) => InView ? document.querySelector(".scroller").classList.add("active") : document.querySelector(".scroller").classList.remove("active")}>
                            <div className='textBox1'>
                                <h4>Meet the crew</h4>
                                <div className='crew'>
                                    {people.map((employee) => <div className='person'>
                                        <img className='profilepic' src={employee.profilepic} />
                                        <div className='title'>
                                            <p>{employee.person}</p>
                                            <p>{employee.title}</p>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </InView>
                        <div id='team1' className='xtraspace' />
                        <InView threshold={0.7} onChange={(InView, entry) => InView ? document.querySelector(".scroller1").classList.add("active") : document.querySelector(".scroller1").classList.remove("active")}>
                            <div className='textBox'>
                                <h4>other</h4>
                            </div>
                        </InView>
                        
                        <div id='team2' className='xtraspace' />
                        <InView threshold={0.7} onChange={(InView, entry) => InView ? document.querySelector(".scroller2").classList.add("active") : document.querySelector(".scroller2").classList.remove("active")}>
                            <div className='textBox'>
                                <h4>other</h4>
                            </div>
                        </InView>
                        <div id='team3' className='xtraspace' />
                        <InView threshold={0.7} onChange={(InView, entry) => InView ? document.querySelector(".scroller3").classList.add("active") : document.querySelector(".scroller3").classList.remove("active")}>
                            <div className='textBox'>
                                <h4>other</h4>
                            </div>
                        </InView>
                    </div>
                </div>) : <div className='aboutTextContainer zero-opacity' style={{opacity: 0}}>
                    <div className='mininav'>
                        <a href="#team"><h4>MEET THE TEAM</h4></a>
                        <a href="#team1"><h4>OTHER</h4></a>
                        <a href="#team2"><h4>MORE OTHER</h4></a>
                        <a href="#team3"><h4>AND MORE OTHER</h4></a>
                    </div>
                    <div className='textboxes'>
                        <div id='team' className='xtraspace' />
                        <div className='textBox1'>
                            <h4>Meet the crew</h4>
                            <div className='crew'>
                                {people.map((employee) => <div className='person'>
                                    <img className='profilepic' src={employee.profilepic} />
                                    <div className='title'>
                                        <p>{employee.person}</p>
                                        <p>{employee.title}</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div id='team1' className='xtraspace' />
                        <div className='textBox'>
                            <h4>other</h4>
                        </div>
                        <div id='team2' className='xtraspace' />
                        <div className='textBox'>
                            <h4>more other</h4>
                        </div>
                        <div id='team3' className='xtraspace' />
                        <div className='textBox'>
                            <h4>and more other</h4>
                        </div>
                    </div>
                </div> }
                <div className='exit'>
                    <CloseIcon onClick={onClickClose}/>
                </div>
            </div>
        </div>
        <div className='transition-btn' onClick={bgSwitcher}>
            <h3>CLICK HERE</h3>
        </div>
      </div>
    );
}
  
  export default Home;
  