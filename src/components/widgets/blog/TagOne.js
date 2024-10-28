import React from 'react';
import { Link } from 'react-router-dom';
import { flatDeep, slugify, containsObject } from '../../../utils';
import PostData from '../../../data/blog/PostData.json';

const TagOne = ( props ) => {
    const tagItems = PostData.map(item => {
        return item.tags;
    } );

    let singleCatArray = flatDeep( tagItems );
    let tags = [];
    singleCatArray.forEach( cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify( cat ),
            count: 1
        }
        const objIndex = containsObject( obj, tags );
        if( objIndex !== -1 ){
            const prevCount = tags[objIndex].count;
            tags[objIndex] = {
                title: cat.trim(),
                slug: slugify( cat ),
                count: prevCount + 1
            }
        } else {
            tags.push( obj );
        }
    } );

    return (
        <div className={`blog-widget${ props.style2 === 'enable' ? '-2' : '' } widget_tag_cloud ${ props.extraClass || '' }`}>
            <h4 className="widget-title">Popular Tags</h4>
                { 
                    tags.map( tag => {
                        return (
                            <Link key={ tag.slug } to="#">
                                { tag.title }
                            </Link>
                        )
                    } )
                }
        </div>
    )
}

export default TagOne;