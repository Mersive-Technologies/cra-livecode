import React from "react";

export interface Person {
    firstName: string,
    lastName: string,
}

interface Props {
    people: Person[],
    onEditPerson: (index: number) => void,
    onDeletePerson: (index: number) => void,
}

//people: Person[], onDeletePerson: deleter
export default (props: Props) => {
    return <div>
        Computer Scientists:<br/>
        <ul>
            {props.people.map((p, i) => <li key={i}>{p.firstName} {p.lastName}
                <input type="button" value="📝" alt="edit this person" onClick={() => props.onEditPerson(i)}/>
                <input type="button" value="🗑️" alt="delete this person" onClick={() => props.onDeletePerson(i)}/>
            </li>)}
        </ul>
    </div>
}