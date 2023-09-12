import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, which stands for Generative Pre-trained Transformer 3, is a state-of-the-art artificial intelligence language model developed by OpenAI. It is the third iteration in the GPT series of models, building upon the success of its predecessors, GPT-1 and GPT-2." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond imagination
        </h1>
        <p>
          Explore the library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chat Bots" text="Chatbots are computer programs or artificial intelligence (AI) systems designed to simulate human-like conversations with users through text or voice interactions. They are often used to provide information, answer questions, offer assistance, and engage in various forms of communication with users. Chatbots can be found in a wide range of applications and industries, including customer support, e-commerce, healthcare, education, and more."/>
        <Feature title="Knowledge Base" text="A knowledge base is a centralized repository of information and data that is organized, stored, and often searchable for easy access and retrieval. Knowledge bases are used in various fields and industries to store and manage knowledge, facilitate information sharing, and provide resources for users to find answers to their questions. Here are some key aspects of knowledge bases"/>
        <Feature title="Education" text="Education is the process of acquiring knowledge, skills, values, and attitudes through various formal and informal methods. It is a fundamental aspect of human development and plays a crucial role in shaping individuals and societies. "/>
      </div>
    </div>
  )
}

export default WhatGPT3
