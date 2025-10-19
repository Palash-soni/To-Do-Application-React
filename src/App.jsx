import React, { useContext, useEffect } from 'react'
import Textarr from './Components/Textarr'
import Work from './Components/Work'
import { todoit } from '../context';

const App = () => {

    const {len,setLen,arr,setarr} = useContext(todoit);
  

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-15'>
        <h1 className='text-6xl text-gray-400 mt-30 mb-10'>To-Do App</h1>
        <Textarr />
        <Work />
      </div>
    </>
  )
}

export default App
