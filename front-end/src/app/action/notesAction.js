import axios from 'axios'

export const setNotes=(notes)=>{
    return{
        type:'SET_NOTES',
        payload:notes
    }
}
export const startSetNotes=(props)=>{
    return(dispatch)=>{
        axios.get('http://localhost:3015/notes')
        .then(response=>{
            const notes = response.data
            console.log('returned data',notes)
            dispatch(setNotes(notes))
            setTimeout(function(){
                props.history.push('/notes')
            },5000)
           
        })
    }
}
export const settingNotes =(props)=>{
    return(dispatch)=>{
       axios.get('http://localhost:3015/notes')
       .then(response=>{
           const notes = response.data
           console.log('setting Notes', notes)
           dispatch(setNotes(notes))
           
       })
}
}
export const deleteNotes=(notes)=>{
    return{
        type:'DEL_NOTES',
        payload: notes
        
    }
}

export const startDeleteNotes=(id)=>{
    console.log('id', id)
    return(dispatch)=>{
        axios.delete(`http://localhost:3015/notes/${id}`)
        .then(response=>{
            const notes = response.data
            console.log(notes)
            dispatch(deleteNotes(notes))
        })
    }
}
export const postNotes =(note)=>{
    console.log('postNotes', note)
    return {
        type:'POST_NOTES',
        payload:note
    }
}

export const startPostNotes =(data)=>{
//    console.log(data)
   return(dispatch)=>{
       console.log(data)
       axios.post('http://localhost:3015/notes',data)
       .then(response=>{
           console.log(typeof(response.data))
           const note = response.data
           dispatch(postNotes(note))
       })
   }
}