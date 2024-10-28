import React from 'react';
import { Link } from 'react-router-dom';
import PostData from '../../../data/blog/PostData.json';

const LatestPostOne = ( props ) => {
    return (
        <div className={`widget widget_latest_post${ props.style2 === 'enable' ? '-2' : '' }  ${ props.extraClass || '' }`}>
            <div className="inner">
                <h4 className="widget-title">Latest Posts</h4>
                <div className="recent-posts">
                    {
                        PostData.slice( 0, 3 ).map( ( item ) => {
                            return(
                                <div className="single-latest-post" key={ item.id }>
                                    <div className="widget-thumb">
                                        <Link className="d-block" to="#">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/widget/blog/${item.image}`} alt="Blog Thumb" />
                                        </Link>
                                    </div>
                                    <div className="widget-content">
                                        <h5> 
                                            <Link className="d-block" to="#">{item.title}</Link>
                                        </h5>
                                        <span><i className="fa fa-calendar-times"></i>{item.date}</span>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestPostOne;