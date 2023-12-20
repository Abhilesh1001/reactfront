import { useState, useEffect } from 'react'
import { } from '../../components/feature/user/userSlicer'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useHomePro } from '../home/useHomePro'


export const useTracker = () => {
    const { baseurl } = useSelector((state) => state.user)
    const userData = localStorage.getItem("user")
    const user = JSON.parse(userData)
     const [tracker, setTracker] = useState([])
    const [cartData, setCartData] = useState([])
    const [orderDetail, setOrderDetails] = useState('')
    const [adress, setAdress] = useState("null")
    //   console.log('cartdata',cartData,'tracker',tracker)
    const [hanhlecheck, setHandleCheck] = useState("null")
    const [adressData, setAdressData] = useState('')
    const [product, setProduct] = useState('null')
    const { data: dataPro } = useHomePro()
    const [productData, setProductData] = useState('')
    const [handleId,setHandleId] = useState('')
    const [adressId,setAdressId] = useState('')
    const [productDetailId,setProductDetailId] = useState('')

    useEffect(() => {
        orderDetails()
    }, [])


const orderDetails = async () => {
        let token = localStorage.getItem('token')
        const emailData = {
            email: user?.email
        }

        const headers = {
            Authorization: `Bearer ${token}`
        };
        if(user){
            try {
                const response = await axios.post(`${baseurl}/newshop/orderDetail/`, emailData, { headers })
                //   console.log(response.data)
    
                setOrderDetails(response.data)
    
            } catch (error) {
                console.log(error)
            }
        }
    }


    const handleSubmit = async (id) => {


        if (hanhlecheck !== "handlecheck") {
            let data = {
                order_id: parseInt(id),
                email: user?.email,
            }
            let token = localStorage.getItem('token')
            // console.log(token)
            const headers = {
                Authorization: `Bearer ${token}`
            };
            try {
                let response = await axios.post(`${baseurl}newshop/OrderUpdate/`, data, { headers })

                // console.log(response.data)
                setTracker(response.data.order_updates)
                setCartData(JSON.parse(response.data.order[Object.keys(response.data.order)].items_json))
            } catch (error) {
                console.log(error)
            }
        }
        setHandleCheck(`${hanhlecheck === "null" ? 'handlecheck' : "null"}`)
        setHandleId(id)
    }



    const handleCheckOrder = (id) => {
        
        if(adress!=="adress"){
            
            const data = orderDetail.filter((item, index) => {
            if (id === item?.order_id) {
                return item
            }
        })
        console.log(data[0],'data')
        
        const useData = {
            name: data[0]?.name,
            email: data[0]?.email,
            adress1: data[0]?.address1,
            adress2: data[0]?.address2,
            city: data[0]?.city,
            state: data[0]?.state,
            zip: data[0]?.zip,
        }
        // console.log('data',data[0])
        setAdressData(useData)}
        setAdressId(id)
        setAdress(`${adress === "null" ? 'adress' : "null"}`)
    }

    const handleProductDetails = (id) => {

        //    console.log(id)
        if (product !== "product") {

            const data = orderDetail.filter((item, index) => {
                if (id === item?.order_id) {
                    return item
                }
            })

            const filterItem = JSON.parse(data[0].items_json)
            const Product = dataPro?.filter((item) => {
                for (let itemdata in filterItem) {
                    if (parseInt(itemdata) === item?.product_id) {
                        return item
                    }
                }
            })
            setProductData(Product)
        }
        setProductDetailId(id)
        setProduct(`${product === "null" ? 'product' : "null"}`)
    }





    return { orderDetail, handleCheckOrder, handleSubmit, cartData, tracker, hanhlecheck, adress, handleProductDetails, adressData, product, productData,handleId,adressId,productDetailId }
}