import React from 'react';
import logo from "./images/cat.jpg"

const Navbar = () => {
  return (
        <header>
            <div className='navigation'>
                <div className='container'>
                    <div className='navbar'>
                        <div className='logo_con'>
                            <a href="#">
                                <img src={logo} alt="logo"/>
                            </a>
                            <span className='toggle_box'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <ul className="menu">
                            <li><a href="#"><span>Let's Go</span> Home</a></li>
                            <li><a href="#"><span>Overnight</span> Boarding</a></li>
                            <li><a href="#"><span>Meet The</span> Team</a></li>
                            <li><a href="#"><span>Visit The </span>Gallery</a></li>
                            <li><a href="#"><span>Learn More</span> About</a></li>
                            <li><a href="#"><span>Let's Chat</span> Contact</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>



    // <nav className="nav">
     
      /* <ul>
        <li className='left'>
          <a href="/home"><span>Let's Go</span> Home</a>
        </li>
        <li className='left'>
          <a href="/boarding"><span>Overnight</span> Boarding</a>
        </li>
        <li className='left'>
          <a href="/team"><span>Meet The</span> Team</a>
        </li>
        <div className="site-title">
        <img src={logo} alt="logo"></img>
      </div>
        <li className='right'>
          <a href="/about"><span>Learn More</span> About</a>
        </li>
        <li className='right'>
          <a href="/gallery"><span>Visit The </span>Gallery</a>
        </li>
        <li className='right'>
          <a href="/contact"><span>Let's Chat </span>Contact</a>
        </li>
      </ul> */
//     </nav>
  );
    };

export default Navbar;

/* <div class="nav-bar">
<a class="active" href="#home">Lets Go Home</a>
<a href="#about">learn More About</a>
<a href="#boarding">Overnight Boarding</a>
<a href="#team">Meet the team</a>
<a href="#gallery">Gallery</a>

<a href="#contact">Contact</a> */
