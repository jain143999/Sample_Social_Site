import React, { useState } from 'react';
import './NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineHome} from 'react-icons/ai';
import {IoAppsOutline} from 'react-icons/io5';
import {TbCircleLetterS} from 'react-icons/tb';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {BsReverseLayoutTextWindowReverse} from 'react-icons/bs'
import {BiMessage} from 'react-icons/bi'

function NavBar() {
    const [HamBurgerData,SetHamburgerData] = useState(false)
  return (
   <>
    <div className="navbar">
      <div className="left-icons">
        <div className="icon"><AiOutlineHome/></div>
        <div className="icon"><IoAppsOutline/></div>
        <div className="icon"><TbCircleLetterS/></div>
      </div>
      {!HamBurgerData &&(
         <>
         <div className={HamBurgerData ? "mobileCenterMenu search-box":"search-box"}>
         <input type="text" placeholder="QAMobile" />
         <button className='nav-button'>Search</button>
       </div>
       <div className={HamBurgerData ? "mobileCenterMenu right-icons":"right-icons"}>
         <div className="icon"><IoIosNotificationsOutline/></div>
         <div className="icon"><BsReverseLayoutTextWindowReverse/></div>
         <div className="icon"><BiMessage/></div>
       </div>
         </>
      )}
      <div className='hamburger'>
        <a href='#' onClick={()=>{SetHamburgerData(!HamBurgerData) }}>
        <GiHamburgerMenu/>
        </a>
      </div>
    </div>
    {HamBurgerData &&(
         <div className='mobile-Header-content'>
        
         <div className={HamBurgerData ? "mobileCenterMenu search-box":"search-box"}>
         <input type="text" placeholder="QAMobile" />
         <button className='nav-button'>Search</button>
       </div>
       <div className={HamBurgerData ? "mobileCenterMenu right-icons":"right-icons"}>
         <div className="icon"><IoIosNotificationsOutline/></div>
         <div className="icon"><BsReverseLayoutTextWindowReverse/></div>
         <div className="icon"><BiMessage/></div>
       </div>
       
         </div>
      )}
      </>
      
  );
}

export default NavBar;
