import React from 'react';

import './App.css';
import CommentsLoader from './components/CommentsLoader/CommentsLoader';
import PostLoader from './components/PostLoader/PostLoader';
import UserLoader from './components/UserLoader/UserLoader';



function App() {
  return (
    <div className="App">
      <UserLoader />
      <PostLoader />
      <CommentsLoader />
    </div>
  );
}

export default App;
