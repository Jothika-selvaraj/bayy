import React from 'react';
import { Link } from 'react-router-dom';

const PostGridOne = ( { data } ) => {
    const excerpt = data.details.substring(0, 120) + "...";
    return (
       
        <div class="blog-item mb-30">
            <div class="post-thumb">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blog/post-01/${data.image}`} alt="Blog Thumb" className="img-fluid" />
                </Link>
            </div>
            <div class="blog-content">
                <div class="post-meta">
                    <span class="post-author">by {data.author}</span>
                    <span class="post-date"><i class="fa fa-calendar-alt mr-2"></i>{ data.date }</span>
                </div>
                <h3 class="post-title"> 
                    <Link to="/">{data.title}</Link>
                </h3>
                
                <p>{ excerpt }</p>
            </div>
        </div>

    )
}

export default PostGridOne ;