import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        // declare state in class component
        this.state = {
            person: this.props.person
        }
    }

    increaseNum = () => {
        // setState is a function to CHANGE state of THIS component
        this.setState({
            person: {
                ...this.state.person,
                age: this.state.person.age + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.state.person.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
                <button onClick={() => { this.increaseNum() }}>Birthday Button for {this.state.person.firstName} {this.state.person.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;