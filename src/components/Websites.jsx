import React from 'react';
import Websitesjson from './WebsitesJson';

// Import images
import tomRestorantCard from '../assets/img/myworks/websites/tom-restorant-card.jpg';
import k2nArchitectureCard from '../assets/img/myworks/websites/k2n-architecture-card.jpg';
import tomMenuCard from '../assets/img/myworks/websites/tom-menu-card.jpg';
import tomBlogPost from '../assets/img/myworks/websites/tom-blog-post.jpg';
import defaultWebsite from '../assets/img/myworks/websites/default-website.jpg';
// Create a mapping object
const imageMapping = {
  'tom-restorant-card.jpg': tomRestorantCard,
  'k2n-architecture-card.jpg': k2nArchitectureCard,
  'tom-menu-card.jpg': tomMenuCard,
  'tom-blog-post.jpg': tomBlogPost,
};

const Websites = () => {
  const getImage = (imageUrl) => {
    return imageMapping[imageUrl] || null;
  };

  return (
    <>


      <div className= 'mywork-container'>
      <h1 className="mywork-title">Websites built</h1>
      {Websitesjson.map((website) => {

        const imageSrc = getImage(website.imageUrl);
        return (

              <div key={website.id} className="mywork-card">
                {/* <div> */}
                  <a href={website.link} target="_blank" rel="noreferrer" className="work-images">
              {imageSrc ? (
                <img src={imageSrc} alt={website.title} className="website-images"/>
              ) : (
                <img src={defaultWebsite} alt={website.title} className="website-images"/>
              )}
              </a>
              {/* </div> */}
              <div className="work-detail-container">
                <div className='work-title'>{website.title}</div>
                <div className='work-title'>({website.technology} )</div>
                <div className='work-description'>{website.description}</div>
              </div>
            </div>

        );
      })}
      </div>
      <hr style={{ color: 'white'}}></hr>
    </>
  );
};

export default Websites;
