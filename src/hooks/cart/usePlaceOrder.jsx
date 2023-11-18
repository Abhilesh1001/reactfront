import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import {getSum,getTotalSum,getEmptyData} from '../../components/feature/user/userSlicer'



export function usePlaceOreder(dataredu){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cart,user,baseurl} = useSelector((state)=>state.user)
     const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(dataredu)
        console.log(user)
        let data = {
            items_json: JSON.stringify(cart),
            user : user.id,
            name: dataredu.name,
            email: user.email,
            address1: dataredu.address1,
            address2: dataredu.address2,
            city: dataredu.city,
            state: dataredu.state,
            zip: dataredu.zip,
            phoneno: dataredu.phoneno
        }
        try {
            let token = localStorage.getItem('token')
            let response = await axios.post(`${baseurl}newshop/order/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let responseData = response.data
            // console.log('response', responseData)
            // console.log(responseData)
            alert(`your order hasbeen placed and your order Id is ${responseData.order_id} track your order bt tracker and email id`)
            localStorage.removeItem('cart')
            localStorage.removeItem('sum')
            localStorage.removeItem('totalSum')
            dispatch(getSum(0))
            dispatch(getTotalSum(0))
            dispatch(getEmptyData({}))
            navigate('/')

        } catch (error) {
            console.log('error', error)
            alert(error)
            alert('Please login for purchse the item in your cart')
    
        }
        

    }


    return {handleSubmit}
}