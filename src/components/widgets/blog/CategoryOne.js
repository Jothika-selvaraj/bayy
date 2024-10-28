import React from 'react';
import { Link } from 'react-router-dom';
import { flatDeep, slugify, containsObject } from '../../../utils';
import PostData from '../../../data/blog/PostData.json';


const CategoryOne = ( props ) => {
    const cats = PostData.map(item => {
        return item.categories;
    } );

    let singleCatArray = flatDeep( cats );
    let categories = [];
    singleCatArray.forEach( cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify( cat ),
            count: 1
        }
        const objIndex = containsObject( obj, categories );
        if( objIndex !== -1 ){
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify( cat ),
                count: prevCount + 1
            }
        } else {
            categories.push( obj );
        }
    } );

    return (
        <div className={`${ props.style2 === 'enable' ? '-2' : '' } widget widget_categories ${ props.extraClass || '' }`}>
            <h4 className="widget-title">Categories</h4>
                <ul className="category-list">
                    { 
                        categories.slice( 0, 5 ).map( cat => {
                            return (
                                <li className="cat-item" key={ cat.slug }>
                                    <Link to="#">
                                        { cat.title }
                                    </Link>
                                    <span>({ cat.count })</span>
                                </li>
                            )
                        } )
                    }
                </ul>

        </div>
    )
}

export default CategoryOne;