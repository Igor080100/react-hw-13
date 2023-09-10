export function getUsers() {
   return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
}

export function getPosts() {
   return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
}

export function getComments() {
   return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
}
