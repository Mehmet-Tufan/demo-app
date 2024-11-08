import React, { useState } from 'react';
import swal from 'sweetalert';


function Login() {
  let userName = "";
  let password = "";
  const [isEmty, setIsEmty] = React.useState(false);


  const doLogin = () => {
    if(userName == "" || password == "")
      {
        setIsEmty(true);
        console.log('boş mu...',isEmty);
        return;}
    else{
      setIsEmty(false);
      console.log('boş mu...',isEmty);
    }
    fetch("http://localhost:9090/v1/dev/user/do-login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username:userName,
        password:password
      }) 


    }) 
    .then(data => data.json())
    .then(res => {
      if(res.code == 200){
      swal("Basarılı", res.message, "success");}
      else{
        swal("Hata", res.message, "error");}
    })

    
  }

  console.log('render');

  return (
    <div className='container'>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              {
                isEmty ? <div className='alert alert-warning' role='alert'>
                <h4 className='alert-heading'>UYARI</h4>
                <hr />
                <p>Kullanıcı adı ve sifre boş bırakılamaz. !!! </p>

              </div> :null
              }
              
                <div className="mb-3">
                    <label className='form-label'>Kullanıcı adı</label>
                    <input onChange={evt=>{userName = evt.target.value}} type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şifre</label>
                    <input onChange={evt=>{password = evt.target.value}} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button onClick={doLogin} className='btn btn-success'>Giriş</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login;