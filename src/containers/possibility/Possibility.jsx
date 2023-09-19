import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text">
          The Possibilites are beyond our imagination
        </h1>
        <p>
        The potential applications for GPT-3 are vast and far-reaching, spanning industries and domains we could only dream of transforming. 
        From crafting human-like text to understanding context and generating meaningful responses, 
        GPT-3's abilities are pushing the boundaries of what we once thought was possible. 
        The possibilities it presents are, quite simply, beyond our imagination.
        </p>
        <h4>
          Request for Early Access
        </h4>
      </div>
      
      
    </div>
  )
}

export default Possibility