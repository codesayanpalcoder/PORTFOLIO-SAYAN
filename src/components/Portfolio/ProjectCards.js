import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import "./index.scss";
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