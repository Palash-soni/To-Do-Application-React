import { createContext, useState } from "react";


export const todoit = createContext();

function TodoProvider({children}){
    const [arr,setarr] = useState([])
    const [len,setLen] = useState(arr.length)
    return (
        <todoit.Provider value={{len,setLen,arr,setarr}}>
            {children}
        </todoit.Provider>
    );
}

export default TodoProvider;

