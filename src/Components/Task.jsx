import React, { useContext, useState } from 'react'
import {todoit} from '../../context.jsx'

const Task = (props) => {

    const {len,setLen,arr,setarr} = useContext(todoit);


    const [see,setSee]= useState(true)
    var a=false
    const updtchk=()=>{
        see?setSee(false):setSee(true)
        
    }
    const rmv = ()=>{
        const tmparr = [...arr]
        tmparr.splice(props.ind,1)
        setarr(tmparr)
    }
  return (
    <div className='w-full h-20 pl-5 pr-5 bg-zinc-700 border-zinc-600 border-1 rounded-xl flex flex-row items-center justify-evenly gap-5'>
      <h1 onClick={updtchk} className={`mr-auto text-lg cursor-pointer ${!see&&'line-through text-zinc-500'}`}>{(props.ind)+1}. {props.tassk}</h1>
      <button onClick={rmv} className='rounded-full cursor-pointer bg-zinc-950 h-8 w-8 pb-1 hover:bg-black'>x</button>
      
      
      {see?<div className='bg-zinc-950 h-8 cursor-pointer w-8 hover:bg-black' onClick={updtchk}></div>:<input type="checkbox" name="ntg" onClick={updtchk} checked onChange={()=>{a=true}} className={`rounded accent-zinc-950 cursor-pointer h-8 w-8 ${a&&'sr-only'} hover:bg-black`} />}
    </div>
  )
}

export default Task
