
import React from 'react';
import Gamesjson from './Gamesjson';

import game1 from '../assets/img/myworks/games/default-game.jpg';
import defaultGames from '../assets/img/myworks/games/default-game.jpg';

const Games = () => {
const gamelist = {
  "game1.jpg": game1,
  "game2.jpg": game1,
  "game3.jpg": game1,
  "game4.jpg": game1,
}

const getGames = (path) => {
  return gamelist[path] || null;

}

return (
  <div className= 'mywork-container'>
    <div className="mywork-title">Games</div>
    {
      Gamesjson.map((images) => {
        const ImageLink = getGames(images.imageUrl);
        return (
          <div key={images.id} className="mywork-card">
            <a href={images.link} target="_blank" rel="noreferrer" className="mywork-images">
            {ImageLink ? (
              <img src={ImageLink} alt={images.title} className="website-images" />
            ) : (
              <img src={defaultGames} alt={images.title} className="website-images"/>
            )}
            </a>
            <div className="work-detail-container">
              <div className='work-title'>{images.title}</div>
              <div className='work-title'>({images.technology})</div>
              <div className='work-description'>{images.description}</div>
            </div>
          </div>
        )
      })
    }
  </div>
)
}
export default Games;
