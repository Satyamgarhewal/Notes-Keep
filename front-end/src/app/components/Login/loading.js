import React from 'react'
import configureStore from '../../store/configureStore'
import {startSetNotes} from'../../action/notesAction'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

function Loading (props){
    let promise1
    return(
        <div className ="container">
            
             <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
             <br/>
             <br/>
             <br/>
             <br/>
            <div className ="row">
                <div className ="col-md-6 offset-md-5">
                <b>    <h3 className ="text-warning"> Notes Keep!</h3> </b>
                {props.dispatch(startSetNotes(props))}
                <div className ="row">
                <div class="spinner-border text-light  mr-2 mt-3" role="status">
  <span class="sr-only">Loading...</span>

</div>
<h4 className = "text-white mt-3">Loading please wait...</h4></div>

                </div>
            </div>
            
        </div>
    )
}

export default connect()(Loading)