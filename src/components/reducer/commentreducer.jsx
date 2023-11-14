
export const initialState={
   comment : ''
}

export const reducer =(state,action)=>{
        switch(action.type){

          case "COMMENT":
            return {
                ...state,
                comment : action.value
            }
        }
}
    

