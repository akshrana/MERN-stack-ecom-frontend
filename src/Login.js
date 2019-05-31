import React, { Component } from 'react';
import  {Link,withRouter} from "react-router-dom";
import App from './App.css';
import noti from './noti.png';
import {logi} from './Post.js';
class Login extends Component
{
constructor(){
super();
this.state={email:"",password:"",data:""}

}

change=(e)=>{


this.setState({[e.target.name]:e.target.value})

}
submit=()=>{

const obj={email:this.state.email,password:this.state.password}
logi(obj).then(res=>{
console.log(res)
if(!res.val){
this.props.history.push('/');
}
this.setState({data:'inc'});

})


}
render()
{

return(
<div >
<div style={{border:'1px solid',height:600,width:500,position:'relative',left:470,top:50}}>
<img style={{height:60,width:300,position:'relative',top:60,left:100}}src={noti}/>
<br/>
<p style={{position:'relative',top:70,left:50}}>Dont miss any opportunity to participate in any event</p>
<input class="inp" type="email" name="email" onChange={this.change} placeholder=" username or email "/>
<br/>
<br/>
<br/>
<input class="inp" type="password"  name="password" onChange={this.change} placeholder=" enter password "/>
<br/>
<br/>
<br/>
<br/>
<button class="inp" onClick={()=>{this.submit()}}>Login</button>
<span style={{position:'relative',top:200,left:-130}}><p style={{display:'inline'}}>New to Notify?    </p><Link style={{color:'blue',textDecoration:'none'}} to="/Register">Register</Link></span>
</div>
{this.state.data=="inc"?<span class="invalid" style={{color:'red'}}>invalid username or password</span>:<span></span>}
</div>


	)

}



}
export default Login;