import React,{createContext} from "react";


const ActuatorHostContext = createContext('');


export const HostProvider = ()=>{
    return <ActuatorHostContext.Provider value={{}}> 
    </ActuatorHostContext>
}