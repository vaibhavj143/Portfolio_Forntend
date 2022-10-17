import React, {  useEffect , useRef} from "react";
import Heading from "../components/Heading";

import "../styles/about.css";

import ss from "../assets/images/ss.png";

import { setValAbout } from '../context/features/navSlices/navSlices'
import { useDispatch } from "react-redux";

const About = () => {

  const refNav = useRef();

const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(setValAbout(refNav.current.offsetTop - 100));
  }, [dispatch])

  return (
    <>
      <Heading heading={`About`} subHeading={`a bit about me`} />

      <div ref={refNav} className="aboutContainer">
        <div className="leftContainer">
          <p className="writeAboutMe">
            I'm a self-taught web developer with experience in designing new
            features from ideation to production, implementation of wireframes
            and design flows into high performance software applications. I take
            into consideration the user experience while writing reusable and
            efficient code. I passionately combine good design, technology, and
            innovation in all my projects, which I like to accompany from the
            first idea to release.Currently, I'm focused on the backend
            development.
          </p>
        </div>
        <div className="rightContainer">
          <img src={ss} alt="img" />
        </div>
      </div>
    </>
  );
};

export default About;
