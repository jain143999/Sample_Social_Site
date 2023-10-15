import React from 'react'
import MyStrem from '../myStrem/MyStrem'
import DetailsForm from '../detailsForm/DetailsForm'
import Favorites from '../Favorites/Favorites'
import Group from '../groups/Group'
import UserProfile from '../userProfiles/UserProfile'
import SideBar from '../sideBar/SideBar'

import './Bottom.css'

function Bottom() {
  return (
    <div >
    <div className='bottom-container'>
      <div className='sidebar-container'>
        <SideBar/>
      </div>
      <div className='mobile'>
      <div > 
      <div style={{paddingTop: '6px', paddingBottom:'17px', fontWeight: 'bold'}}>PULSE</div>
      <div className='profile-container'>
        <UserProfile
        imageSrc='https://picsum.photos/200/300'
        name='Mr. Arthur Christoper'
        companyName='unthinkable'
        />
      </div>
      
      <div>
        <Group/>
      </div>
      <div className='favorite-con'>
        <Favorites/>
      </div>
      </div>
      <div className='bottom-right-container'>
      <div className='detailsfrom-container'>
        <DetailsForm/>
      </div>
      <div style={{marginBottom:'20px'}}>
        <MyStrem/>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Bottom