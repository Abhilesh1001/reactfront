import {useSelector} from 'react-redux'
import { useState,useEffect} from 'react'
import axios from 'axios'

export function useComment ({ProductID}) {
    console.log('product',ProductID)
    const {baseurl,user} = useSelector((state)=>state.user)
    const [comment, setComment] = useState('')
    const [commentData, setCommentData] = useState('')
    const [replyData, setReplyData] = useState('')
    const [replyCommentData, setReplyCommentData] = useState('')
    // console.log('comment', commentData)
    const [handle, setHandle] = useState(false)
    const [handleReply,setHandleReply] = useState(false)

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        // console.log('ok')
        const data = {
            comment: comment,
            user: parseInt(user?.id),
            product: parseInt(ProductID)
        }
        // console.log(data)
        try {
            const response = await axios.post(`${baseurl}blogcomment/`, data)
            const res = response.data
            // console.log(res)
            setHandle(true)
        } catch (error) {
            console.log(error)
        }
        setComment('')
    }

    useEffect(() => {
        blogcomment()
    }, [handle,handleReply])

   

    const blogcomment = async () => {
        try {
            const response = await axios.get(`${baseurl}blogcommentview/${ProductID}`)
            const res = response.data
            console.log(res)
            let dataitem = []
            for (let data in res) {
                dataitem.push(res[data])
            }
            console.log(dataitem)
            console.log('data0', dataitem[0])
            console.log('data1', dataitem[1])
            // // console.log(dataitem[1][0])
            setCommentData(dataitem[0])
            setReplyCommentData(dataitem[1][0])

        } catch (error) {
            console.log(error)
        }
    }

    const handleReplySubmit = (e) => {
        e.preventDefault()
        // console.log('ok')
    }
    // blogcomment()

    const handleClick = async (e) => {
        console.log(e.target.id, replyData)
        // const userId = localStorage.getItem('UserId')
        // const id = localStorage.getItem("ProductID")
        const parent = parseInt(e.target.id)
        const data = {
            comment: replyData,
            user: parseInt(user?.id),
            product: parseInt(),
            parent: parent
        }
        try {
            const response = await axios.post(`${baseurl}blogreply/`, data)
            const res = response.data
            // console.log(res)
            setHandleReply(true)

        } catch (error) {
            console.log(error)
        }
        setReplyData('')

    }
    return {handleCommentSubmit,commentData,replyCommentData}
}