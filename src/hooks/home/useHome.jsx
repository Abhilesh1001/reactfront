import { useState } from "react"
import {useDispatch,useSelector} from  'react-redux'
import {getMobileView} from '../../components/feature/user/userSlicer'



export function useHome () {
    const [mode, setMode] = useState("Dark")
    const {hiddenmobileview}  = useSelector((state)=>state.user) 
    const dispatch = useDispatch()

   
    function tooglethem(){
        document.documentElement.classList.toggle("dark")
        setMode(`${mode === 'Dark'?'Light':'Dark'}`)
        dispatch(getMobileView(hiddenmobileview))
       
      }
 return {tooglethem,mode}    
}