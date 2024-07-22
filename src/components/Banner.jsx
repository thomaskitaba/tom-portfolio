// import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useContext} from 'react';
import MyContext from './MyContext';
import headerImg from '../assets/img/websiteimages/books.png';
// import headerImg from '../assets/img/websiteimages/books-1.png';
// import wave from '../assets/img/wave.jpg';

export const Banner = () => {
  const {subscribe, setSubscribe} = useContext(MyContext);
  const {subscriber, setSubscriber} = useContext(MyContext);
    return (

      <div className="banner-background">
      <section className="banner" id="home">
        <Container className="container">
          <Row className="banner-moto">
            <Col>
              <h1 >Thomas Kitaba</h1>
              <h2> Full-Stack Web Developer </h2>
            </Col>
          </Row>
          <Row className="banner-moto-discription align-items-center">
            <Col>
              <img src={headerImg} alt="Header Img" />
            </Col>
            <Col xs={12} md={6} xl={7} className='we-list-container'>
              <div className='we-list'>
              <h1>
               <div style={{fontSize: "2rem", textDecoration: "underline", marginBottom: "2rem"}}>Professional Services</div>

                {/* <span className="wrap"> */}
                <ul className='moto'>

                   <li>Design Engaging and Interactive Websites</li>
                  <li>Create Visually Captivating Graphics</li>

                  <li>Develop and Execute Comprehensive Digital Marketing Strategies</li>
                </ul>
              {/* </span> */}
              </h1>

              </div>

              {/* <button href="#footer" onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle /></button> */}
            </Col>
          </Row>
          {!subscriber ?
          <div className="subscribe-button" onClick={(e)=> setSubscribe(true)}> Join My Community: Subscribe to My Blogs </div>
          : null
}
          <Row>
          </Row>
        </Container>
      </section>
      </div>

    )
}
