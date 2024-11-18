import React, { useState } from 'react'
import UrunArama from '../component/molecules/UrunArama'
import UrunListesi from '../component/organisms/UrunListesi'
import Sepet from '../component/organisms/Sepet'
import { IProduct } from '../model/IProduct'

function ProductPage() {
  //  const [sepetList, setSepetList] = useState<IProduct[]>([])
    // const ahmetAbiSepeteEkle = (urun: IProduct) => {
       
    //     setSepetList([...sepetList,urun])
    // }
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-8">                               
                <div className="row">
                    <UrunArama />
                </div>
                <div className="row">
                    <UrunListesi  />
                </div>
            </div>
            <div className="col-4">
                    <Sepet />
            </div>
        </div>
    </div>
  )
}

export default ProductPage