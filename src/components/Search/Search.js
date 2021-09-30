import React from 'react';

const Search = (props) => {
  
    return (
        <div className='d-flex justify-content-center mt-2'>
            <input className='w-75' type="text" placeholder='Search Food Here' onChange={props.handleSearch}/>
        </div>
    );
};

export default Search;