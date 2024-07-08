import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, toggleSaved, updateLikes } from "./postAPI";

const initialState = {
  post: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  const post = getPost(id);
  return post;
});

export const updateLikesAsync = createAsyncThunk(
  "post/updateLikes",
  async ({ id, likes }) => {
    const postLike = await updateLikes({ id, likes });

    return postLike;
  }
);

export const toggleSavedAsync = createAsyncThunk(
  "post/toggleSave",
  async ({ id, isSaved }) => {
    const postSave = await toggleSaved({ id, isSaved });
    return postSave;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.post = [];
        state.error = action.error?.message;
      })
      .addCase(updateLikesAsync.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(updateLikesAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post.likes = payload.likes;
      })
      .addCase(updateLikesAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error?.message;
      })
      .addCase(toggleSavedAsync.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(toggleSavedAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post.isSaved = payload.isSaved;
      })
      .addCase(toggleSavedAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = error?.message;
      });
  },
});

export default postSlice.reducer;
