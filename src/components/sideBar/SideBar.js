import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { LuPaperclip } from 'react-icons/lu';
import {BiTask} from 'react-icons/bi'
import {BsCalendarDate} from 'react-icons/bs';
import {BsCalendar4Week} from 'react-icons/bs';
import {FaBalanceScaleRight} from 'react-icons/fa';
import { MdOutlineAddIcCall } from 'react-icons/md'
import {GrAnnounce} from 'react-icons/gr'
import {RiCustomerService2Line} from 'react-icons/ri'
import {IoPricetagsOutline} from 'react-icons/io5'

import './Sidebar.css';

function SideBar() {
  return (
    <div className='sidebar-containers'>

        <div className='sidebar-container-first' ><GiHamburgerMenu/></div>
        <div className='sidebar-container-first'><LuPaperclip/></div>
        <div className='sidebar-container-second'><BiTask/></div>
        <div className='sidebar-container-second'><BsCalendarDate/></div>
        <div className='sidebar-container-second'><BsCalendar4Week/></div>
        <div className='sidebar-container-second'><FaBalanceScaleRight/></div>
        <div className='sidebar-container-second'><MdOutlineAddIcCall/></div>
        <div className='sidebar-container-second'><GrAnnounce/></div>
        <div className='sidebar-container-second'><RiCustomerService2Line/></div>
        <div className='sidebar-container-second'><IoPricetagsOutline/></div>
        </div>
  )
}

export default SideBar