import React, { useContext, useState } from 'react'
import {todoit} from '../../context.jsx'


const Textarr = () => {
    const [val,setval] = useState("")
        const {len,setLen,arr,setarr} = useContext(todoit);
    

    const updt = (e)=>{
        setval(e.target.value)

    }

    const addval=()=>{
      if(val.trim()===''){
        alert("Please enter any task")
        setval('')
      }
      else{
        setarr(prev=>[...prev,val])
        setval('')
        
      }

    }

    const keyy = (e)=>{
      if(e.key==='Enter'){
        addval();
      }
    }
  return (

    <div>
      <input type='text' onKeyDownCapture={keyy} onChange={updt} value={val} placeholder='What To Do.....' className='h-15 w-150 rounded bg-white pl-5 text-black focus:outline-none focus:ring-0' />
      <button onClick={addval} className='rounded cursor-pointer bg-zinc-800 h-14.5 w-14.5 text-3xl pb-1.5 relative right-[59px] top-[3px] hover:bg-black'>+</button>
    </div>
  )
}

export default Textarr
