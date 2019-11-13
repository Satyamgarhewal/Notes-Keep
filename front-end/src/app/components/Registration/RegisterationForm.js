import React from 'react'
import {Link} from 'react-router-dom'
class RegisterationForm extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            password:''
        }
    }
    handleChange=e=>{
        console.log(e.target.value)
        console.log(e.target.name)
      
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleSubmit=e=>{
        e.preventDefault()
        // console.log('Handle submit cliked')
        const formData={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                
                <form onSubmit ={this.handleSubmit}>

               
      <input type="text" className="form-control" id="firstname" placeholder="First name"  name='firstname'  value = {this.state.firstname} onChange ={this.handleChange}/>
{/*      
                        <label htmlFor = "firstname">First Name
                        <input type ="text" value = {this.state.firstname} name='firstname' id ="firstname" onChange={this.handleChange} />
                        </label> <br/> */}
      <input type="text" className="form-control mt-2" id="firstname" placeholder="Last name"  name='lastname'  value = {this.state.lastname} onChange ={this.handleChange}/>

                        {/* <label>Last Name
                        <input type= "text" value = {this.state.lastname} name="lastname" id = "lastname" onChange ={this.handleChange} />
                         </label><br/> */}
      <input type="text" className="form-control mt-2" id="Username" placeholder="Username"  name='username'  value = {this.state.username} onChange ={this.handleChange}/>

                         {/* <label>Username
                        <input type= "text" value = {this.state.username} name="username" id = "username" onChange ={this.handleChange} />
                         </label><br/> */}

<input type="text" className="form-control mt-2 mr-sm-2" id="email" placeholder="Email"  name='email'  value = {this.state.email} onChange ={this.handleChange}/>

                         {/* <label>Email
                        <input type= "text" value = {this.state.email} name="email" id = "email" onChange ={this.handleChange} />
                         </label><br/>
                          */}
                         
                         {/* <label>Password
                        <input type= "password" value = {this.state.password} name="password" id = "password" onChange ={this.handleChange} />
                         </label><br/><br/> */}
     <input type="password" className="form-control mt-2" id="password" placeholder="Password"  name='password'  value = {this.state.password} onChange ={this.handleChange}/>

                        <button type="submit" className ="btn btn-dark mt-3 mr-5" value = "Register"> Register</button>
                        <Link to='/login'>     <button type="submit" className ="ml-3 btn btn-dark mt-3" value = "Login"> Login</button> </Link> 

                        {/* <input type ='submit' value ="Register" />&nbsp; &nbsp;
                     <Link to='/login'>  <button>Login</button></Link> */}
                        
                    </form>
            </div>
        )
    }
}

export default RegisterationForm