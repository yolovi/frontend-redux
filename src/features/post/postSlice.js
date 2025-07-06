import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

//INITALSTATE
const initialState = {
  posts: [],
  post: {},
  isLoading: false,
};

//THUNK FUNCTIONS
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
    return { id }; // devolvemos manualmente el id --> porque backend solo devuelve un mensaje
  } catch (error) {
    console.error(error);
  }
});

//SLICE
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
        // SOLUCIÓN --> Si la búsqueda devuelve un solo post, lo guardamos como array
        state.posts = Array.isArray(action.payload) //SI es un array
          ? action.payload //guarda el array
          : [action.payload]; // si no lo es --> Envuelve el objeto en un array
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = state.posts.filter(
          (post) => post.id !== +action.payload.id
        );
      });
  },
});

export default postSlice.reducer;
