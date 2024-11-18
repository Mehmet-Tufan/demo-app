import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
import RouterPage from './RouterPage';
import ProductList from './pages/ProductList';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/**
 * store, tüm uygulama içirisinde kullanılacak olan global stateleri içiersinide barındıran ve 
 * bir dğeişiklik olduğun bu değişikliği iligli component a bildiren provide eden bir yapı 
 * kullanır. böyle uygulamanın herhangi bir bileşeninden istenilen store(slice) içerisinse 
 * yer alan state değerine ulaşılabilir, değiştirilebilir, takipe alınılabilir.
 */
root.render(
  <Provider store={store}>
     <RouterPage />
  </Provider>
 
);
