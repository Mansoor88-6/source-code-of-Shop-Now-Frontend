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

export const fetchFeaturedProducts =  createAsyncThunk("featuredSection/fetchProducts", async()=>{
   
    try {
        const response = await axios.get("http://localhost:3000/api/product?category=Banner")
        return response.data
    } catch (error) {
        throw error
    }

}) 

const featuredProductSlice = createSlice({
    name: "featureProductSlice",
    initialState,
    reducers:{},
    extraReducers(builder) {
       builder.addCase(fetchFeaturedProducts.pending,()=>{

       }),
       builder.addCase(fetchFeaturedProducts.fulfilled,(state,action)=>{
            state.products = action.payload
       }),
       builder.addCase(fetchFeaturedProducts.rejected,(state,action)=>{
            state.error = action.error.message ?? "unknown error"
   })
    },
})

export default featuredProductSlice.reducer