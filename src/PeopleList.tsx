import React, { useCallback } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  people: Person[];
  onDelete: (id: number) => void;
}

const PeopleList: React.FC<Props> = (props) => {
  const { people, onDelete } = props;

  const handleDelete = useCallback(
    (id: number) => {
      onDelete(id);
    },
    [onDelete]
  );

  return (
    <div>
      Computer Scientists:
      <br />
      <ul>
        {people.map((p, i) => (
          <li key={i}>
            {p.firstName} {p.lastName}{' '}
            <button onClick={() => handleDelete(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
