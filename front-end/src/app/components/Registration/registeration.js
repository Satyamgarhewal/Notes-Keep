import React from 'react'
import RegisterationForm from './RegisterationForm'
import axios from '../../config/axios'
import Helmet from 'react-helmet'
class Registeration extends React.Component{

    handleSubmit=(formData)=>{
        console.log(formData)
       axios.post('/users', formData)
       .then(response=>{
           console.log(response.data)
           if(response){
            const alert = window.alert('You are successfully registered')
           }
           
       })
       .catch(err=>{
           console.log(err)
       })
    }
    render(){
        return(
           
            <div >
                 <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
            <div className = "container">
                <br/>
                <br/>
                <br/>
                
                <div className = "row">
                    <div className = "col-md-6 offset-md-5 ">
                <h3 className = "text-warning">Notes Keep!</h3>
                </div>
                </div>
                <br/>
                <div className = "row offset-md-5">
                   
                    <RegisterationForm  handleSubmit={this.handleSubmit}/>
                    </div>
            </div>
            </div>
        )
    }
}

export default Registeration