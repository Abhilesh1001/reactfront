import React from 'react'
import { useComment } from '../../../hooks/comment/useComment'

const Comment = (ProductID) => {
    const { handleCommentSubmit, commentData, replyCommentData } = useComment(ProductID)
    console.log('data', commentData, replyCommentData)


    return (
        <div className=' top-[100px] relative'>
            <div>
                <div className='text-3xl mt-4'>Comment</div>
                <div className=''>
                    <form onSubmit={handleCommentSubmit} className=''>
                        <input type="text" className='w-[80%] mr-4 text-2xl my-2 rounded' />
                        <div><button type='submit' className=' bg-slate-300 p-2 rounded'>Submit</button></div>

                        {
                            Object.keys(commentData)?.map((item, index) => {
                                // const data = commentData[item]
                                // console.log(commentData[item])
                                return <div key={index}>
                                    <div>
                                        <div className=' bg-green-100 flex'>
                                            <div className='w-20 h-20 bg-green-400 mt-2 rounded mr-2  '>
                                                   
                                            </div>
                                            <div>
                                                <div>{commentData[item].user}</div>
                                                <div>{commentData[item].comment}</div>
                                                <div>{commentData[item].time}</div></div>
                                         </div>
                                    </div>
                                    <div>
                                        <div className='text-xl'></div>
                                        <div className='ml-[50px]'>
                                            
                                            {
                                                replyCommentData[commentData[item].sno]?.map((commentitem, indexes) => {
                                                    console.log(commentitem)
                                                    return <div key={indexes} className='flex'>
                                                        <div className='w-20 h-20 bg-green-400 mt-2 rounded mr-2' >

                                                        </div>
                                                        <div>
                                                        <div>{commentitem.user}</div>
                                                        <div>{commentitem.comment}</div>
                                                        <div>{commentitem.time}</div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>

                                    </div>

                                </div>
                            })
                        }
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Comment