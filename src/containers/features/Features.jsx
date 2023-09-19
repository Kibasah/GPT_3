import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving and Distrusts Instantly',
    text: 'GPT-3 is able to answer most questions and is able to provide details as well as examples according to the prompt. The limit is only your imagination and creativity but GPT-3 can improve that as well'
  },
  {
    title: 'State-of-the-Art Technology',
    text: 'GPT-3 is known for its remarkable capabilities in natural language processing.With a staggering 175 billion parameters, it is one of the largest and most powerful language models in existence.'
  },
  {
    title: 'Versatile Applications and capability',
    text: 'GPT-3 can perform a wide range of tasks, including text generation, translation, summarization, question answering, and sentiment analysis.It has been employed across various industries and fields, from customer support and healthcare to content generation and code completion.'
  },
  {
    title: 'The Potential of GPT-3 and future Enhancements',
    text: 'GPT-3 opens up possibilities beyond imagination by enabling AI-driven solutions that enhance efficiency, productivity, and user experiences.Its ability to understand and generate human-like text has revolutionized how we interact with technology.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features" >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now And You Just Need To Realize It. Step Into The Future Today & Make It Happen
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
      
    </div>
  )
}

export default Features
