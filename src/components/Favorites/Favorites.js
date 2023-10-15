import React, { useState } from 'react';
import './Favorites.css'

function Favorites() {
  const [showMetadataA, setShowMetadataA] = useState(true);

  const metadataA = [
    { name: 'John Doe', companyName: 'CRMNext', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters', link: 'https://linkedin.com/in/shubhamjain14/' },
    { name: 'Jane Smith', companyName: 'BusinessNext', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', link: 'https://linkedin.com/in/shubhamjain14/' },
    // Add more data as needed
  ];

  const metadataB = [
    { name: 'Alice Johnson', companyName: 'Wipro', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ', link: 'https://linkedin.com/in/shubhamjain14/' },
    { name: 'Bob Brown', companyName: 'TCS', description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ', link: 'https://linkedin.com/in/shubhamjain14/' },
    // Add more data as needed
  ];

  const toggleMetadata = (showA) => {
    setShowMetadataA(showA);
  };


  return (
    <div className='row-container'>
      <div className='button-container'>
      <button className={showMetadataA ? 'fav-btn selecten-fav' : 'fav-btn'} name='link'  onClick={() => toggleMetadata(true)}>Favorite Links</button>
      <button className={!showMetadataA ? 'fav-btn selecten-fav' : 'fav-btn'} name='link' onClick={() => toggleMetadata(false)}>Favorite Files</button>
      </div>
      <div className='favorite-content'>
          {showMetadataA
            ? metadataA.map((item, index) => (
                <p key={index}>
                  <p className='fav-name'> {item.name}</p>
                  <p className='fav-company'> {item.companyName}</p>
                  <p className='fav-discription'>{item.description}</p>
                  <p className='fav-link'>
                   <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                  </p>
                </p>
              ))
            : metadataB.map((item, index) => (
                <p key={index}>
                 <p className='fav-name'> {item.name}</p>
                  <p className='fav-company'> {item.companyName}</p>
                  <p className='fav-discription'>{item.description}</p>
                  <p className='fav-link'>
                   <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                  </p>
                </p>
              ))}
      </div>
    </div>
  );
}

export default Favorites;
