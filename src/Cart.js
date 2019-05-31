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

import jwt_decoded from 'jwt-decode';
import axios from 'axios'

class Product extends Component{
constructor(){
	super();
this.state={compoo:[],comps:[],parami:"",photo:[],url:"",name:"",price:0,pname:"",username:"",email:"",already:"",nprice:0}


}

remove=(a)=>{

axios.post("https://git.heroku.com/secret-badlands-38102.git/users/remove",{remove:a,username:this.state.email}).then(res=>{

this.reren();

})


}

reren=()=>{

var  decoded
if(localStorage.usertoken)
{
const token=localStorage.usertoken;
 decoded=jwt_decoded(token);


this.setState({username:decoded.first_name,email:decoded.email})


}
axios.post('https://git.heroku.com/secret-badlands-38102.git/users/productcheck',{cemail:decoded.email}).then(
res=>{

var compo=[];
var netprice=0;
if(res.data[0].cart.length==0)
this.setState({compoo:[]})

for(var i=0;i<res.data[0].cart.length;i++)
{
 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/product',{product:res.data[0].cart[i]}).then(resp=>{

netprice=netprice+resp.data[0].price;
compo.push(

  <div style={{position:'relative',top:140,left:100,height:200,width:700,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}>
  <Link style={{textDecoration:'none',color:'black'}}to={{pathname:'/product',state:{pro:resp.data[0].pname}}}><img src={require("D:/nodex/public/upload/"+resp.data[0].photoname[0])} style={{height:70,width:70,zIndex:3,position:'relative',top:60}}/>
  <p style={{position:'relative',top:-40,left:200}}>{resp.data[0].pname}</p>
  <p style={{position:'relative',top:-60,left:200}}><span style={{fontSize:40}}>&#x20b9;{resp.data[0].price}</span></p></Link>
    <p style={{position:'relative',top:-80,left:200}}><span style={{fontSize:13,color:'blue'}}>flipzone assured seller</span></p>
    <button onClick={()=>{this.remove(resp.data[0].pname)}}style={{position:'relative',top:-80,left:200,color:'white',background:'#131528',outline:'none'}}>Remove</button>
  <p style={{position:'relative',top:-220,left:550,}}>quantity:1</p>
</div>

  )
 this.setState({compoo:compo,nprice:netprice}) 


  })

}

  this.setState({len:res.data[0].cart.length}) 

}






  )

}

async componentDidMount(){
var  decoded
if(localStorage.usertoken)
{
const token=localStorage.usertoken;
 decoded=jwt_decoded(token);


this.setState({username:decoded.first_name,email:decoded.email})


}
await axios.post('https://git.heroku.com/secret-badlands-38102.git/users/productcheck',{cemail:decoded.email}).then(
res=>{

var compo=[];
var netprice=0;
for(var i=0;i<res.data[0].cart.length;i++)
{
 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/product',{product:res.data[0].cart[i]}).then(resp=>{

netprice=netprice+resp.data[0].price;
compo.push(

  <div style={{position:'relative',top:140,left:100,height:200,width:700,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}>
  <Link style={{textDecoration:'none',color:'black'}}to={{pathname:'/product',state:{pro:resp.data[0].pname}}}><img src={require("D:/nodex/public/upload/"+resp.data[0].photoname[0])} style={{height:70,width:70,zIndex:3,position:'relative',top:60}}/>
  <p style={{position:'relative',top:-40,left:200}}>{resp.data[0].pname}</p>
  <p style={{position:'relative',top:-60,left:200}}><span style={{fontSize:40}}>&#x20b9;{resp.data[0].price}</span></p></Link>
    <p style={{position:'relative',top:-80,left:200}}><span style={{fontSize:13,color:'blue'}}>flipzone assured seller</span></p>
    <button onClick={()=>{this.remove(resp.data[0].pname)}}style={{position:'relative',top:-80,left:200,color:'white',background:'#131528',outline:'none'}}>Remove</button>
  <p style={{position:'relative',top:-220,left:550,}}>quantity:1</p>
</div>

  )
 this.setState({compoo:compo,nprice:netprice}) 


  })

}

  this.setState({len:res.data[0].cart.length}) 

}






  )







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
  	comp.push(<li style={{zIndex:10,display:'block',background:'white',width:600,position:'relative',left:150,top:-90}}><Link style={{textDecoration:'none',color:'black',fontSize:20,padding:10}} to="/product">{res.data[i].pname}</Link></li>)
  

}




 })
this.setState({comps:comp})

}
out=()=>{

	this.setState({comps:[]})

}












render(){

console.log("reren")
const login=(

<ul>
<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input onBlur={this.out} type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>
<li class ="blk" style={{position:'relative',left:250,top:-44,color:'white'}}><Link style={{color:'white',textDecoration:'none'}}to="/Login">SignUp</Link></li>
<li class ="blk" style={{position:'relative',left:280,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">Register</Link></li>





</ul>)
const profile=(<ul>

<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>
<span style={{color:'white',position:'relative',left:500,top:-44,display:'inline-block',width:100}}>hi! {this.state.username}</span>
<li style={{display:'inline',position:'absolute',left:1300,top:19,color:'white',fontSize:20}}><a style={{textDecoration:'none',color:'white'}} href="" onClick={()=>{this.logOut()}}>logout</a></li>



</ul>)
	return(<div>

<div style={{background:'#131528',height:70,width:"100%",position:'fixed',top:0,zIndex:5}}>
<button  style={{height:30,width:35,position:'relative',top:20,left:720,border:"none",outline:'none',background:"white",cursor:"pointer",display:"inline",zIndex:2}}><img  style={{height:15,width:15}} src={seri}/></button>
{localStorage.usertoken?profile:login}
{this.state.comps}
<div style={{height:400,width:400,border:'solid',borderWidth:1,borderColor:'#D3D3D3',position:'relative',left:900}}>

<h3 style={{position:'relative',left:140}}>Your Bill</h3>
<p style={{position:'relative',top:40,left:30}} >Net Price:<span style={{position:'relative',left:10}}>{this.state.nprice}</span></p>
<p style={{position:'relative',top:40,left:30}} >Delivery:<span style={{position:'relative',left:10}}>Free Home Delivery</span></p>
<hr style={{position:'relative',top:40,color:'#D3D3D3',borderTop: 'dotted'}} />
<p style={{position:'relative',top:40,left:30}} >Payable Amount:<span style={{position:'relative',left:10}}>{this.state.nprice}</span></p>

<button onClick={()=>{this.props.history.push('/')}} style={{position:'relative',top:70,left:10,width:180,height:50,color:'white',background:'#131528'}}>Continue Shopping</button>
<button style={{position:'relative',top:70,left:30,width:180,height:50,color:'white',background:'#131528'}}>CheckOut</button>


</div>
</div>	

{this.state.compoo.length>(this.state.len-1)?this.state.compoo:<div></div>}



	</div>);

}




}
export default Product;