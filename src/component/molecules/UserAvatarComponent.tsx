import React, { useState } from 'react'
interface IProps{
    isActive: boolean,
    avatar: string
}
function UserAvatarComponent(props: IProps) {
  const [isActive, setIsActive] = useState(props.isActive);  
  return (
    <div 
    onClick={()=>{        
        setIsActive(!isActive);
    }}
    className={
        isActive ? "col-3 m-3 border p-2 text-bg-success text-center"
                 : "col-3 m-3 border p-2 text-bg-secondary text-center"
    }>
        <img src={props.avatar} className='border rounded-circle' />
    </div>
  )
}

export default UserAvatarComponent