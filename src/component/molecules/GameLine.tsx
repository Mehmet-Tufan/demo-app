import React from 'react'
import GameBall from '../atoms/GameBall'
interface IGameLineProps{
    teamNumber: number, // takım numarası 1-2
    pointList: boolean[] // bildikleri soru adedi  [true,true,false,false......]
}
function GameLine(props: IGameLineProps) {
    console.log('game line render');
   
  return (
    <div className={props.teamNumber === 1 ? 'col-12 p-2 shadow rounded-4' :'col-12 p-2 shadow rounded-4 d-flex flex-row-reverse'} >
        {
            // bize gelen true,false listesini dönerek topları listeliyoruz.
            props.pointList.map((data,index)=>{
                return <GameBall key={index} isFill={data} teamNumber={props.teamNumber}/>
            })
        }
    </div>
  )
}

export default GameLine