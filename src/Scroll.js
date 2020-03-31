import React from 'react';

const Scroll=(props)=>{
    return (
        <div style={{border:'solid 2px black',overflowY:'scroll',height:'70vh' }}>
            {props.children}
        </div>
    );
};
export default Scroll;