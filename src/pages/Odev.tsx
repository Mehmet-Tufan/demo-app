import React, { useState } from 'react'

function Odev() {
    let s1=0;
    let s2=0;
    const [toplam,setToplam] = useState(0);
    const topla = ()=>{
        setToplam(s1+s2);// değişiklik bir method ile olduğu için react bunu anlar ve sayfayı render eder
    }
  
  return (
   <div className="container">
        <div className="mb-2 mt-4">
            <input onChange={evt=>{s1=parseInt(evt.target.value)}} className='form-control' type="number"/>            
        </div>
        <div className="mb-2">
            <input onChange={evt=>{s2=parseInt(evt.target.value)}}  className='form-control' type="number"/>            
        </div>
        <div className="mb-2">
            <button onClick={topla} className='btn btn-info'>Topla</button>
        </div>
        <div className="mb-2">
            <label className='form-label'>Sonuç: {toplam} </label>
        </div>
   </div>
  )
}

export default Odev