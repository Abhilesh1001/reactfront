import {useState} from 'react'


export function useMouseEnter(){
    const [divWidth,setDivWidth] = useState()
    const [divHeight,setDivheight] = useState()
    const [divHover,setIsHovered] = useState()


    const handleMouseEnter = (event,index)=>{
        setDivWidth(event.clientX)
        setDivheight(event.clientY)
        setIsHovered(index)
    }

    return {handleMouseEnter}

}

