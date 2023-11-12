import { useState } from "react"



export function useHome () {
    const [mode, setMode] = useState("Dark")
    function tooglethem(){
        document.documentElement.classList.toggle("dark")
        setMode(`${mode === 'Dark'?'Light':'Dark'}`)
        console.log(mode)
      }
 return {tooglethem,mode}    
}