import {useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'

export function useCatHome () {
    const [loading,setLoading] = useState(false)
    const [data,setData] =useState()
    const {baseurl} = useSelector((state)=>state.user)
    useEffect(()=>{
        product()
    },[])
    
    const product =  async () =>{

        try {
            let response = await axios.get(`${baseurl}newshop/categorywiseview/`)
            setLoading(true)
            let data1 = response?.data
            setData(data1)

        }catch(errors){
            console.log(errors)
        }
    }

    return {data,loading}
}