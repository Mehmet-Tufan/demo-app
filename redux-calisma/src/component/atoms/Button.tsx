import React from 'react'
interface IButtonProps {
    name: string
}
function Button(props: IButtonProps) {
    const name = props.name
  return (
    <div className='col-3 m-1 p-3 shadow rounded-3 d-grid'>
        <input type="button" value={name} className="btn btn-success" />
    </div>
  )
}

export default Button