import React from 'react';
import { PageBanner, PostGridOne } from '../layouts/blog/index';
import Layout from '../../common/Layout';
import PostData from '../../data/blog/PostData.json';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import TagOne from '../../components/widgets/blog/TagOne';

const BlogPageOne = () => {
    return (
        <div className="about">       
            <Layout>       
                <PageBanner
                    title="Blog Grid"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Grid"
                />

                <div className="page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-8">
                                <div className="row">
                                    { 
                                        PostData.slice(0, 8).map((item) => (
                                            <div className="col-lg-6 col-md-6 col-12" key={item.id}>
                                                <PostGridOne data={item} />
                                            </div>
                                        ))
                                    }
                                </div>
                                
                                <nav className="blog-page-navigation">
                                    <ul className="pagination">
                                        <li className="pagination-arrow">
                                            <button onClick={(e) => { e.preventDefault(); /* Add logic for previous page */ }}>
                                                <i className="fa fa-angle-double-left"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={(e) => { e.preventDefault(); /* Add logic for page 1 */ }}>1</button>
                                        </li>
                                        <li>
                                            <button className="active" onClick={(e) => { e.preventDefault(); /* Add logic for page 2 */ }}>2</button>
                                        </li>
                                        <li>
                                            <button onClick={(e) => { e.preventDefault(); /* Add logic for page 3 */ }}>3</button>
                                        </li>
                                        <li className="pagination-arrow">
                                            <button onClick={(e) => { e.preventDefault(); /* Add logic for next page */ }}>
                                                <i className="fa fa-angle-double-right"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <div className="blog-sidebar mt-mt-lg-0">
                                    <SearchOne />
                                    <LatestPostOne extraClass="mt--40" />
                                    <CategoryOne extraClass="mt--40" />
                                    <TagOne extraClass="mt--40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default BlogPageOne;
