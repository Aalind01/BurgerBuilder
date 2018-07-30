import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id:'asdasd', name: 'Someone', age: 24 },
      { id:"asdasqwed", name: 'sasdasd', age: 55 },
      { id:"asdacxvsd", name: 'cxvxvxcv', age: 75 }
    ],
    unwanted: 'adadad',
    showPersons: false
  }

  togglePersonsHandled = () => {
    const bShow = this.state.showPersons;
    this.setState({
      showPersons: !bShow
    })
  }

  nameChangeHandler = (event, idx) => {
    const personIndex = this.state.persons.findIndex( (p) => {
      return p.id === idx;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer',
      margin: '10px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            })
          }
          </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] =  {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if( this.state.persons.length <= 2 ){
      classes.push('red');
    }
    if( this.state.persons.length <= 1 ){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}> I am a text</p>
        <button style={buttonStyle} onClick={this.togglePersonsHandled}>Toggle persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
