const RESPONSE_SUCCESS = 'DATA_ALL_RESPONSE_SUCCESS';
const RESPONSE_ERROR = 'DATA_ALL_RESPONSE_ERROR';

interface User {
   id: number;
   name: string;
}

interface Post {
   userId: number;
   body: string;
   id: number;
}

interface IState {
   messagesWithAuthor: {
      text: string;
      author: string | undefined;
      id: number;
   }[];
   error: string | null;
}

interface IActionSuccess {
   type: typeof RESPONSE_SUCCESS;
   data: {
      users: Array<User>;
      posts: Array<Post>;
   };
}

interface IActionError {
   type: typeof RESPONSE_ERROR;
   error: string;
}

type TAction = IActionSuccess | IActionError;

export const reducer = (state: IState, action: TAction) => {
   switch (action.type) {
      case RESPONSE_SUCCESS:
         const { data: { users, posts } } = action;


         const usersMap = new Map<number, User>();
         users.forEach((user) => usersMap.set(user.id, user));

         const messagesWithAuthor = posts.map((post) => ({
            text: post.body,
            author: usersMap.get(post.userId)?.name,
            id: post.id
         }));

         return {
            ...state,
            messagesWithAuthor: messagesWithAuthor
         };

      case RESPONSE_ERROR:
         const { error } = action;
         return {
            ...state,
            error
         };

      default:
         return state;
   }
};
