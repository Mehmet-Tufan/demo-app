/**
 * Burada global olarak tutacağımız dataları tanımlıyor olacağız ve
 * bunları state içerisinde burada barındırıyor olacağız. Ayrıca 
 * fetch işlemlerini daha düzenli ve organize olarak burada 
 * kontrol edeceğiz.
 * Slice tasarlamak için 3 işlem adımı gereklidir.
 * 1- ihtiyaç duyulan state listesini hazırlarız gerekli oldukça ekleme yapılır.
 * 2- opsiyonel olmakla birlikte,slice bir sayfayı sadece state olarak yönetmek 
 * için kullanılacak ise bu adım atlanır. Ancak daha sonra ekleme yapılabilir.
 * fetch işlemleri için kullanılacak fonksiyonları burada tanımlarız.
 * 3- state lerin durumlarını kontrol etmek için kullanılan yapıyı 
 * burada kodluyoruz.
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//1- state ler tanımlanır
const initialStateProduct = {
    productList: [],
    isLoading: false,
    product: {},
    isProductLoading: false,
    findProduct: {},
    isFindProductLoading: false,
}

//2. fetch işlemleri
/**
 * AsyncThunk kullanımı
 * 1. name: her fetch işlemi için oluşturulacak asyncthunk özel bir isme sahip o
 * olmalıdır. Aynı isme sahip methodlar sorun çukartır. sorun şöyle cereyan eder;
 * eğer ismi aynı olan 2 method var ise, hangisi son olarak biterse onun döndüğü 
 * değerler ikisinede iletilir.
 * 2. action: fetch işlemini gerçekleştirip data döneceğiniz bir method yazıyorsunuz.
 * buraya DİKKAT!!!!
 * action işlemi asenkron bir işlem olarak tanımlanır. çünkü arka planda 
 * başka bir thread te çalışır ve işlem bitisinde bilgilerini döner
 */
export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
   async ()=>{
     console.log('2- fetchGetAllProducts çalıştı');
       return await fetch('https://dummyjson.com/products')
        .then(data=>data.json())
    }
)

//3. state lerin yönetilmesi.
/**
 * createSlice in oluşturulmasu
 * 1. name: burada slice a bir ad veriyorsunuz bu ad uygulama içinde çağırımı yapılacak olan addır.
 * 2. initialState: bu da yukarıda oluşturulan (1. madde) default değeri bu sclice içerine eklemek için 
 * kullanılır. Çünkü, durumların değiştiğinden haberdar olmak için ilk değerlerine ihtiyaç vardır.
 * 3. reducers: state içerisine aktarılan değerlerin değiştirilmesi için kullanılır.
 * 4. extraReducers: fetch işlemlerinn durumlarını kontrol ederek, initialState üzsdrinde değişşiklik
 * yapmak için kullanılır. 
 */
const productSlice = createSlice({
    name: 'product',
    initialState: initialStateProduct,
    reducers: {},
    extraReducers: (build)=>{
            build.addCase(fetchGetAllProducts.pending,(state)=>{
                // eğer fetch işlemi devam ediyor bitmemiş ise yüklenir true olsun
                console.log('1- fetchGetAllProducts DEVAM EDİYOR');
                state.isLoading = true;
            });
            build.addCase(fetchGetAllProducts.fulfilled,(state,action)=>{
                // fetch işlemi tamamlandı.
                console.log('3- fetchGetAllProducts BİTTİ');
                state.isLoading = false;
                state.productList = action.payload.products
            });
            build.addCase(fetchGetAllProducts.rejected, (state)=>{
                // fetch işlemi hatalı bir şekilde sonlanır ise 
                state.isLoading = false;
            });
    }
});

export default productSlice.reducer;