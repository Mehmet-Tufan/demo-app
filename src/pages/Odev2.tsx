import React, { useState } from 'react'

function Odev2() {

    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [age, setAge] = useState(0);
    const [isWrong, setIsWrong] = useState(false);
    const [user, setUser] = useState({
        'userName': '',
        'password': '',
        'rePassword': '',
        'age': 0
    });
    const kaydet = ()=>{
        setUser({
            userName,password,rePassword,age
        });
    }

  return (
    <div className="contanier">
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-4">
                <h1 className='text-center mb-3 text-success'>Register Form</h1>
                <div className="mb-3">
                    <input onChange={evt=>{setUserName(evt.target.value)}} className='form-control' type="text" placeholder='kullanıcı adı' />
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{setPassword(evt.target.value)}} className='form-control' type="password" placeholder='şifre'/>
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{
                        setRePassword(evt.target.value);
                        // DİKKAT!!!!
                        // set işlemi bir dizi fonksiyon tetiklediği için zaman alır bu nedenle
                        // ilgili deği hemen aktif etmez yani set ettiğiniz değer altta hemen kullanılamaz
                        if(evt.target.value === password) setIsWrong(false);
                        else setIsWrong(true);
                       // setIsWrong(!(evt.target.value === password)) // eğer şifreler uyuşmuyor ise TRUE
                        }} className='form-control' type="password" placeholder='şifre doğrula' />
                    {
                        isWrong ? <label className='text-danger'>* şifreler uyuşmuyor</label> : null
                    }
                    
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{setAge(parseInt(evt.target.value))}} className='form-control' type="number" placeholder='yaş'/>
                </div>
                <div className="mb-3 d-grid">
                    <button onClick={kaydet} className='btn btn-secondary'>Yeni Üye</button>
                </div>
                <div>
                <label>userName...: {user.userName} </label>                    
                </div>
                <div>
                <label>password...: {user.password} </label>                    
                </div>
                <div>
                <label>age...: {user.age}</label>                    
                </div>
                
            </div>
            <div className="col-5"></div>
        </div>
    </div>
  )
}

export default Odev2