import {useSelector} from 'react-redux'    
import axios from 'axios'


export function useContact (data,dispatch) {
    const {baseurl} = useSelector((state)=>state.user)
    

    const hanldeSubmit= async (e)=>{
        e.preventDefault()
        console.log('data',data)
        try {
        let token=localStorage.getItem('token')
        console.log(token,data)
        let response = await axios.post(`${baseurl}newshop/newshonContact/`,data,{
          headers :{
            Authorization : `Bearer ${token}`
          }
        })
        console.log(response)
        }catch(error){
               console.log(error)
        }
        dispatch({type:'NAME',value:""})
        dispatch({type:'EMAIL',value:""})
        dispatch({type:'PHONE',value:""})
        dispatch({type:'DESC',value:""})
        
    }


    return {hanldeSubmit}
}