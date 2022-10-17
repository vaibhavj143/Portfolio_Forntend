import React, {  useEffect , useRef} from "react";
import Heading from '../components/Heading'

import projectArr from '../assets/data/projectArr'

import '../styles/project.css'

import { setValProject } from '../context/features/navSlices/navSlices'
import { useDispatch } from "react-redux";

const Project = () => {


  const refNav = useRef();

const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(setValProject(refNav.current.offsetTop - 100));
  }, [dispatch])

  return (
    <>
    <Heading  heading={`Project`}  subHeading={`my work`} />

    <div ref={refNav} className='projectContainer'  >

      {
        projectArr.map((el,ind)=>{

          return <div className="projectCard" key={ind} >

              <img src={el.img} alt="" />

              <div> {el.techStack.split(",").map((ele,index)=> <div className='hashTag' >#{ele}</div> )}  </div>

              <h2> {el.name}</h2>

              <p>{el.description}</p>

          </div>
          
        })
      }


    </div>
    
    </>
  )
}

export default Project