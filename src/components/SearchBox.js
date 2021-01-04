import React from 'react';


const SearchBox = (props) => {
    return(
        <React.Fragment>
            <input className="bg-yellow black ma3 pa2 br3" 
            type="search" 
            placeholder="search robots" 
            onChange={props.searchChange}

            />
        </React.Fragment>
    );
}

export default SearchBox;
