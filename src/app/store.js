import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/post/postSlice";
import relatedPostsReducer from "../features/relatedPosts/relatedPostsSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
composeWithDevTools;
const store = configureStore(
  {
    reducer: {
      posts: postsReducer,
      post: postReducer,
      relatedPosts: relatedPostsReducer,
    },
  },
  composeWithDevTools()
);

export default store;
