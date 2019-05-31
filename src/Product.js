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
import rati1 from './rati1.jpg';
import rati2 from './rati2.jpg';
import rati3 from './rati3.jpg';
import rati4 from './rati4.jpg';
import rati5 from './rati5.jpg';
import jwt_decoded from 'jwt-decode';
import axios from 'axios'

class Product extends Component{
constructor(){
	super();
this.state={compoo:[],comps:[],parami:"",photo:[],url:"",name:"",price:0,pname:"",username:"",email:"",already:"NO",data:"",naam:""}


}
addToCart=()=>{
  console.log(this.state.pname)
axios.post('https://git.heroku.com/secret-badlands-38102.git/users/addcart',{

cemail:this.state.email,
product:this.state.pname


}).then(res=>{

this.props.history.push('/cart');
console.log(res)


})

console.log(this.state.email)
}

componentDidMount(){
var  decoded
if(localStorage.usertoken)
{
const token=localStorage.usertoken;
 decoded=jwt_decoded(token);


this.setState({username:decoded.first_name,email:decoded.email})


}
if(localStorage.usertoken){
 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/productcheck',{cemail:decoded.email}).then(

res=>{
console.log("xxxxxxxx"+this.props.location.state.pro)
for(var i=0;i<res.data[0].cart.length;i++)
{
  if(res.data[0].cart[i]==this.props.location.state.pro)
  {
    console.log("found")
    this.setState({already:'yes'})
    break;
  }
else
{
  this.setState({already:'no'})
}

}

}




  )
}




 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/product',{


product:this.props.location.state.pro,



}).then(res=>{if(res.data.length!=0)
  
{
	var compo=[];
	var pho=[];
 var proname=res.data[0].pname;
 	for(var i=0;i<1;i++){
compo.push(

	<span  >
	<img src={require("D:/nodex/public/upload/"+res.data[i].photoname[0])} style={{height:350,width:300,position:'relative',top:130,left:150,border:'solid',borderWidth:1,borderColor:'#D3D3D3',padding:40}}/>
<p class="para1">{res.data[i].pname}</p>
<p style={{position:'relative',top:-280,left:600}}><span style={{fontSize:40}}>&#x20b9;{res.data[i].price}</span></p>
<img style={{position:'relative',top:-370,left:600,height:16,width:80}} src={rati4} />
<span style={{position:'relative',top:-325,left:610,fontSize:10}}>(inclusive all taxes)</span>     
<div style={{position:'relative',top:-310,left:600,height:430,width:600,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}>
<p style={{fontSize:20,display:'inline'}}>Discription:</p>
<p style={{}}>asasaaasd asd sdsa asd as dasd asd s ad ass d asd s sajdhsjdhas ashdhjsajhd jsahdjhs  jshdjahsj jshdjash djh sjhd jashd j sdj sahjdhasj dj sjhjsa djs djshdj ssjadggs as gshgdhsg bb sdsgdb  sdag  hs dg sahd ghsa dh shd gahs dhsa ad  saasd as d sad asd sa d sad sd s d sa d sadsdsads  as ds d s </p>
<p style={{fontSize:20,display:'inline'}}>Highlights:</p>
<pre>heelo.this.is.Highlights</pre>
</div>
	

</span>
	)
 	}
for(var i=0;i<res.data[0].photoname.length;i++)
{
   pho.push(<div  key={i} style={{height:70,width:60,position:'relative',top:-845,left:48,marginLeft:40,marginBottom:0,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}><img onMouseOver={(ele)=>{this.reren(ele)}} name={i} value={i} style={{height:70,width:60,}}src={require("D:/nodex/public/upload/"+res.data[0].photoname[i])}/></div>)

}
console.log(pho)
  
   this.setState({compoo:compo,photo:pho,pname:proname,naam:proname})
   console.log("**++++++sads+d+a++*"+this.state.pname)
}

})

}






re=(ele)=>{

console.log("baadshah"+ele.target.textContent)
var naam=ele.target.textContent
var  decoded
if(localStorage.usertoken)
{
const token=localStorage.usertoken;
 decoded=jwt_decoded(token);


this.setState({username:decoded.first_name,email:decoded.email})


}
if(localStorage.usertoken){
 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/productcheck',{cemail:decoded.email}).then(

res=>{
console.log("xxxxxxxx"+naam)
for(var i=0;i<res.data[0].cart.length;i++)
{
  if(res.data[0].cart[i]==naam)
  {
    console.log("found")
    this.setState({already:'yes'})
    break;
  }
else
{
  this.setState({already:'no',naam:naam})
}

}

}




  )
}




 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/product',{


product:naam,



}).then(res=>{if(res.data.length!=0)
  
{
  var compo=[];
  var pho=[];
  console.log("ye hai naam"+res.data[0].pname)
 var proname=res.data[0].pname;
  for(var i=0;i<1;i++){
compo.push(

  <span  >
  <img src={require("D:/nodex/public/upload/"+res.data[i].photoname[0])} style={{height:350,width:300,position:'relative',top:130,left:150,border:'solid',borderWidth:1,borderColor:'#D3D3D3',padding:40}}/>
<p class="para1">{res.data[i].pname}</p>
<p style={{position:'relative',top:-280,left:600}}><span style={{fontSize:40}}>&#x20b9;{res.data[i].price}</span></p>
<img style={{position:'relative',top:-370,left:600,height:16,width:80}} src={rati4} />
<span style={{position:'relative',top:-325,left:610,fontSize:10}}>(inclusive all taxes)</span>     
<div style={{position:'relative',top:-310,left:600,height:430,width:600,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}>
<p style={{fontSize:20,display:'inline'}}>Discription:</p>
<p style={{}}>asasaaasd asd sdsa asd as dasd asd s ad ass d asd s sajdhsjdhas ashdhjsajhd jsahdjhs  jshdjahsj jshdjash djh sjhd jashd j sdj sahjdhasj dj sjhjsa djs djshdj ssjadggs as gshgdhsg bb sdsgdb  sdag  hs dg sahd ghsa dh shd gahs dhsa ad  saasd as d sad asd sa d sad sd s d sa d sadsdsads  as ds d s </p>
<p style={{fontSize:20,display:'inline'}}>Highlights:</p>
<pre>heelo.this.is.Highlights</pre>
</div>
  

</span>
  )
  }
for(var i=0;i<res.data[0].photoname.length;i++)
{
   pho.push(<div  key={i} style={{height:70,width:60,position:'relative',top:-845,left:48,marginLeft:40,marginBottom:0,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}><img onMouseOver={(ele)=>{this.reren(ele)}} name={i} value={i} style={{height:70,width:60,}}src={require("D:/nodex/public/upload/"+res.data[0].photoname[i])}/></div>)

}
console.log(pho)
  
   this.setState({compoo:compo,photo:pho,pname:proname})
   console.log("**++++++sads+d+a++*"+this.state.pname)
}

})



}




reloadRoute = (naam) => {
 
    this.props.history.push({ pathname: '/empty' });

   this.props.history.replace({pathname:'/product',state:{pro:naam}});   
}




reren=(ele)=>{
   var a=ele.target.name
  console.log(a)

 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/product',{


product:this.state.naam


}).then(res=>{if(res.data.length!=0)
  
{
  var compo=[];
  var pho=[];


  for(var i=0;i<1;i++){
compo.push(

  <span  >
  <img src={require("D:/nodex/public/upload/"+res.data[i].photoname[a])} style={{height:350,width:300,position:'relative',top:130,left:150,border:'solid',borderWidth:1,borderColor:'#D3D3D3',padding:40}}/>
<p class="para1">{res.data[i].pname}</p>
<p style={{position:'relative',top:-280,left:600}}><span style={{fontSize:40}}>&#x20b9;{res.data[i].price}</span></p>
<img style={{position:'relative',top:-370,left:600,height:16,width:80}} src={rati4} />
<span style={{position:'relative',top:-325,left:610,fontSize:10}}>(inclusive all taxes)</span>     
<div style={{position:'relative',top:-310,left:600,height:430,width:600,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}>
<p style={{fontSize:20,display:'inline'}}>Discription:</p>
<p style={{}}>asasaaasd asd sdsa asd as dasd asd s ad ass d asd s ad  saasd as d sad asd sa d sad sd s d sa d sadsdsads  as ds d s </p>
<p style={{fontSize:20,display:'inline'}}>Highlights:</p>
</div>
  

  </span>
  )
  }
   this.setState({compoo:compo})
}
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
  for(var i=0;i<res.data.length&&i<10;i++){
    var abc=res.data[i].pname;
  	comp.push(<li style={{zIndex:10,display:'block',background:'white',width:600,position:'relative',left:150,top:-90}}><button style={{textDecoration:'none',color:'black',fontSize:20,padding:10,width:600,background:'white',border:'none',outline:'none',textAlign:'left'}} onClick={(ele)=>{this.re(ele);console.log("yooyo"+abc);this.setState({comps:[]})}} >{abc}</button></li>)
  }
  

}

this.setState({comps:comp})


 })


}
out=()=>{

	this.setState({comps:[]})

}












