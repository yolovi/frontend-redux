import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
};

export const getAll = createAsyncThunk("post/getAll", async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.log(error);
  }
});

export const getById = createAsyncThunk("post/getById", async (id) => {
  try {
    return await postService.getById(id);
  } catch (error) {
    console.log(error);
  }
});

export const getPostByName = createAsyncThunk(
  "post/getPostByName",
  async (postName) => {
    try {
      return await postService.getPostByName(postName);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  try {
    await postService.deletePost(id);
    return { id };
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = state.posts.filter(
          (post) => post.id !== +action.payload.id
        );
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
