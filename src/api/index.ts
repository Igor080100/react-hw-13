import axios from 'axios';
// export const getPosts = () => {
//    return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
// }

// export const getUsers = () => {
//    return fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
// }


export const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');
export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');