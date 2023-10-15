import React, { useState } from 'react';
import './DetailsForm.css';

import {GrAddCircle} from 'react-icons/gr'
import {AiOutlinePaperClip} from 'react-icons/ai'
import {FiUploadCloud} from 'react-icons/fi'
import {BiTask} from 'react-icons/bi'

function MyForm() {
  const [linkUrl, setLinkUrl] = useState('');
  const [linkName, setLinkName] = useState('');
  const [description, setDescription] = useState('');
  const [radioValue, setRadioValue] = useState(''); // For radio buttons



  const handlePost = () => {
    console.log({
      linkUrl,
      linkName,
      description,
      radioValue,
    });
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <div className='details-text-fontweight'>Link URL</div>
        <input
          type="text"
          placeholder="Link URL"
          className='form-row-width'
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className='details-text-fontweight'>Link Name</div>
        <input
          type="text"
          className='form-row-width'
          placeholder="Link Name"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          className='form-row-width discription-height'
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-row flex-row">
        <label>
          <input
            type="radio" 
            value="Option 1" 
            checked={radioValue === 'Option 1'}
            onChange={() => setRadioValue('Option 1')}
          />
          Visible to all
        </label>
        <label>
          <input
            type="radio" 
            value="Option 2"
            style={{marginLeft: '20px'}}
            checked={radioValue === 'Option 2'}
            onChange={() => setRadioValue('Option 2')}
          />
          Private
        </label>
      </div>
     <div className='actions-container'>
     <div className='details-action'>
        <div className='details-action-content'>
            <GrAddCircle className='details-svg-top'  fill='#38C0FE'/>
            Post</div>
        <div className='details-action-content'>
        <AiOutlinePaperClip className='details-svg-top' fill='#38C0FE' />
            Link</div>
        <div className='details-action-content'>
        <FiUploadCloud className='details-svg-top' fill='#38C0FE'/>
            Image/File Upload</div>
        <div className='details-action-content'>
       <BiTask className='details-svg-top' fill='#38C0FE'/>
            Task</div>
      </div>
      <button className='details-form-button' onClick={handlePost}>Post</button>
     </div>
    </div>
  );
}

export default MyForm;
