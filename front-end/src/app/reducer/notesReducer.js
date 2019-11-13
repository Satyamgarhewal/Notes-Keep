

const notesReducer=(state=[], action)=>{
    // console.log('state',state)
    
    switch(action.type){
        case'SET_NOTES':{
                return [...action.payload]
        }
        case 'DEL_NOTES':{
            return state.filter(str=>str._id!==action.payload._id)
        }
        case 'POST_NOTES':{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default notesReducer