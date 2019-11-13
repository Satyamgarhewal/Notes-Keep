import React from 'react'
import Helmet from 'react-helmet'
export default class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    handleSubmit =e=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div className= "container">
                  <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
                <div className = "row">
                    <div className = "col-md-6 offset-md-3">
                <form onSubmit = {this.handleSubmit}>
                    
                    {/* <label htmlFor ="email">Email
                    <input type = "text" value = {this.state.email} onChange = {this.handleChange}  name ="email" id ="email"/>
                    </label><br/> */}
                    <input type="text" className="form-control mt-2 " id="email" placeholder="Email"  name='email'  value = {this.state.email} onChange ={this.handleChange}/>

{/* 
                    <label htmlFor ="password">Password
                    <input type = "password" value = {this.state.password} onChange = {this.handleChange}  name ="password" id ="password"/>
                    </label><br/><br/> */}
                     <input type="password" className="form-control mt-2 " id="password" placeholder="Password"  name='password'  value = {this.state.password} onChange ={this.handleChange}/>
                        <button className= "btn btn-dark mt-3 offset-md-4" value="Submit" type="submit">Submit</button>
                    {/* <input type ="submit" value ="Submit" /> */}
                

                </form>
                </div>
                </div>
            </div>
        )
    }
}