import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../../Service/constant'; // Update the path based on your file structure

const initialStateValue = {
  products: [],
  status: 'idle',
  error: null,
  isFavorite: false,
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return await fetchProducts();
  }
);

export const ProductSlice = createSlice({
    name: 'product',
    initialState: initialStateValue, 
    reducers: {
      productAction: (state, action) => {
        state.products = action.payload; 
      },
      toggleFavorite: (state:any, action) => {
        const itemToUpdate = state.products.find((item:any) => item.id === action.payload);
        if (itemToUpdate) {
          itemToUpdate.isFavorite = !itemToUpdate.isFavorite;
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload; 
        })
        .addCase(fetchProductsAsync.rejected, (state:any, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

export const { productAction , toggleFavorite} = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
