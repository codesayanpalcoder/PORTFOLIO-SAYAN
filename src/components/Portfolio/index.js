import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import "./index.scss";
import SWG from '../../assets/images/1.jpg'
import Quick from '../../assets/images/2.jpg'
import NETFLIX from '../../assets/images/3.jpg'
import HATEBAZARE from '../../assets/images/4.jpg'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3005);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container1">
        <div class="row">
  <div class="column">
            <div className="image-box">
              <img src={SWG}className="portfolio-image" alt="portfolio" />
              <div className="content">
               <h2>SWG ACADEMY
               Link</h2></div>
               
        </div></div>
        <div class="column">
        
            <div className="image-box">
              <img src={Quick}className="portfolio-image" alt="portfolio" style={{width:"100%"}} />
              <div className="content">
            <a href="https://sortingvisulization.000webhostapp.com/">   <h2>Sorting Visualization
               Link</h2></a>
               
              </div></div></div>
              <div class="column">
              <div className="image-box">
            <img src={NETFLIX}className="portfolio-image" alt="portfolio" /> 
              <div className="content">
              <a href="https://sayannetflixclone.netlify.app/"><h2>NETFLIX CLONE
               Link</h2></a></div>
      </div></div>
      <div class="column">
            <div className="image-box">
              <img src={HATEBAZARE}className="portfolio-image" alt="portfolio" />
              <div className="content">
              <a href="https://hateybazarey.onrender.com/"> <h2>HATE BAZARE
               Link</h2></a></div>
      </div></div></div></div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={"P ro j e c t s".split("")} idx={15} />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
       
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