render(){
console.log(this.state.compoo)

const login=(

<ul>
<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input onBlur={this.out} type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>
<li class ="blk" style={{position:'relative',left:250,top:-44,color:'white'}}><Link style={{color:'white',textDecoration:'none'}}to="/Login">SignUp</Link></li>
<li class ="blk" style={{position:'relative',left:280,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">Register</Link></li>
<li class ="blk" onMouseOver={()=>{ this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} style={{position:'relative',left:270,top:-44,color:'white',}}><Link style={{color:'white',textDecoration:'none',}}  to="/Category">Category</Link></li>
<img src={carti} class="back" style={{height:40,width:50,position:'relative',left:300,top:-30}}/>
<li class ="blk" style={{position:'relative',left:300,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">MyCart</Link></li>
<ul onMouseOver={()=>{this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} id="a1"  style={{display:'none',position:'relative',left:1050,top:-50,background:'white',width:100,listStyle:"none",zIndex:10}}>
<li ><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'shirt'}}}>Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'tshirt'}}}>T-Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'trouser'}}}>Trousers</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}}  to={{pathname:'/dress',state:{cat:'salkam'}}}>Salwar Kameez</Link></li>
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
<li ><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'shirt'}}}>Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'tshirt'}}}>T-Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathnaFme:'/dress',state:{cat:'trouser'}}}>Trousers</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}}  to={{pathname:'/dress',state:{cat:'salkam'}}}>Salwar Kameez</Link></li>
</ul>

</ul>)
	return(<div>

<div style={{background:'#131528',height:70,width:"100%",position:'fixed',top:0,zIndex:10}}>
<button  style={{height:30,width:35,position:'relative',top:20,left:720,border:"none",outline:'none',background:"white",cursor:"pointer",display:"inline",zIndex:2}}><img  style={{height:15,width:15}} src={seri}/></button>
{localStorage.usertoken?profile:login}
{this.state.comps}

</div>	


{this.state.compoo.length>0?this.state.compoo:<div></div>}
{this.state.photo}
{this.state.already=="yes"?<button style={{background:'#131528',color:'white' ,height:40,width:180,fontSize:20,position:'relative',left:150,top:-670}}><Link to="/cart" style={{textDecoration:'none',color:'white'}}>Go to Cart</Link></button>:<button style={{background:'#131528',color:'white' ,height:40,width:180,fontSize:20,position:'relative',left:150,top:-670}} onClick={()=>{this.addToCart()}}>Add to Cart</button>}	
<button style={{background:'#131528',color:'white' ,height:40,width:180,fontSize:20,position:'relative',left:170,top:-670}}>Buy Now</button>
	</div>);

}




}
export default Product;