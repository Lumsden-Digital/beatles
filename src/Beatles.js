import React from 'react';
import 'C:/Users/ruaidhril/Desktop/ReactCrash/projectreact/projectreact/src/App.css';


function Beatles(props) {

    return(
        <div className='beatles'>
            <h3 className='beatleName'>{props.name}</h3>
            <p className='beatleInstr'>{props.instrument}</p>
        </div>        
    )
}

export default Beatles;