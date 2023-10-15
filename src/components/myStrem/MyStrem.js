import React from 'react'
import { BiFilterAlt } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc"
import {BiSolidLike} from "react-icons/bi"
import {HiEllipsisVertical} from "react-icons/hi2"

import './MyStream.css';

const metaData = [
    {
      id: 1,
      imageSrc: 'https://picsum.photos/200/300',
      name: 'MR. Arther Cristhoper',
      time: '2 hours ago',
      totalComments : '24 Comments',
      likes: '22',
      text: 'India Vs Pakistan World Cup Match: The ICC (International Cricket Council) Men’s Cricket World Cup is taking place in Ahmedabad, Gujarat. Ahmedabad will host cricket matches on October 14, November 4, November 10 and the World Cup final on November 19.',
    },
    {
      id: 2,
      imageSrc: 'https://picsum.photos/200/300',
      name: 'Suzen Khan',
      time: '3 hours ago',
      totalComments : '24 Comments',
      likes: '20',
      text: 'India Vs Pakistan World Cup Match: The ICC (International Cricket Council) Men’s Cricket World Cup is taking place in Ahmedabad, Gujarat. Ahmedabad will host cricket matches on October 14, November 4, November 10 and the World Cup final on November 19.',
    },
    {
      id: 3,
      imageSrc: 'https://picsum.photos/200/300',
      name: 'Suzen Khan',
      time: '3 hours ago',
      totalComments : '24 Comments',
      likes: '20',
      text: 'India Vs Pakistan World Cup Match: The ICC (International Cricket Council) Men’s Cricket World Cup is taking place in Ahmedabad, Gujarat. Ahmedabad will host cricket matches on October 14, November 4, November 10 and the World Cup final on November 19.',
    },
  ];

//   datacdcsdsdcd

function MyStrem() {
  return (
    <div className='streamContainer'>
        <div className='streamHeader'>
        <h3 className='streamHeading'>My Streams</h3>
        <BiFilterAlt/>
        </div>
        <hr />
        <div className="App">
      {metaData.map((data) => (
        <div>
            <div className="post-card" key={data.id}>
          <div className="streamLeft-section">
            <img src={data.imageSrc} alt="User" />
          </div>
          <div className="streamRight-section">
           <div className='streamHeader'>
           <h3>{data.name}</h3>
           <HiEllipsisVertical
           className='ellpsis'
           />
           </div>
            <p className='stream-date'>{data.time}</p>
            <p>{data.text}</p>
            <div className='flex stream-actions-container'>
            <div className="actions">
              {/* <span className="comment">Comment</span> */}
              <div className='flex'>
                <BiComment
                style={{marginTop:'3px'}}/>
                <span className="comment">Comment</span>
              </div>
              <FcLike
              style={{marginTop:'2px'}}/>
              <span className="share">like</span>
              <AiOutlineShareAlt
              style={{marginTop:'3px'}}/>
            </div>
            <div className="action-count">
            <div>
                <BiSolidLike fill='#E92F80'/>
            <span className="comment">{data.likes}</span>
                </div>
            <div>
                <BiComment/>
            <span className="comment">{data.totalComments}</span>
            </div>
            </div>
            </div>
          </div>
        </div>
        <hr/>
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default MyStrem