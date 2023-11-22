import {useSelector} from 'react-redux'
import { useState,useEffect} from 'react'
import axios from 'axios'

export function useComment (ProductID,datacomment,dispatchComment,dataReply,dispatchReply) {  
    // console.log(dataReply)  
    const {baseurl,user} = useSelector((state)=>state.user)
    const [commentData, setCommentData] = useState('')
    const [replyCommentData, setReplyCommentData] = useState('')
    // console.log('comment', commentData)
    const [profileData,setProfileData] = useState()
    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        
        // console.log('ok')
        const data = {
            comment: datacomment.comment,
            user: parseInt(user?.id),
            product: parseInt(ProductID.ProductID)
        }
        // console.log('datanew',data)
        try {
            const response = await axios.post(`${baseurl}blogcomment/`, data)
            const res = response.data
            // console.log(res)
            blogcomment()
        } catch (error) {
            console.log(error)
        }
        dispatchComment({type:"COMMENT",value:""})
    }

    useEffect(() => {
        blogcomment()
        profiePicture()
    }, [])


     


    const blogcomment = async () => {
        try {
            const response = await axios.get(`${baseurl}blogcommentview/${ProductID?.ProductID}`)
            const res = response.data
            console.log('response',res)
            let dataitem = []
            for (let data in res) {
                dataitem.push(res[data])
            }
            // console.log('data0', dataitem[0])
            // console.log('data1', dataitem[1])
            // // console.log(dataitem[1][0])
            setCommentData(dataitem[0])
            setReplyCommentData(dataitem[1][0])

        } catch (error) {
            console.log(error)
        }
    }


    const handleReplySubmit = async (e,commentid) => {

 
        e.preventDefault()
        const parent = parseInt(commentid)
        const data = {
            comment: dataReply?.replyComment,
            user: parseInt(user?.id),
            product: parseInt(ProductID.ProductID),
            parent: parent
        }

        try {
            const response = await axios.post(`${baseurl}blogreply/`, data)
            const res = response.data
           
            blogcomment()

        } catch (error) {
            console.log(error)
        }
        dispatchReply({type : "REPLYCOMMENT",value : ""})

    }

    
    const profiePicture = async () => {
        try {
            const response = await axios.get(`${baseurl}/cus/profile/`)
            const res = response.data
            // console.log(res)
            setProfileData(res)

        } catch (error) {
            console.log(error)
        }
    }





    return {handleCommentSubmit,commentData,replyCommentData,handleReplySubmit,profileData}
}