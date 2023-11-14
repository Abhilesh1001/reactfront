export const initialStatereplly = {
    replyComment : ""
}

export const reducerReply =(state,action) =>{

    switch(action.type){
        case "REPLYCOMMENT":
            return {
                ...state,
                replyComment : action.value
            }
    }

}