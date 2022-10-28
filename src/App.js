import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  const peopleArray = [
  {"lastName": "Doe", "firstName": "Jane", "age": 45, "hairColor": "Black"}, 
  {"lastName": "Smith", "firstName": "Jon", "age": 88, "hairColor": "Brown"},
  {"lastName": "Fillmore", "firstName": "Millard", "age": 50, "hairColor": "Brown"},
  {"lastName": "Smith", "firstName": "Maria", "age": 62, "hairColor": "Brown"} 
]
  return (
    <div className="App">
      {
        peopleArray.map((person) => {
          return <MyNewComponent
          person = {person}></MyNewComponent>
        })
      }
    </div>
  );
}

export default App;
