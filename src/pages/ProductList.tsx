import React,{useState,useEffect} from 'react'
import  {
    dataProductList,
    dataProperties
} from '../utils/data'
import CheckBox from '../component/atoms/CheckBox';
import UrunCards from '../component/molecules/UrunCards';
import { fetchGetAllProducts } from '../store/feature/productSlice';
import { useDispatch } from 'react-redux';
function ProductList() {
  const [kategoriler, setKategoriler] = useState(dataProperties);
  const [urunler, setUrunler] = useState(dataProductList);
  const kategoriList = ()=>{
    return kategoriler.map((data,index)=>{
                    return ( <div className='col'>
                                <CheckBox name={data} key={index}/>
                            </div>                    
                    )
                })
  }
 const urunList = ()=>{
    return urunler.map((urun,index)=>{
        return   <div className="col-4">
                        <UrunCards key={index} urun={urun}/>
                    </div>
    })
 }
 /**
  * asyncThunk, direkt çağırılamaz, tetiklenmek için bir 
  * aracıya ihtiyaç duyarlar. Neden, çünkü tetiklendiklerinin
  * sclice tarafından bilinmesine ihtiyaç vardır.
  * burada bunu tetikleyen react kodu useDispatch() dir.
  */
  const dispatch = useDispatch<any>();
  dispatch(fetchGetAllProducts());

 return (
    <div className="container">
        <div className="row mt-5 shadow p-2 justify-content-center">
            <div className='col-8'>
                <div className="row">
                    {
                        kategoriList()
                    }
                </div>
            </div>           
        </div>
        <div className="row mt-3 shadow p-2 justify-content-center">
                  {
                    urunList()
                  }
        </div>
    </div>
  )
}

export default ProductList