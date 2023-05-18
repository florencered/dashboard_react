//have an intial state first 
//via context api ypu can access different stuff from asingle place
//conetxt variable is used for passin global variables anywhere in the code 
import { useReducer } from "react";
import { createContext } from "react";
import DarkModeReducer from "./darkModeReducer"; 

const INITIAL_STATE={
    darkMode:false,
}

export const DarkModeContext=createContext(INITIAL_STATE);
//CONTEXT PROVIDER TO REACH THE INITIAL STATE OBJECT GLOBALLY FROM ANYWHERE
//we need reducer hook for writing and wrapping our functions
export const DarkModeContextProvider=({children})=>{
    const [state,dispatch]=useReducer(DarkModeReducer,INITIAL_STATE); 
    return (
        <DarkModeContext.Provider value={{darkMode:state.darkMode,dispatch}}>{children}</DarkModeContext.Provider>
    )
}