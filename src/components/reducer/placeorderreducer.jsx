
export const initialState = {
    name :'',
    address1 :"",
    address2 : "",
    city :"",
    state : "",
    zip : "",
    phoneno : "",
}

export const reducer =(state,action)=>{
        switch(action.type){
            case 'NAME':
                return {
                    ...state,
                    name : action.value
                }
            case 'ADDRESS':
                return {
                    ...state,
                    address1 : action.value
                }
            case 'ADDRESS2':
                return {
                    ...state,
                    address2 : action.value
                }
            case 'CITY':
                return {
                    ...state,
                    city : action.value
                }
            case 'STATE':
                return {
                    ...state,
                    state : action.value
                }
            case 'ZIP':
                return {
                    ...state,
                    zip : action.value
                }
            case 'PHONE':
                return {
                    ...state,
                    phoneno : action.value
                }
        }
}

