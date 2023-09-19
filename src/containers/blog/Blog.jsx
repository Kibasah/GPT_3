import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is Happening and We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        
          <div className="gpt3__blog-container_groupA">
            <Article imgurl={blog01} date = "September 11 2023" title="GPT-3 and OpenAI is the future. Let us explore  how it is." />
          </div>

          <div className="gpt3__blog-container_groupB">
            <Article imgurl={blog02} date = "September 11 2023" title="GPT-3 and OpenAI is the future. Let us explore  how it is." />
            <Article imgurl={blog03} date = "September 11 2023" title="GPT-3 and OpenAI is the future. Let us explore  how it is." />
            <Article imgurl={blog04} date = "September 11 2023" title="GPT-3 and OpenAI is the future. Let us explore  how it is." />
            <Article imgurl={blog05} date = "September 11 2023" title="GPT-3 and OpenAI is the future. Let us explore  how it is." />

          
        </div>
      </div>
    </div>
  )
}

export default Blog
