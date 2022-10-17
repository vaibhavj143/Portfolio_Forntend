import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/Heading";

import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsPhone,
  BsMailbox,
  BsPerson,
} from "react-icons/bs";
import {
  TiTick
} from "react-icons/ti";

// import chakar ui


import { BiMessageRounded } from "react-icons/bi";

// import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import {
  submitDetail,
  STATUES,
} from "../context/features/visitorSlices/visitorSlices.js";
import { setValContact } from "../context/features/navSlices/navSlices.js";

// import { useSelector, useDispatch } from "react-redux";

import "../styles/contact.css";

const Contact = () => {
  // const pageState = useSelector((state) => state.navReducer);
  const dispatch = useDispatch();
  const refNav = useRef();

  const { status, success, isAuth } = useSelector((state) => state.visitor);

  // console.log(pageState);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [Alert , setAlert ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setFormState({...state, [name]:value});
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formState)

    dispatch(submitDetail(formState));

    setFormState({
      name: "",
      email: "",
      number: "",
      message: "",
    })

    console.log(status);

    setAlert(true);

const timeoutId =  setTimeout(()=>{
        setAlert(false);
      },3000)

    clearTimeout(timeoutId);

    // console.log("hi");
  };

  useEffect(() => {
    dispatch(setValContact(refNav.current.offsetTop - 100));
  }, [dispatch , Alert]);

  return (
    <>
      <Heading heading={`Contact`} subHeading={`get in touch`} />

      {status === STATUES.SUCCESS && success && Alert ? (
       <>
          <div  className="alertContactSuccess" >
            <TiTick/> Got your Response
          </div>
          <div  className="alertContactInfo" >
            <TiTick/>Check your Email
          </div>
       </>
       
      ) : null}

      {
        <div></div>
      }

      <div ref={refNav} className="contactContainer">
        <address className="contactLeft">
          <div>
            <span>
              {" "}
              <a href="tel:+918764140115">Mobile - 8764140115</a>{" "}
            </span>
          </div>
          <div>
            <span>
              <a href="mailto:vaibhavj478@gmail.com">
                Email - vaibhavj478@gmail.com{" "}
              </a>
            </span>
          </div>
          <div>
            <span>Address - India, Banswara(Raj) 327001</span>
          </div>

          <div>
            <span>
              <a
                href="https://twitter.com/vaibhavj478"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsTwitter />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-joshi-821a2b13b/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsLinkedin />{" "}
              </a>
              <a
                href="https://www.instagram.com/vaibhavj478/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsInstagram />{" "}
              </a>
              <a
                href="https://github.com/vaibhavj478"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />{" "}
              </a>
            </span>
          </div>
        </address>

        <div className="contactRight">
          <h2>Fill the contact</h2>

          <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
            <span>
              <BsPerson />{" "}
              <input
                required
                maxLength={18}
                name="name"
                type="text"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BsMailbox />{" "}
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BsPhone />{" "}
              <input
                required
                name="number"
                type="number"
                placeholder="Mobile Number"
                value={formState.number}
                onChange={(e) => handleChange(e)}
              />
            </span>
            <span>
              <BiMessageRounded />{" "}
              <textarea
                name="message"
                placeholder="Any suggestion... any message."
                cols="30"
                rows="3"
                value={formState.message}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </span>

            <input className="submitBtn" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

// whileHover={{
//   scale: [1, 1.2, 1.2, 1, 1],
//   borderRadius: ["0%", "0%", "50%", "50%", "0%"],

//   transition: {
//     duration: 2,
//     ease: "easeInOut",
//     times: [0, 0.2, 0.5, 0.8, 1],
//     repeat: Infinity,
//     repeatDelay: 2,
//   }
// }}
