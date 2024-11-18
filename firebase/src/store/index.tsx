import { configureStore } from "@reduxjs/toolkit";



import { 
    productSlice
 } from './feture'

const store = configureStore({
    reducer: {
        product: productSlice
    },
});

export default store