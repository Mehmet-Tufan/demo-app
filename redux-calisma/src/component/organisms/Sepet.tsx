import React from 'react'
import UrunItem from '../molecules/UrunItem'
import { IProduct } from '../../model/IProduct'
import { useAppSelector } from '../../store'
interface ISepetProps {
    sepetList: IProduct[]
}
function Sepet() {
    const sepetList: IProduct [] = useAppSelector(gState=> gState.product.sepetListesi);
    console.log('sepet render');
    
  return (
    <div className='row p-3 rounded-3 ms-2'  style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
        <div className="col">
            <div className="row">
                <div className="col">
                    <label  className="form-label">Sepet</label>
                </div>
                <div className="col text-end">
                    <label className='form-label'>5 adet ürün</label>
                </div>
                <hr />
            </div>
            <div className="row">
                {
                    sepetList?.map((urun,index) => {
                  return  <UrunItem key={index} image={urun.thumbnail} title={urun.title} price={urun.price} />
                })
                }
                
                
                <hr />
                <label className='form-label'>Toplam : 125.000 $</label>
                <label className='form-label'>Kdv : 25.000 $</label>
                <label className='form-label'>G.Toplam : 125.000 $</label>


            </div>

            <div className="row">
                <input type="button" value="SATIN AL"  className='btn btn-success'/>
            </div>
        </div>
    
    </div>
  )
}

export default Sepet