import React from 'react';

const SearchOne = ( props ) => {
    return (
        <div className={`widget${ props.style2 === 'enable' ? '-2' : '' } widget-search ${ props.extraClass || '' }`}>
             <form className="search-form">
                <input type="text" className="form-control" placeholder="Search "/>
                <button type="submit" className="search-submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default SearchOne;