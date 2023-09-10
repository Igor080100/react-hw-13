import React, { FC, useEffect, useState } from 'react';
import { useClicker, useToggle } from '../../hooks';
import * as API from './../../api';
// import { Books } from '../Books/Books';
import { books } from '../../data';


interface IUser {
  id: number;
  name: string;
  email: string;
}

const UserLoader: FC = () => {
  console.log('render');

  //------------------------------------------

  // const [order, setOrder] = useLocalStorage([], 'order');

  //------------------------------------------

  const [isVisible, setVisible] = useToggle(true)

  const count: number = useClicker(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = () => {
    setIsLoading(true);
    API.getUsers()
      .then(loadedUsers => setUsers(loadedUsers))
      .catch(error => setError(error));
    setIsLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  //------------------------------------------

  // const addToOrder = (id: number) => {
  //   const newItem = books.find(item => item.id === id);

  //   setOrder([...order, newItem]);

  // }

  //------------------------------------------

  const userList = users.map((user: IUser) => (
    <article key={user.id}>
      <h2>{user.name}</h2>
      <p>
        email:<a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </article>
  ));

  return (
    <div>
      {/* <Books items={books} addToOrder={addToOrder} /> */}
      <button onClick={setVisible}>Toggle Visible</button>
      <div style={{ color: 'red', fontSize: '40px' }}>{isVisible ? "VISIBLE TEXT" : ''}</div>
      <h2>Users:</h2>
      <p>clicks: {count}</p>
      {isLoading && <div>LOADING...</div>}
      {error && <div>ERROR</div>}
      {userList}
    </div>
  );
};

export default UserLoader;