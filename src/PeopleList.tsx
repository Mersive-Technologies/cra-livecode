import React from "react";

interface Person {
    firstName: string,
    lastName: string,
}

interface Props {
    people: Person[],
}

export default (props: Props) => {
    return <div>
        Computer Scientists:<br/>
        <ul>
            {props.people.map((p, i) => <li key={i}>{p.firstName} {p.lastName}</li>)}
        </ul>
    </div>
}