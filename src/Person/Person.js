import React from 'react';

import './Person.css'

const Person = (props) => {

    return (
        <div className="Person">
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    );
}

export default Person;