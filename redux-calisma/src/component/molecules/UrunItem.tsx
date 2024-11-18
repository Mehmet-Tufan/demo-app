import React from 'react'
interface IUrunItemProps {
   image: string
   title: string
   price: number
}
function UrunItem(props: IUrunItemProps) {
    const {image, title, price} = props
  return (
    <div className='row m-2 border p-2 rounded-3' style={{width: '95%'}}>
        <div className="col-2">
            <img src={image} style={{width:'40px', height:'40px', borderRadius: '100%'}}  />
        </div>
        <div className="col-7 align-content-center">
            <label className='form-label'>{title}</label>
        </div>
        <div className="col-3 align-content-center">
            <label className='form-label'>{price} $</label>
        </div>

    </div>
  )
}

export default UrunItem