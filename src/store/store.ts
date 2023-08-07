import { configureStore } from '@reduxjs/toolkit';
import searchbaSlice from '../features/searchbar/searchbaSlice';
import featureProductSlice from '../features/featuredProductSection/featureProductSlice';

const store = configureStore({
  reducer: {
    searchbar: searchbaSlice, // Use the productsReducer for the products slice
    featuredSection: featureProductSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
