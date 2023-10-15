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

        <div ><GiHamburgerMenu/></div>
        <div ><LuPaperclip/></div>
        <div ><BiTask/></div>
        <div ><BsCalendarDate/></div>
        <div ><BsCalendar4Week/></div>
        <div ><FaBalanceScaleRight/></div>
        <div ><MdOutlineAddIcCall/></div>
        <div ><GrAnnounce/></div>
        <div ><RiCustomerService2Line/></div>
        <div ><IoPricetagsOutline/></div>
        </div>
  )
}

export default SideBar