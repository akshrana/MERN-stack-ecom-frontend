import React, { Component } from 'react';
import  {Link,withRouter} from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import notis from './notis.png';
import {Search} from './Search.js';
import carti from './carti.png';
import seri from './seri.png';
import sale1 from './sale1.png';
import sale2 from './sale2.png';
import sam2 from './sam2.jpg';
import sam from './sam.jpg';
import sam1 from './sam1.jpg';
import sam3 from './sam3.jpg';
import axios from 'axios'
import jwt_decoded from 'jwt-decode';

class Dress extends Component{
constructor(){
	super();
this.state={compoo:[],comps:[],parami:"",username:""}

}
componentDidMount(){

if(localStorage.usertoken)
{
const token=localStorage.usertoken;
const decoded=jwt_decoded(token);


this.setState({username:decoded.first_name})

}


 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/dress',{


dress:this.props.location.state.cat


}).then(res=>{if(res.data.length!=0)
  
{
	var compo=[];
 	console.log(res.data)
 	for(var i=0;i<res.data.length;i++){
compo.push(

	<span class="dispbox" ><Link to={{pathname:'/product',state:{pro:res.data[i].pname}}}>
	<img src={require("D:/nodex/public/upload/"+res.data[i].photoname[0])} style={{height:250,width:180}}/>
<p class="para">{res.data[i].pname}</p>
     <hr style={{position:'relative',top:90}}/>
</Link>
	</span>
	)
 	}

   this.setState({compoo:compo})


}

})

}


extra=(xyz)=>{
this.props.location.state.cat=xyz;
console.log("tdone")


 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/dress',{


dress:xyz


}).then(res=>{if(res.data.length>0)
  
{
	var compo=[];
 	
 	for(var i=0;i<res.data.length;i++){
compo.push(

	<span class="dispbox" >
	<Link to={{pathname:'/product',state:{pro:res.data[i].pname}}}>
	<img src={require("D:/nodex/public/upload/"+res.data[i].photoname[0])} style={{height:250,width:180}}/>
<p class="para">{res.data[i].pname}</p>
     <hr style={{position:'relative',top:90}}/>
</Link>
	</span>
	)
 	}

 	window.setTimeout(2000);
 	console.log("*"+compo)
   this.setState({compoo:compo})

}

})

}














logOut=()=>{

localStorage.removeItem('usertoken')
this.props.history.push('/')

}


  onMouseEnter=()=> {

 document.getElementById("a1").style.display = "block";
 
  }

  onMouseLeave=()=> {
  
     document.getElementById("a1").style.display = "none";

 
  }
  click=()=>{

  	
  }
search=(e)=>{
var comp=[];
 
var val=e.target.value;
  axios.post('https://git.heroku.com/secret-badlands-38102.git/users/search',{


value:val

 }).then(res=>{
 if(res.data.length!=0&&val!="")
{
  for(var i=0;i<res.data.length&&i<10;i++)
  	comp.push(<li style={{zIndex:10,display:'block',background:'white',width:600,position:'relative',left:150,top:-90}}><Link style={{textDecoration:'none',color:'black',fontSize:20,padding:10}} onClick={()=>{this.setState({comps:[]})}} to={{pathname:'/product',state:{pro:res.data[i].pname}}}>{res.data[i].pname}</Link></li>)
  

}

this.setState({comps:comp})



 })


}
out=()=>{

	this.setState({comps:[]})

}












render(){

	console.log("reren");
	
const login=(
<ul>
<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input onBlur={this.out} type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>
<li class ="blk" style={{position:'relative',left:250,top:-44,color:'white'}}><Link style={{color:'white',textDecoration:'none'}}to="/Login">SignUp</Link></li>
<li class ="blk" style={{position:'relative',left:280,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">Register</Link></li>
<li class ="blk" onMouseOver={()=>{ this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} style={{position:'relative',left:270,top:-44,color:'white',}}><Link style={{color:'white',textDecoration:'none',}}  to="/Category">Category</Link></li>
<img src={carti} class="back" style={{height:40,width:50,position:'relative',left:300,top:-30}}/>
<li class ="blk" style={{position:'relative',left:300,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/cart">MyCart</Link></li>
<ul onMouseOver={()=>{this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} id="a1"  style={{display:'none',position:'relative',left:1050,top:-50,background:'white',width:100,listStyle:"none",zIndex:10}}>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('shirt')}}>Shirts</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('tshirt')}}>T-Shirt</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('trouser')}}>Trouser</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('salkam')}}>Salwar Kameez</li>
</ul>

</ul>)
const profile=(<ul>

<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>

<li class ="blk" onMouseOver={()=>{ this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} style={{position:'relative',left:400,top:-44,color:'white',}}><Link style={{color:'white',textDecoration:'none',}}  to="/Category">Category</Link></li>
<img src={carti} class="back" style={{height:30,width:40,position:'relative',left:420,top:-35}}/>
<span style={{color:'white',position:'relative',left:200,top:-43,display:'inline-block',width:100}}>hi! {this.state.username}</span>
<li style={{display:'inline',position:'absolute',left:1300,top:19,color:'white',fontSize:20}}><a style={{textDecoration:'none',color:'white'}} href="" onClick={()=>{this.logOut()}}>logout</a></li>
<li class ="blk" style={{position:'relative',left:315,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/cart">MyCart</Link></li>
<ul onMouseOver={()=>{this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} id="a1"  style={{display:'none',position:'relative',left:1030,top:-60,background:'white',width:100,listStyle:"none",zIndex:10}}>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('shirt')}}>Shirts</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('tshirt')}}>T-Shirt</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('trouser')}}>Trouser</li>
<li style={{cursor:'pointer'}}onClick={()=>{this.extra('salkam')}}>Salwar Kameez</li>
</ul>

</ul>)
	return(<div>

<div style={{background:'#131528',height:70,width:"100%",position:'fixed',top:0,zIndex:10}}>
<button  style={{height:30,width:35,position:'relative',top:20,left:720,border:"none",outline:'none',background:"white",cursor:"pointer",display:"inline",zIndex:2}}><img  style={{height:15,width:15}} src={seri}/></button>
{localStorage.usertoken?profile:login}
{this.state.comps}

</div>	
<hr style={{position:'relative',top:100,}}/>
<p style={{position:'relative',top:50,left:50}}>showing result for<p style={{display:'inline', marginLeft:8,color:'blue'}}>"{this.props.location.state.cat}"</p></p>
{this.state.compoo.length>0?this.state.compoo:<div></div>}	



	</div>);

}




}
export default Dress;