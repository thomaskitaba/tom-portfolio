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
  <div className= 'mywork-container'>
    <div className="mywork-title">Applications</div>
    {
      Myapplicationjson.map((images) => {
        const ImageLink = getApplications(images.imageUrl);
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
                {images.githubLink &&
                <span >
                  <a href={images.githubLink} alt={`'vido link for '${images.title}`} link>
                    <Github className="github-icon"/>
                  </a>
                </span>
                }
                {images.videoLink &&
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
)
}

export default Myapplication;
