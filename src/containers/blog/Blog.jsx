import React from 'react';
import './blog.css';

import { Article } from '../../components'; 
import { blog1, blog2, blog3, blog4, blog5 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section_padding">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
            </div>

            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">                    
                    <Article imageURL={blog1} date="March 19, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>

                <div className="gpt3__blog-container_groupB">
                    <Article imageURL={blog2} date="March 19, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageURL={blog3} date="March 19, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageURL={blog4} date="March 19, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageURL={blog5} date="March 19, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
        )
}

export default Blog