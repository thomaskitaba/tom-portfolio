
import React from 'react';
import Gamesjson from './Gamesjson';
import {Github, Youtube} from 'react-bootstrap-icons';
import gameSnakeCard from '../assets/img/myworks/games/game-snake-card.jpg';
import gameWarCard from '../assets/img/myworks/games/game-war-card.jpg';
import gameDonutCard from '../assets/img/myworks/games/game-donut-card.jpg';
import gameShootCard from '../assets/img/myworks/games/game-shoot-card.jpg';

import defaultGames from '../assets/img/myworks/games/default-game.jpg';

const Games = () => {
const gamelist = {
  "game-snake-card.jpg": gameSnakeCard,
  "game-war-card.jpg": gameWarCard,
  "game-donut-card.jpg": gameDonutCard,
  "game-shoot-card.jpg": gameShootCard,
}

const getGames = (path) => {
  return gamelist[path] || null;

}

return (
  <>
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
              <div className='my-work-icons'>
                {(images.githubLink != null && images.githubLink != '') &&
                <span >
                  <a href={images.githubLink} alt={`'vido link for '${images.title}`} link>
                    <Github className="github-icon"/>
                  </a>
                </span>
                }
                {(images.videoLink != null && images.videoLink != '') &&
                <span >
                  <a href={images.videoLink} alt={`'vido link for '${images.title}`} link>
                    <Youtube className="youtube-icon"/>
                  </a>
                </span>
                }
              </div>
              <div className='work-description'>{images.description}</div>
            </div>
          </div>
        )
      })
    }
  </div>
  <hr />
  </>
)
}
export default Games;
