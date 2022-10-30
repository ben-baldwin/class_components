import React, { useState } from 'react';

const PersonCard = (props) => {
    const {person:p} = props;
    const [person, setPerson] = useState(p);
    const {lastName, firstName, age, hairColor} = person;
    const increaseNum = () => {
        // setState is a function to CHANGE state of THIS component
        setPerson({
            ...person,
            age:age+1
        })
    }

        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => {increaseNum() }}>Birthday Button for {person.firstName} {person.lastName}</button>
            </div>
        );
}

export default PersonCard;