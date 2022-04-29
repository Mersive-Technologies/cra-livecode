import React, {useState} from 'react';
import './App.css';
import PeopleList, {Person} from "./PeopleList";

const initialState: Person[] = [
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
        const person: Person = {firstName, lastName};
        setPeople((curPeople: Person[]) => [...curPeople, person]);
    }

    const onDeletePerson = (index: number) => {
        setPeople((prevPeople) => {
            const clonedPeople = [...prevPeople]
            clonedPeople.splice(index, 1)
            return clonedPeople
        })
    }

    const onEditPerson = (index: number) => {
        setPeople((prevPeople) => {
            const clonedPeople = [...prevPeople]
            clonedPeople[index] = {firstName: firstName, lastName: lastName}
            return clonedPeople
        })
    }

    return (
        <div className="App">
            <PeopleList people={people} onEditPerson={onEditPerson} onDeletePerson={onDeletePerson} />
            First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
            Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
            <input type="button" value="Save" onClick={() => save()}/>
        </div>
    );
}

export default App;
