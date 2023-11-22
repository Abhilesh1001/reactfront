import React, { useReducer, useState } from 'react'
import { useComment } from '../../../hooks/comment/useComment'
import { reducer, initialState } from '../../reducer/commentreducer'
import {reducerReply,initialStatereplly} from '../../reducer/replyreducer'
import { useSelector } from 'react-redux'

const Comment = (ProductID) => {
    const {user,baseurl} = useSelector((state)=>state.user)
     const [display,setDisplay] = useState("hidden")
    const [datacomment, dispatchComment] = useReducer(reducer, initialState)
    const [replyId,setReplyId] = useState()
    const [dataReply,dispatchReply] = useReducer(reducerReply,initialStatereplly)
    const { handleCommentSubmit, commentData, replyCommentData,handleReplySubmit,profileData } = useComment(ProductID, datacomment, dispatchComment,dataReply,dispatchReply)
    function handleClick (e) {
        setReplyId(e.target.id)
        setDisplay(`${display==="hidden"?"block":"hidden"}`)
    }



    return (
        <div className='relative'>
            <div> 
                <div className=' xl:w-[700px] lg:w-[400px] md:w-[380px] w-[340px] '>
                    <div className='text-3xl mt-4'>Comment</div>
                    <form onSubmit={handleCommentSubmit} >
                        <input type="text" className=' mr-4 text-2xl my-2 rounded xl:w-[80%] lg:w-[80%] md:w-[85%]' value={datacomment.comment} onChange={(e) => dispatchComment({ type: "COMMENT", value: e.target.value })} />
                        {user!== null && <div><button type='submit' className=' bg-slate-300  dark:bg-gray-800 p-2 rounded'>Submit</button></div>}
                    </form>

                </div>
                <div className='w-full h-[500px] overflow-scroll overflow-x-hidden'>
                    <div className='relative '>
                        {
                            Object.keys(commentData)?.map((item, index) => {
                            
                                return <div key={index}>
                                    <div>
                                        <div className=' flex'>
                                            <div className='w-20 h-20 mt-2 rounded mr-2 bg-red-100 flex flex-shrink-0 '>
                                            <div className='w-[100%] items-center flex'>
                                            {profileData?.map((items,indexs)=>{
                                                                console.log(items.user ,commentData[item].userId)
                                                                if(parseInt(items.user) === parseInt(commentData[item].userId)) {
                                                                    return <div key={indexs} className=' w-full flex justify-center'>
                                                                        <img src={`${baseurl}${items.profile_picture}`} className='w-[80%] rounded' alt="No Pic" />
                                                                    </div>
                                                                }

                                                            })}
                                            </div>
                                            </div>
                                            <div>
                                                <div className=''>{commentData[item].user.charAt(0).toUpperCase() + commentData[item].user.slice(1) }</div>
                                                <div className='w-60'>{commentData[item].comment}</div>
                                                <div>{commentData[item].time}</div></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-xl'></div>
                                        <div className='md:ml-[100px] ml-10 '>

                                            {
                                                replyCommentData[commentData[item].sno]?.map((commentitem, indexes) => {
                                                   
                                                    return <div key={indexes} className='flex'>
                                                        <div className='w-20 h-20 justify-center items-center bg-green-400 mt-2 rounded mr-4 flex 
                                                        lex-shrink-0' >
                                                            {profileData?.map((item,index)=>{
                                                                // console.log(item.user ,commentitem.userId)
                                                                if(parseInt(item.user) === parseInt(commentitem.userId)) {
                                                                    return <div key={index} className=' w-full flex justify-center'>
                                                                        <img src={`${baseurl}${item.profile_picture}`} className='w-[80%] rounded' alt="No Pic" />
                                                                    </div>
                                                                }

                                                            })}

                                                        </div>
                                                        <div>
                                                            <div>{commentitem.user.charAt(0).toUpperCase() + commentitem.user.slice(1)}</div>
                                                            <div className='bg  w-[200px]'>{commentitem.comment}</div>
                                                            <div>{commentitem.time}</div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                            {user!== null && <div ><button type='button' className='bg-slate-300 ml-10 dark:bg-gray-800 p-2 my-2 rounded' id={`${commentData[item]?.sno}`} onClick={(e)=>handleClick(e)} >Reply</button></div>}

                                            {replyId ===commentData[item]?.sno.toString() &&  <div className={`border-white border-2 p-2 m-4 rounded-xl ml-10 ${display}`}>
                                                <form onSubmit={(e)=>handleReplySubmit(e,commentData[item].sno)} >
                                                <input type="text" value={dataReply.replyComment} className='w-[60%] p-2 rounded-xl' onChange={(e)=>dispatchReply({type:"REPLYCOMMENT",value : e.target.value})} />
                                                <div><button type='submir' className='bg-slate-300 dark:bg-gray-800 p-2 my-2 rounded'>Submit</button></div>
                                                </form>
                                            </div>}

                                        </div>

                                    </div>

                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment