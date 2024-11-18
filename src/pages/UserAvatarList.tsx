import React from 'react'
import dataList from '../utils/userlist.json';
import UserAvatarComponent from '../component/molecules/UserAvatarComponent';
function UserAvatarList() {
  const list =  dataList;
  
  return (
    <div className="container">
        <div className="row mt-5">
            {
                list.map((data,index)=>{
                    return <UserAvatarComponent 
                            key={index}
                            isActive={data.isActive}
                            avatar={data.avatar}
                            />
                })
            }
        </div>
    </div>
  )
}

export default UserAvatarList