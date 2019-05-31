import React, { Component } from 'react';
import  {Link,withRouter} from "react-router-dom";
import App from './App.css';
import noti from './cartim.jpg';
import {reg} from './Post.js';

class Reg extends Component
{

constructor(){
super();
this.state={email:"",password:"",first_name:"",last_name:""}

}

change=(e)=>{


this.setState({[e.target.name]:e.target.value})

}
submit=()=>{

const obj={email:this.state.email,password:this.state.password,first_name:this.state.first_name,last_name:this.state.last_name}
reg(obj).then(res=>{
this.props.history.push('/Login');
console.log(this.state.email);
})
}


render()
{
 
return(
<div>
<div style={{border:'1px solid',height:600,width:500,position:'relative',left:470,top:50}}>
<img style={{height:60,width:300,position:'relative',top:60,left:100}}src={noti}/>
<br/>
<p style={{position:'relative',top:70,left:50}}>Dont miss any opportunity to participate in any event</p>
<input style={{width:150}} class="inp" onChange={this.change} type="text" placeholder="first name" name="first_name"/>
<input style={{width:150}} class="inp" onChange={this.change} type="text" name="last_name" placeholder=" last name "/>
<br/>
<br/>
<input onChange={this.change} class="inp" type="password" name="password" placeholder=" password "/>
<br/>
<br/>
<input class="inp" type="email" onChange={this.change} name="email" placeholder=" email "/>
<br/><br/><br/><br/>
<button class="inp" onClick={()=>{this.submit()}}>Agree & Register</button>
<span style={{position:'relative',top:200,left:-130}}><p style={{display:'inline'}}>Already on Notify?</p><Link style={{color:'blue',textDecoration:'none'}} to="/Login">SignIn</Link></span>
</div>
</div>


	)

}



}
export default Reg;