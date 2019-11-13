import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import AddNote from './Addnote'
import Delete from './Delete'
import Helmet from 'react-helmet'
import configureStore from '../../store/configureStore'
import {settingNotes} from '../../action/notesAction'
function NotesShow (props){
    console.log('props',props.notes )
    // props.dispatch(settingNotes())
    return(
          
            <div >
                  <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
            <div className =" text-white">
           
            <div className ="container  ">
                <div className ="row">
                    
                       <AddNote />
                       {(props.notes.length)?(  
                             props.notes.map(note=>{
                               return(
                                <div className="card col-md-3 ml-5 mr-4 float-auto mt-2  bg-dark border-white mb-5" key ={note._id} >
                                <div className="card-body" key ={note._id}>
                                  <h5 className="card-title bg-dark text-white mr-5">{note.title}</h5>
                                  
                                  <p className="card-text bg-dark text-white" >{note.description}</p>
                                 <Delete  id= {note._id} />
                                </div>
                              </div>   
                               )
                           })):(  <div className ="container">
                           <div className ="row mt-5 offset-md-5">
                        
             <h3 className ="text-warning">No notes available</h3>
            
             </div>
             </div>)
            
             }
                       
            </div>
                    </div>
                    </div>
                    </div>

      
      
    )


}
const mapStateToProps =(state)=>{
    console.log('Inside map state to props', state.notes)
    return{
        notes: state.notes
    }
}
export default connect (mapStateToProps)(NotesShow)