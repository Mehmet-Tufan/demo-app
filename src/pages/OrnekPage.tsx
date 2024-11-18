import React,{useState} from 'react'
import CheckIcons from '../component/molecules/CheckIcons';
import OzelCheckBox from '../component/atoms/OzelCheckBox';
function OrnekPage() {

console.log('ornek page render');
  return (
    <div className='container'>
        <div className="row mt-4">
            <h1>Uzmanlık yaptığınız alanları seçiniz.</h1>
            <OzelCheckBox name={'Yazilim'}/>
            <OzelCheckBox name={'Donanım'}/>
            <OzelCheckBox name={'Network'}/>
            <OzelCheckBox name={'Arch'}/>
            <OzelCheckBox name={'Müdür'}/>
            <OzelCheckBox name={'Şef'}/>
            
            <div className="mb-2 mt-2">
                <button className='btn btn-danger'>Denetle</button>
            </div>
            <CheckIcons yazilim={false} />
        </div>
    </div>
  )
}

export default OrnekPage