import Myapplicationjson from './Myapplicationjson';

import {Github, Youtube} from 'react-bootstrap-icons';
import applicationPaintCard from '../assets/img/myworks/applications/application-paint-card.jpg';

import defaultApplication from '../assets/img/myworks/applications/default-application.jpg';

const Myapplication = () => {
  const applicationlist = {
    'application-paint-card.jpg': applicationPaintCard,
    'default-application.jpg': defaultApplication,
}
const getApplications = (path) => {
  return applicationlist[path] || null;

}

return (
  <div className= 'mywork-container '>
    <div className="mywork-title">Applications</div>
    <div className="custom-mywork-container">
    {
      Myapplicationjson.map((images) => {
        const ImageLink = getApplications(images.imageUrl);
        return (
          <div key={images.id} className="mywork-card custom-mywork-card">
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
                  <a href={images.githubLink} alt={`'vido link for '${images.title}`} target="_blank" rel="noreferrer">
                    <Github className="github-icon" size={25}/>
                  </a>
                </span>
                }
                {(images.videoLink != null && images.videoLink != '') &&
                <span >
                  <a href={images.videoLink} alt={`'vido link for '${images.title}`} target="_blank" rel="noreferrer">
                    <Youtube className="youtube-icon" size={25}/>
                  </a>
                </span>
                }
                {
                  images.play &&
                  <span >
                  <a href={images.play} alt={`'play link for ${images.play}`} target="_blank" rel="noreferrer">
                    <span className="play-icon">Play Game</span>
                  </a>
                </span>
                }
              </div>
              <hr className="thin-hr" />
              <div className='work-description'>{images.description}</div>
            </div>
          </div>
        )
      })
    }
    </div>
  </div>
)
}

export default Myapplication;
