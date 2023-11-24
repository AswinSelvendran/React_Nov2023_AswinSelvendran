// List.js
import React from 'react';

const List = ({ throwError }) => {
  const data = [1, 2, 3, 4, 5];

  if (throwError) {
    throw new Error('An error occurred in List component');
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
