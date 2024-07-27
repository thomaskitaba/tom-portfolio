import Graphicsdesignsjson from './Graphicsdesignsjson';

import ShipTanaCard from '../assets/img/myworks/graphicdesigns/ship-of-tana-card.jpg';
import RobotPatriotCard from '../assets/img/myworks/graphicdesigns/robot-patriot-card.jpg';
import FinalFarewellCard from '../assets/img/myworks/graphicdesigns/final-farewell-card.jpg';
import EthiopiaFaceCard from '../assets/img/myworks/graphicdesigns/ethiopia-face-card.jpg';
import defaultGraphics from '../assets/img/myworks/graphicdesigns/default-graphics.jpg';
const Graphicsdesigns = () => {

  // object for each import
  const graphics = {
    "ship-of-tana-card.jpg": ShipTanaCard,
    "robot-patriot-card.jpg": RobotPatriotCard,
    "final-farewell-card.jpg": FinalFarewellCard,
    "ethiopia-face-card.jpg": EthiopiaFaceCard,
  }

  const getGraphics = (path) => {
    return graphics[path] || null;
  }

  return (
    <>

      <div className= 'mywork-container'>
      <div className="mywork-title">Graphics Design</div>
      {
        Graphicsdesignsjson.map((images) => {
          const ImageLink = getGraphics(images.imageUrl);
          return (
            <div key={images.id} className="mywork-card">
              <a href={images.link} target="_blank" rel="noreferrer" className="mywork-images">
              {ImageLink ? (
                <img src={ImageLink} alt={images.title} className="website-images" />
              ) : (
                <img src={defaultGraphics} alt={images.title} className="website-images"/>
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
    </>
  )
}
export default Graphicsdesigns;
