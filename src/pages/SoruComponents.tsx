import React, { useState } from 'react'
import SoruUserComponent from '../component/molecules/SoruUserComponent';
import dataList from '../utils/userlist.json';

function SoruComponents() {
  const list = dataList;
    

    

      // const checkedEvent = (isActive: boolean, index: number ) => {
      //   //   console.log(isActive, index);
      //   // userList[index].isActive = isActive;
      //    let list = userList.map((data, i) => {
      //        if (i === index) data.isActive = isActive
      //        return data

      //        } )
      //        setUserList(list);
        
      // }
      console.log('render list page');
  return (
    <div className='container'>
        <div className='row mt-5'>
            <input type="text" className='form-control' />
        </div>
        <div className='row mt-3 justify-content-center'>
            {
                list.map((data,index) =>{
                    return (
                      <SoruUserComponent isActive={data.isActive} avatar={data.avatar}/>
                    )
                })
            }

            
        </div>
    </div>
  )
}

export default SoruComponents