import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../utils/type";

  
type ProductsType = Product[];
  
interface InitialState {
    products: ProductsType;
    error: string;
  } 

const initialState:InitialState = {
    products : [],
    error:  ''
}

export const fetchProducts =  createAsyncThunk("searchbar/fetchProducts", async()=>{
   
    try {
        const response = await axios.get("http://localhost:3000/api/product")
        return response.data
    } catch (error) {
        throw error
    }

}) 

const productSlice = createSlice({
    name: "searchbarSlice",
    initialState,
    reducers:{},
    extraReducers(builder) {
       builder.addCase(fetchProducts.pending,()=>{

       }),
       builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
       }),
       builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.error = action.error.message ?? "unknown error"
   })
    },
})

export default productSlice.reducer