import { useState } from "react"

export const useAdressChange =(adressData,dispatch)=>{
    const [inputfiled,setInputField] = useState("null")
    const handleChageAdress =() =>{
        console.log('ok')
        setInputField(`${inputfiled === 'null' ? "input" :'null'}`)
        dispatch({type:"NAME",value:adressData.name})
        dispatch({type:"EMAIL",value:adressData.email})
        dispatch({type:"ADDRESS",value:adressData.adress1})
        dispatch({type:"ADDRESS2",value:adressData.adress2})
        dispatch({type:"CITY",value:adressData.city})
        dispatch({type:"STATE",value:adressData.state})
        dispatch({type:"ZIP",value:adressData.zip})
    }
    

    return {handleChageAdress,inputfiled}
}