import React, { useReducer, useState } from 'react'
import { useComment } from '../../../hooks/comment/useComment'
import { reducer, initialState } from '../../reducer/commentreducer'
import {reducerReply,initialStatereplly} from '../../reducer/replyreducer'

const Comment = (ProductID) => {
    const [display,setDisplay] = useState("hidden")
    const [datacomment, dispatchComment] = useReducer(reducer, initialState)
    const [replyId,setReplyId] = useState()
    const [dataReply,dispatchReply] = useReducer(reducerReply,initialStatereplly)
    const { handleCommentSubmit, commentData, replyCommentData,handleReplySubmit } = useComment(ProductID, datacomment, dispatchComment,dataReply,dispatchReply)
    function handleClick (e) {
        console.log('ok')
        console.log('data',e.target.id)
        setReplyId(e.target.id)
        setDisplay(`${display==="hidden"?"block":"hidden"}`)
        console.log(display)
    }

    return (
        <div className='relative'>
            <div>
                <div className=''>
                    <div className='text-3xl mt-4'>Comment</div>
                    <form onSubmit={handleCommentSubmit} >
                        <input type="text" className='w-[80%] mr-4 text-2xl my-2 rounded' value={datacomment.comment} onChange={(e) => dispatchComment({ type: "COMMENT", value: e.target.value })} />
                        <div><button type='submit' className=' bg-slate-300  dark:bg-gray-800 p-2 rounded'>Submit</button></div>
                    </form>

                </div>
                <div className='w-full h-[500px] overflow-scroll overflow-x-hidden'>
                    <div className='relative '>
                        {
                            Object.keys(commentData)?.map((item, index) => {
                                console.log(commentData[item].sno,item)
                                return <div key={index}>
                                    <div>
                                        <div className=' flex'>
                                            <div className='w-20 h-20 mt-2 rounded mr-2  '>

                                            </div>
                                            <div>
                                                <div className=''>{commentData[item].user.charAt(0).toUpperCase() + commentData[item].user.slice(1) }</div>
                                                <div>{commentData[item].comment}</div>
                                                <div>{commentData[item].time}</div></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-xl'></div>
                                        <div className='ml-[100px]'>

                                            {
                                                replyCommentData[commentData[item].sno]?.map((commentitem, indexes) => {
                                                    // console.log(commentitem)
                                                    return <div key={indexes} className='flex'>
                                                        <div className='w-20 h-20 bg-green-400 mt-2 rounded mr-4' >

                                                        </div>
                                                        <div>
                                                            <div>{commentitem.user.charAt(0).toUpperCase() + commentitem.user.slice(1)}</div>
                                                            <div>{commentitem.comment}</div>
                                                            <div>{commentitem.time}</div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                            <div ><button type='button' className='bg-slate-300 dark:bg-gray-800 p-2 my-2 rounded' id={`${commentData[item]?.sno}`} onClick={(e)=>handleClick(e)} >Reply</button></div>

                                            {replyId ===commentData[item]?.sno.toString() &&  <div className={`border-white border-2 p-2 m-4 rounded-xl ${display}`}>
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