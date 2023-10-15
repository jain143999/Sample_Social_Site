import React from 'react';
import {BsSearch} from 'react-icons/bs'
import { MdAddBox } from 'react-icons/md'
import './Group.css'; 

const Group = () => {

const metadata = [
    { id: 1, image: 'https://picsum.photos/200/300', text: 'Production Development Groups', text2: '23 people in group' },
    { id: 2, image: 'https://picsum.photos/200/300', text: 'People and Culture', text2: '213 people in group' },
    { id: 3, image: 'https://picsum.photos/200/300', text: 'Text 3', text2: '29 people in group' },
]

return (
    <div className="container">
      <p className='group-heading'>Group and Follower Details</p>

      <div className='group-button-container'>
        <button className='group-button'>Groups</button>
        <button className='group-button'>Following</button>
        <button className='group-button'>Followers</button>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" className="search-input" />
         <BsSearch
         className='search-icon'
         />
        </div>
      </div>

      <div className="metadata-container">
        {metadata.map((item) => (
         <div>
           <div key={item.id} className="metadata-row">
            <div className="round-image">
              <img src={item.image} alt="Img" className="metadata-image" />
            </div>
            <div className='metadata-text'>
            <p className='group-text'>{item.text}</p>
            <p className='group-text2'>{item.text2}</p>
            </div>
          </div>
           <hr style={{opacity:'0.4'}}/>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Group;
