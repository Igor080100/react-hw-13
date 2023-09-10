import React, { FC } from 'react';
import { useLoadData } from '../../hooks';
import * as API from './../../api';

interface IComment {
   id: number;
   email: string;
   body: string;
}

const CommentsLoader: FC = () => {
   const { data: comments, isLoading, error } = useLoadData(API.getComments);

   const commentList = comments.map((comment: IComment) => (
      <li key={comment.id}>
         <h4>{comment.email}</h4>
         <h4>{comment.body}</h4>
      </li>
   ))
   return <div >
      <h2>Comments</h2>
      {isLoading && <div>LOADING...</div>}
      {error && <div>ERROR</div>}
      {commentList}
   </div>
};

export default CommentsLoader;
