import React from 'react';

const Person = (props)=>{
    return 
    (   <div>
            <p>This is a {props.name}. I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;