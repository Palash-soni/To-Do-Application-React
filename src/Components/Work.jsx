import React, { useContext } from 'react'
import Task from './Task'
import {todoit} from '../../context.jsx'

const Work = () => {

  const {len,setLen,arr,setarr} = useContext(todoit);
  

  return (
    <div className='w-150 h-full flex flex-col gap-5 mr-14 mb-15'>
      {
      arr.map((elemn,idx)=>{
        
        return <Task key={idx} ind={idx} tassk={elemn}/>
      })
      }
    </div>
  )
}

export default Work
