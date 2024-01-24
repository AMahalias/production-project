import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'AddCommentForm',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticleById.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(
  //       fetchArticleById.fulfilled, (state, action: PayloadAction<Article>
  //       ) => {
  //         state.isLoading = false;
  //         state.data = action.payload;
  //       })
  //     .addCase(fetchArticleById.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })
  // }
})

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
