import React from 'react';
import './App.css';
import PersonCard from './components/MyNewComponent';
import UserForm from './components/UserForm';

function App() {
  const peopleArray = [
  {
  "lastName": "Doe",
  "firstName": "Jane",
  "age": 45,
  "hairColor": "Black"
  },

  {
  "lastName": "Smith",
  "firstName": "Jon",
  "age": 88,
  "hairColor": "Brown"
  },

  {
  "lastName": "Fillmore", 
  "firstName": "Millard", 
  "age": 50, 
  "hairColor": "Brown"
  },

  {
    "lastName": "Smith", 
    "firstName": "Maria", 
    "age": 62, 
    "hairColor": "Brown"
  }

]
  return (
    <div className="App">
      <UserForm />
      {
        peopleArray.map((person) => {
          return <PersonCard 
          person = {person}></PersonCard>
        })
      }
    </div>
  );
}

export default App;
