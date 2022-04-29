import React, {useState} from 'react';
import './App.css';
import PeopleList from "./PeopleList";

const initialState = [
  {
    firstName: `Alan`,
    lastName: `Turing`
  }
]

const App = () => {
  const [people, setPeople] = useState(initialState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(`My render function has been invoked!`)

  const save = () => {
    const person = { firstName, lastName };
    setPeople((curPeople) => [...curPeople, person]);
  }

  return (
    <div className="App">
        <PeopleList people={people} />
        First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
        Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
        <input type="button" value="Save" onClick={() => save()} />
    </div>
  );
}

export default App;
