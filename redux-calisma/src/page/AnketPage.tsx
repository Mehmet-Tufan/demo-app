import React from 'react'
import ButtonList from '../component/molecules/ButtonList'

function AnketPage() {
  return (
    <div className='container'>
        <div className="row">
            <label  className="form-label">Sahip Olduğınız Yazılım Dilleri</label>
        </div>
        <div className="row">
            <ButtonList  />
        </div>
    </div>
  )
}

export default AnketPage