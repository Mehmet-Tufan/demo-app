import React, { useState } from 'react'
import UserComponent from '../component/molecules/UserComponent';

function UserListComponents() {
  /**
   * useState, bir değişkeni sarmalayarak react tarafından yönetilmesini sağlar, böylece bu 
   * değişkenin state inde olacak bir değişiklik bilinir ve ilgili component tekrardan 
   * render edilir. Böylece değişkende olan değişiklik sayfaya yansıtılmış olur.
   * useState(DEFAULT_VALUE) eğer bir değişkene ilk başlangıç değeri atayacak iseniz
   * parantezleri içerisine değer vermeniz yeterlidir.
   * DİKKAT!!!!
   * bir değişkenin değiştiğinin react tarafından anlaşılması için set methodunbun mutlaka 
   * tetiklenmesi gerekli, bu nedenle değişnenin değerini = atama operatörü 
   * kullanarak dğeiştirmek sayfada değişikliğe neden olmaz.
   */  
  const [userList, setUserList] = useState([{
    "userName": "rbumpas0",
    "name": "Rani Bumpas",
    "isActive": false
  }, {
    "userName": "ewindridge1",
    "name": "Esra Windridge",
    "isActive": true
  }, {
    "userName": "lverne2",
    "name": "La verne Andress",
    "isActive": false
  }, {
    "userName": "gburnham3",
    "name": "Gardy Burnham",
    "isActive": true
  }, {
    "userName": "tabrashkin4",
    "name": "Talia Abrashkin",
    "isActive": false
  }, {
    "userName": "gchittock5",
    "name": "Georgie Chittock",
    "isActive": true
  }, {
    "userName": "rgreenmon6",
    "name": "Reube Greenmon",
    "isActive": true
  }, {
    "userName": "mcundey7",
    "name": "Megan Cundey",
    "isActive": true
  }, {
    "userName": "dwilsone8",
    "name": "Dyane Wilsone",
    "isActive": true
  }, {
    "userName": "snorwood9",
    "name": "Scotty Norwood",
    "isActive": false
  }, {
    "userName": "jaspolea",
    "name": "Jeniffer Aspole",
    "isActive": false
  }, {
    "userName": "mparissb",
    "name": "Malissa Pariss",
    "isActive": true
  }, {
    "userName": "spynerc",
    "name": "Sax Pyner",
    "isActive": false
  }, {
    "userName": "neynaudd",
    "name": "Nicola Eynaud",
    "isActive": false
  }, {
    "userName": "cdichee",
    "name": "Claudius Diche",
    "isActive": true
  }]);

  /**
   * DİKKAT!!!!!
   * bir arrow fonksiyon eğer ek parametre almayacak ise ilgili methodların gövdelerine direkt
   * sarılarak kullanılabilir. Mesela:
   * 1.Adım:
   *  const checkedEvent = (evt: any){}
   * 2. Adım
   *  onChange={checkedEvent}
   * buradaki kullanım onChange propsunun içinde zaten evt parametresi olduğu için ek bir 
   * kullanıma gerek kalmadan checkedEvent eklenebiliyor.
   * Ancak bir arrow method içinde özel ek parametreler istiyor is ilgili handle method ayrı bir gövdeye 
   * sahip olacak şekilde kodlanmalıdır. Mesela:
   * 1. Adım:
   * const checkedEvent = (isActive: boolean, index: number )=>{}
   * 2. Adım: 
   * onChange= {evt=>{ checkedEvent(DEĞER,DEĞER)}}
   * 
   */
  
  console.log('user component list page render');
  return (
    <div className="container">
        <div className="row mt-5 mb-3">
            <input type="text" className="form-control" />
        </div>
        <div className="row mt-3 justify-content-center">
            {
                userList.map((user,index)=>{
                    return( 
                        <UserComponent key={index} userName={user.userName} name={user.name} isActive={user.isActive} />
                    ) 
                })
            }
            

        </div>
    </div>
  )
}

export default UserListComponents