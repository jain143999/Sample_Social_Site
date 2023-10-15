import React from 'react';
import './UserProfile.css';
import {RiGroupLine} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'

const UserProfile = (props) => {
  return (
    <div className="user-profile-box">
      <div className="user-profile">
        <div className="left-section">
          <img src={props.imageSrc} alt="User" className="user-image" />
        </div>
        <div className="right-section">
          <div className="user-name">{props.name}</div>
          <div className="company-name">{props.companyName}</div>
          <div className="user-buttons">
            <button className="user-button">34 followers</button>
            <button className="user-button">85 following</button>
            <button className="user-button">0 groups</button>
          </div>
        </div>
      </div>
      <div className='user-botton-buttons'>
            <button className='user-botton-button-groups'>
                <RiGroupLine
                fill='#E71A73'
                style={{marginRight:'5px', paddingTop: '2px'}}
                />
                groups</button>
            <button className='user-botton-button-manage'>
                <BiUser
                fill='white'
                />
                Manage Users</button>
        </div>
    </div>
  );
};

export default UserProfile;
