import React, { useState } from 'react'
import { IUser } from '../../models/IUser'
import { IUserSoru } from '../../models/IUserSoru';

function UserComponent(user:IUserSoru) {
    const [isActive, setIsActive] = useState(user.isActive);
    const checkedEvent = (evt:any)=>{
        setIsActive(evt.target.checked);
    }
    const getBodyClass = (state: boolean)=>{
        return state ? 'col-3 border m-2 rounded-3 shadow p-4 text-bg-success text-center' : 'col-3 border m-2 rounded-3 shadow p-4 text-bg-secondary text-center'
    }
    console.log('user component render');
  return (
    <div  className={getBodyClass(isActive)
        }>
    
<div className='mb-3'>
    {/* <label className='form-label'>Avatar....: {user.avatar}</label> */}
    <img src={user.avatar} className='border rounded-circle'/>
    
</div>

{/* <div className='mb-3'>
<label className='form-label'>Name..: {user.name}</label>
</div> */}

<div className='mb-3 form-check form-switch'>
<input onChange= {checkedEvent
    // checkedEvent(evt.target.checked, index)
    } className='form-check-input' type="checkbox" role='switch' defaultChecked={isActive}/>

</div>



</div>
  )
}

export default UserComponent