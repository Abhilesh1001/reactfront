import { useEffect,useState } from "react"

export const useDebounce =(search)=>{
    const [debounced,setDeboucedvalue] = useState(search)

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setDeboucedvalue(search)
        }, 500);
        return ()=> clearTimeout(timeout)
    },[search])

    return {debounced}
} 