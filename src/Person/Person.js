import React from 'react';
import Radium from 'radium';

import './Person.css'

const Person = (props) => {
    const styles = {
        '@media ( min-width: 500px ) ': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={styles}>
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    );
}

export default Radium(Person);