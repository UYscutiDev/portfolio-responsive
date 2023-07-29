import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Avshalom</span>
          <span>Frontend Developer with higt level
            of experience in web designing and development,
            producting the Quality work!!.</span>
        </div>
        <button className="button i-button">HiRE ME</button>
        <div className="i-icons">
          <a target='_blanck' href="https://github.com/Avshalom-Ts">
            <img src={Github} alt="github" />
          </a>
          <a target='_blanck' href="https://www.linkedin.com/in/avshalom-zarviv-a02765260/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a target='_blanck' href="https://www.instagram.com/avshalomzarviv/">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <img src={glassesimoji} alt="boy" />
        <div style={{top:'-4%',left:'68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        {/*Blur Div*/}
        <div className='blur' style={{background:'rgb(238,210,255)'}}></div>
        <div className='blur' style={{background:'#c1f5ff' ,top:'17rem',width:'21rem',height:'11rem',left:'9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
