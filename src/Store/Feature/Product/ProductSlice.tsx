import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../../Service/constant'; // Update the path based on your file structure

const initialStateValue = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return await fetchProducts();
  }
);

export const ProductSlice = createSlice({
  name: 'product',
  initialState: { value: initialStateValue },
  reducers: {
    productAction: (state, action) => {
      state.value.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.value.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.value.status = 'succeeded';
        state.value.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.value.status = 'failed';
        // state.value.error = action.error.message;
      });
  },
});

export const { productAction } = ProductSlice.actions;

export const productReducer = ProductSlice.reducer;
