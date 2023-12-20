

export const useSearch=()=>{
    const handleChange = (searchItem) =>{
        console.log('change',searchItem)
    }
    return {handleChange}
}