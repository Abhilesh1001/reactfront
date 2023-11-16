export const initialState = {
    name : "",
    email : "",
    phone : "",
    desc : ""
}

export const reducer = (state,action) =>{
    switch(action.type){
        case 'NAME':
            return {
                ...state,
                name : action.value
            }
        case 'EMAIL':
            return {
                ...state,
                email : action.value
            }
        case 'PHONE':
            return {
                ...state,
                phone : action.value
            }
        case 'DESC':
            return {
                ...state,
                desc : action.value
            }
    }
}
