
// Step 1

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../model/IProduct";
interface IProductState {
    productList : IProduct[],
    isProductListLoading : boolean,
    sepetListesi : IProduct[],
    isSepetListesiLoading : boolean
}
const initialProductState: IProductState = {
    productList : [],
    isProductListLoading : false,
    sepetListesi : [],
    isSepetListesiLoading : false
}

// Step 2

export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
    async () => {
     return await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>data)
        
    }
);

// Step 3

const productSlice = createSlice({
    name : 'product',
    initialState : initialProductState,
    reducers: {
        addSepetList(state, action: PayloadAction<IProduct>) {
            const list: IProduct[] = state.sepetListesi;
            list.push(action.payload);

            state.sepetListesi = list

        }
    },
    extraReducers: (build)=>{
        //fetch işlemleri
        build.addCase(fetchGetAllProducts.pending, (state)=>{
            state.isProductListLoading = true;
        });

        build.addCase(fetchGetAllProducts.fulfilled, (state, action)=>{
            state.isProductListLoading = false;
            state.productList = action.payload.products;
            
        });

    }
});
export const {addSepetList} = productSlice.actions
export default productSlice.reducer;