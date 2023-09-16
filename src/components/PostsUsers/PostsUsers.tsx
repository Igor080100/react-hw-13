import React, { useEffect, useReducer } from 'react';
import * as API from './../../api';
import { reducer } from './reducer';

interface User {
   id: number;
   name: string;
}

const RESPONSE_SUCCESS = 'DATA_ALL_RESPONSE_SUCCESS';
const RESPONSE_ERROR = 'DATA_ALL_RESPONSE_ERROR';

const PostsUsers: React.FC = () => {
   const [state, dispatch] = useReducer(reducer, {
      messagesWithAuthor: [],
      error: null
   });

   useEffect(() => {
      Promise.all([API.getPosts(), API.getUsers()])//Завантаженнгя даних
         .then(([postsResponse, usersResponse]) => {
            const posts = postsResponse.data;
            const users = usersResponse.data;
            const usersMap = new Map<number, User>();    // Пошук юзерів по id 
            users.forEach((user: User) => usersMap.set(user.id, user));

            dispatch({     // Надсилаю дані у редюсер
               type: RESPONSE_SUCCESS,
               data: { users, posts } // Надсилаю дані у редюсер
            });
         })
         .catch(error => {
            dispatch({
               type: RESPONSE_ERROR,
               error: error.message
            });
         });
   }, []);

   return (
      <div>
         <h2>Posts</h2>
         {state.messagesWithAuthor.map((m: any) => (
            <article key={m.id}>
               <p style={{ border: '1px solid' }}><span style={{ fontWeight: 'bold' }}>{m.author}</span>: {m.text}</p>
            </article>
         ))}
      </div>
   );
};

export default PostsUsers;