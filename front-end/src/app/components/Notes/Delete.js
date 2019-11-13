import React from 'react'
import {connect} from 'react-redux'
import {startDeleteNotes} from '../../action/notesAction'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

function Delete (props){
    console.log('Delete props',props)
    return(
        <div>
            <button className ="btn btn-dark" onClick={()=>{
                props.dispatch(startDeleteNotes(props.id))
            }}>Delete</button>
        </div>
    )
}
export default connect()(Delete)