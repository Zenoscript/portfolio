import React from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import SkillCard from './components/SkillCard/SkillCard';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,FaPython,FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import ExperienceCard from './components/ExperienceCard/ExperienceCard';



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <section id="hero">
        <div className="hero-left">
          <h1>Hello i'am <span className='bold-text'>Ashok Teja.</span><br/>
          <span className='bold-text'>FullStack</span> <span className='outlined-text'>Developer</span><br />
          Based In <span className='bold-text'>India</span>
          </h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias accusantium placeat, odit eligendi sint temporibus corporis error sunt et necessitatibus optio fugiat reprehenderit asperiores?</h2>
        </div>
        <div className="hero-right">
          <img src="/hero-image.svg" alt="" />
        </div>
      </section>
      <section id="myskills">
          <div className="myskills-wrapper">
            <h3>My <span className='bold-text'>Skills</span></h3>
            <div className="myskills-content">
                <SkillCard Icon={<ImHtmlFive size={40} color='black'/>} text="HTML" type="light"/>
                <SkillCard Icon={<SiCss3 size={40} color='black'/>} text="CSS" type="light"/>
                <SkillCard Icon={<IoLogoJavascript size={40} color='black'/>} text="javascript" type="light"/>
                <SkillCard Icon={<FaReact size={40} color='white'/>} text="react" type="dark"/>
                <SkillCard Icon={<FaNodeJs size={40} color='black'/>} text="nodejs" type="light"/>
                <SkillCard Icon={<FaReact size={40} color='black'/>} text="react native" type="light"/>
                <SkillCard Icon={<SiMongodb size={40} color='white'/>} text="mongodb" type="dark"/>
                <SkillCard Icon={<FaPython size={40} color='black'/>} text="python" type="light"/>
                <SkillCard Icon={<DiMysql size={40} color='black'/>} text="mysql" type="light"/>
                <SkillCard Icon={<FaGitAlt size={40} color='black'/>} text="git" type="light"/>
            </div>
          </div>
      </section>
      <section id='experience'>
        <div className="experience-wrapper">
        <h3 className='txt-light'>My <span className='bold-text txt-light'>Experience</span></h3>
        <div className="experience-content">
          <ExperienceCard image="/inventech.png" title="Full Stack Web Developer at Inventech Info Solutions" timeline="Dec 2023 - Present"/>
          <ExperienceCard image="/inventech.png" title="Full Stack Web Developer at Inventech Info Solutions" timeline="Dec 2023 - Present"/>
          <ExperienceCard image="/inventech.png" title="Full Stack Web Developer at Inventech Info Solutions" timeline="Dec 2023 - Present"/>
          <ExperienceCard image="/inventech.png" title="Full Stack Web Developer at Inventech Info Solutions" timeline="Dec 2023 - Present"/>
        </div>
        </div>

      </section>
    </div>
  )
}

export default App
