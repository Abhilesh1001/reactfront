import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import axios from 'axios'


export const useSearch =(search)=>{
    const [data, setData] = useState('')
    // console.log('qname', queryName)
    const {baseurl} = useSelector((state)=>state.user)
    const navigate = useNavigate()
    // console.log(data)
    useEffect(()=>{
        searchItems()
    },[search])

    const searchItems = async () => {
        const data = {
            "search": search
        }
        // console.log(data)
        try {
            const response = await axios.post(`${baseurl}/newshop/searchItem/`, data)
            // console.log('res', response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    // searchItems()

    // const handdleQuickView = (e)=>{
    //     navigate(`/QuivkView/${id}`)
    // }
  

    return {data,searchItems}
}
