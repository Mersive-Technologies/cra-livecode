import React, {useState} from 'react';
import './App.css';
import PeopleList from "./PeopleList";

const initialState = [
  {
    firstName: `Alan`,
    lastName: `Turing`
  }
]

const App: React.FC = () => {
  const [people, setPeople] = useState(initialState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(`My render function has been invoked!`)

  const save = () => {
    const person = { firstName, lastName };
    setPeople((curPeople) => [...curPeople, person]);
  }

  const handleDeletePerson = (id: number) => {
    setPeople(prevPeople => {
      const newPeople = [...prevPeople];
      newPeople.splice(id, 1);
      return newPeople;
    });
  }

  return (
    <div className="App">
        <PeopleList people={people} onDelete={handleDeletePerson} />
        First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
        Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
        <input type="button" value="Save" onClick={() => save()} />
    </div>
  );
}

export default App;
