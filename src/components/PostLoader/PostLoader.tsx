import React, { FC, useEffect, useState } from 'react';
import * as API from './../../api';

interface IPost {
  id: number;
  title: string;
  body: string;
}

const PostLoader: FC = () => {
  console.log('render');

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPosts = () => {
    setIsLoading(true);
    API.getPosts()
      .then(loadedPosts => setPosts(loadedPosts))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const postList = posts.map((post: IPost) => (
    <li key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </li>
  ))
  return <div>
    <div>
      <h2>Posts</h2>
      {isLoading && <div>LOADING...</div>}
      {error && <div>ERROR</div>}
      <ul>{postList}</ul>
    </div>
  </div>
};

export default PostLoader;
