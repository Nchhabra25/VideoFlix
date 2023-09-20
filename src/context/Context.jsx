{/*import React,{ createContext, useEffect, useState } from "react";
import {fetchapi} from '../assets/Api'
export const AppContext=createContext();
export const AppProvider=({children})=>{
    const[loading,setLoading]=useState(false);
    const[squery,setSquery]=useState(false);
    const[cateogeries,setCateogeries]=useState("New");
    const[mobilemenu,setMobilemenu]=useState(false);
    useEffect(()=>{
        fetchSelectedCateogeries(cateogeries)
    },[cateogeries])
    const fetchSelectedCateogeries=(query)=>{
        setLoading(true)
        fetchapi(`search/q=${query}`).then(({res})=>{
            console.log(res);
            //setSquery(res)
            setLoading(false);
        })
    }
    return(
    <AppContext.Provider value={{
        loading,setLoading,
        squery,setSquery,
        cateogeries,setCateogeries,
        mobilemenu,setMobilemenu,
    }}>
        {children}
    </AppContext.Provider>)
}*/}
