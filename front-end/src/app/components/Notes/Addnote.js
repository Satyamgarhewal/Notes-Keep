import React from 'react'
import axios from '../../config/axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import {connect} from 'react-redux'
import{startPostNotes} from '../../action/notesAction'
 class AddNote extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            description:'',
            errMsg:false
           
        }
    }
    handleChange =e=>{
        console.log(e.target.name, e.target.value)
        // console.log(this.props)
            this.setState({
                [e.target.name]: e.target.value
            })
         
      
    }
    handleSubmit =e=>{
        e.preventDefault()
        console.log(this.props)
        console.log('handle Submit clicked')
        const  formData = {
                title:this.state.title,
                description:this.state.description,
                
        }
        if(this.state.title && this.state.description){
          
            this.props.dispatch(startPostNotes(formData))
        }
       
        else{
            const errMsg = true
            this.setState({errMsg})
        }
        this.setState(prevState=>({
            title:'',
            description:''
        }))
       
    //     axios.post('/notes', formData)
    //     .then(response=>{
    //         if(response.data._id){
    //             console.log('response',response.data)


    //         }
    //       else {
    //           const errMsg = true
    //           this.setState({errMsg})
              
    //       }
    //     })
    //     .catch(err=>{
    //         console.log('err message',err)
    //     })
    //    this.setState(prevState=>({
    //        title:'',
    //        description:''
    //    }))
    }
    render(){
        
        return(
            <div className ="container">
                
                    {(this.state.errMsg)?(<div className="alert alert-danger" role="alert">
                        Please enter valid title and description
                        </div>):(
                          <div>
                              
                              </div> 
                        )}
                        <div className= "col-md-6 offset-md-5 mt-3">
                    <h4 className="text-warning"><b>Notes Keep!</b></h4>
                </div>
                <div className ="col-md-6 offset-md-3 mt-3">
                <form  onSubmit ={this.handleSubmit}>

                <div className="form-row ">
                <div className="col">
                <input type="text" className="form-control  bg-dark text-light" onChange = {this.handleChange} value = {this.state.title} name = "title" placeholder=" Title" />
                </div>
                </div>

                <div className="form-group mt-1">
                    <textarea className="form-control bg-dark  text-light" id="exampleFormControlTextarea1"  onChange = {this.handleChange} value = {this.state.description} name="description" placeholder="Description" rows="2"></textarea>
                </div>
                
                <button className ="btn btn-dark offset-md-5 mb-3" value = "submit" name = "Submit">Add</button>
             
                                </form>
                                
                                </div>
                            </div>
        )
    }
}
export default connect()(AddNote)