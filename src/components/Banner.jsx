// import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useContext} from 'react';
import MyContext from './MyContext';
import headerImg from '../assets/img/websiteimages/self-photo.png';
import { FaFileAlt } from 'react-icons/fa';
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
              <div className="thomas-kitaba">Thomas Kitaba</div>
              <div className="full-stack"> Full-Stack Web Developer </div>
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
          <Row className="subsicribe-cv-container">
            <div>
          {!subscriber ?
          <>
            <div className="subscribe-button" onClick={(e)=> setSubscribe(true)}> Join My Community: Subscribe to My Blogs </div>

            </> : null
          }
            </div>
            <div className="resume-container">
            <a className="resume-anchor" target="_blank" href="https://app.enhancv.com/share/d0ab32c5/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
               < FaFileAlt size={50}/>
            </a>
            </div>
          </Row>
          <Row>
          </Row>
        </Container>
      </section>
      </div>
    )
}
