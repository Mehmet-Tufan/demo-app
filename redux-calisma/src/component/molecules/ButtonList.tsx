import React from 'react'
import TekList from '../../utils/TekList.json'
import Button from '../atoms/Button';
interface ITekList {
    id: number,
    name: string
    type: string
}
function ButtonList() {
    const teknikListe: ITekList[] = TekList;
  return (
    <>
    {
        teknikListe.map((item,index) => (
            <Button key={index} name={item.name} />
        ))
    }
    </>
  )
}

export default ButtonList