import React from 'react';
import Websitesjson from './WebsitesJson';

// Import images
import tomRestorantCard from '../assets/img/myworks/websites/tom-restorant-card.jpg';
import k2nArchitectureCard from '../assets/img/myworks/websites/k2n-architecture-card.jpg';
import tomMenuCard from '../assets/img/myworks/websites/tom-menu-card.jpg';

// Create a mapping object
const imageMapping = {
  'tom-restorant-card.jpg': tomRestorantCard,
  'k2n-architecture-card.jpg': k2nArchitectureCard,
  'tom-menu-card.jpg': tomMenuCard,
};

const Websites = () => {
  const getImage = (imageUrl) => {
    return imageMapping[imageUrl] || null;
  };

  return (
    <>

      <h1 className="mywork-title">Websites build</h1>
      <div className= 'mywork-container'>
      {Websitesjson.map((website) => {
        const imageSrc = getImage(website.imageUrl);
        return (

              <div key={website.id} className="mywork-card">
                  <a href={website.link} target="_blank" rel="noreferrer" className="mywork-card">
              {imageSrc ? (
                <img src={imageSrc} alt={website.title} className="website-images"/>
              ) : (
                <p>Image not found</p> //
              )}
              </a>
              <div>
              <div className='work-title'>{website.title}</div>
              <div className='work-description'>{website.description}</div>
              </div>
            </div>


        );
      })}
      </div>
    </>
  );
};

export default Websites;