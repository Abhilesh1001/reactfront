import {useState,useEffect} from 'react'
// import {getUser} from '../../components/feature/user/userSlicer'
import {useSelector} from 'react-redux'
import axios from 'axios'


export function useHomePro(){
    const {baseurl} = useSelector((state)=>state.user)
    const [loading,setLoading] = useState(false)
    const [data,setData] =useState()
    useEffect(()=>{
        product()
    },[])

    const product =  async () =>{

        try {
            let response = await axios.get(`${baseurl}newshop/prod/`)
            setLoading(true)
            let data1 = response?.data
            setData(data1)

        }catch(errors){
            console.log(errors)
        }
    }
    // console.log(data)
    return {data}
}