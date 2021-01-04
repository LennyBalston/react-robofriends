import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bt bb bw2" style={{overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;