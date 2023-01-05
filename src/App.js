import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { infun,defun } from './Redux/Action'
export default function App() {
  const dispatch=useDispatch();
  const mystate=useSelector((state)=>state.changeTheNumber)
  return (
    <div style={{textAlign:"center",margin:"100px 0 0 0"}}>
      <h4>{mystate}</h4>
      <button onClick={()=>{dispatch(infun())}}>+</button>
      <button onClick={()=>{dispatch(defun())}}>-</button>
    </div>
  )
}
