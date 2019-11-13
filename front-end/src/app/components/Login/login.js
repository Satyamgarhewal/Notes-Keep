import React from 'react'
import LoginForm from './LoginForm'
import axios from '../../config/axios'
// import configureStore from '../../store/configureStore'
// import {startSetNotes} from '../../action/notesAction'
class Login extends React.Component{
    handleSubmit=(data)=>{
       axios.post('/login', data)
       .then(response=>{
           console.log(response)
          const token = response.data
          localStorage.setItem('token', token)
        // const store = configureStore()
        
        
          this.props.history.push('/loading')
       })
       .catch(err=>{
           console.log(err)
       })
    }
    render(){
        return(
            <div className ="container">
                <br/>
                <br/><br/>
                <br/><br/><br/>
                <div className = "row">
                    <div className = "col-md-6 offset-md-5" >
                    <h3 className ="text-warning mb-3">Notes Keep!</h3>
                </div>
                </div>
                <div className = "col-md-6 offset-md-3">
               <LoginForm handleSubmit = {this.handleSubmit} />
            </div>
            </div>
        )
    }
}

export default Login