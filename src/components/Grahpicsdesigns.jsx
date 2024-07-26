import Grahpicsdesignsjson from './Grahpicsdesignsjson';
import Image1 from '../assets/img/myworks/graphicsdesign/ship-and-cat.jpg';
const Grahpicsdesigns = () => {
  const url = '../assets/img/myworks/graphicsdesign/';
return (
  <>
  {/* <Image1 /> */}
    {
      Grahpicsdesignsjson.map((images, index) =>
      <>
          <h1>Graphics Design</h1>
          <div key={images.id} className={`${images.className} graphics-images`}>
            <div> {images.title} </div>
            <img src={`${images.imageUrl}`} alt={images.title} />

          </div>
      </>
      )
    }
    <h1> Graphics Design </h1>
  </>
)
}
export default Grahpicsdesigns;
