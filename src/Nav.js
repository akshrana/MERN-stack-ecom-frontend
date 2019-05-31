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

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Nav extends Component{
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      comps:[],username:"",
      data:"",
      compoo:[],
      compoos:[]
    }
  }
 componentDidMount()
 {

if(localStorage.usertoken)
{
const token=localStorage.usertoken;
const decoded=jwt_decoded(token);


this.setState({username:decoded.first_name})

}





 axios.post('https://git.heroku.com/secret-badlands-38102.git/users/carousel',{





}).then(res=>{if(res.data.length!=0)
  
{
  var compo=[];
  var compos=[];
  console.log(res.data)
  for(var i=0;i<res.data.length;i++){
compo.push(

 
  <div  ><Link to={{pathname:'/product',state:{pro:res.data[i].pname}}} style={{display:'inline-block', height:200,zIndex:10,textDecoration:'none'}}>

  <img onClick={()=>{console.log("hello");this.props.history.push({pathname:'/product',state:{pro:res.data[i].pname}})}} src={require("D:/nodex/public/upload/"+res.data[i].photoname[0])} style={{height:200,width:270,margin:0,padding:0,position:'relative',top:40}}/>
<p style={{display:'block',background:'white',position:'relative',top:20,textDecoration:'none',color:'black'}}>{res.data[i].pname}</p>
<p style={{display:'block',background:'white',position:'relative',top:3,margin:0,padding:5,height:25,textDecoration:'none',color:'black'}}>&#x20b9;{res.data[i].price}</p>
</Link>
  </div>

  )
  compos.push(




  )
  }

   this.setState({compoo:compo,compoos:compos})


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
  	comp.push(<li style={{zIndex:10,display:'block',background:'white',width:600,position:'relative',left:150,top:-90}}><Link style={{textDecoration:'none',color:'black',fontSize:20,padding:10}} to={{pathname:'/product',state:{pro:res.data[i].pname}}} onClick={()=>{this.setState({comps:[]})}}>{res.data[i].pname}</Link></li>)
  

}

this.setState({comps:comp})

 })


}
out=()=>{

	this.setState({comps:[]})

}
render=()=>{

const login=(
<ul>
<img src={notis} class="back" style={{height:40,width:50,position:'relative',top:-30,left:20}}/>
<input onBlur={this.out} type="text" placeholder="&#xF002; Search for product" onChange={this.search} style={{fontFamily:'Arial, FontAwesome',borderRadius:5,height:30 ,width:600,outline:'none',position:'relative',top:-47,left:60}}/>
<li class ="blk" style={{position:'relative',left:250,top:-44,color:'white'}}><Link style={{color:'white',textDecoration:'none'}}to="/Login">SignUp</Link></li>
<li class ="blk" style={{position:'relative',left:280,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">Register</Link></li>
<li class ="blk" onMouseOver={()=>{ this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} style={{position:'relative',left:270,top:-44,color:'white',}}><Link style={{color:'white',textDecoration:'none',}}  to="/Category">Category</Link></li>
<img src={carti} class="back" style={{height:40,width:50,position:'relative',left:300,top:-30}}/>
<li class ="blk" style={{position:'relative',left:300,top:-44,color:'white',width:100}}><Link style={{color:'white',textDecoration:'none'}}  to="/Register">MyCart</Link></li>
<ul onMouseOver={()=>{this.onMouseEnter()}} onMouseLeave={()=>{this.onMouseLeave()}} id="a1"  style={{display:'none',position:'relative',left:1050,top:-60,background:'white',width:150,listStyle:"none",zIndex:10}}>
<li ><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'shirt'}}}>Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'tshirt'}}}>T-Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'trouser'}}}>Trousers</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathname:'/dress',state:{cat:'salkam'}}}>Salwar Kameez</Link></li>
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
<li><Link style={{color:'black',textDecoration:'none'}}to={{pathname:'/dress',state:{cat:'tshirt'}}}>T-Shirts</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}} to={{pathnaFme:'/dress',state:{cat:'trouser'}}}>Trousers</Link></li>
<li><Link style={{color:'black',textDecoration:'none'}}  to={{pathname:'/dress',state:{cat:'salkam'}}}>Salwar Kameez</Link></li>
</ul>

</ul>)
return(<div style={{background:"#E9ECE6"}}>
<div style={{background:'#131528',height:70,width:"100%",position:'fixed',top:0,zIndex:10}}>
<button  style={{height:30,width:35,position:'relative',top:20,left:720,border:"none",outline:'none',background:"white",cursor:"pointer",display:"inline",zIndex:2}}><img  style={{height:15,width:15}} src={seri}/></button>
{localStorage.usertoken?profile:login}


{this.state.comps}
</div>	

<br/>

<div style={{position:'absolute',left:5,background:"#E9ECE60",top:75}}>
 <Carousel  showThumbs={false}  autoPlay={true} infiniteLoop={true} style={{zIndex:0}} width={"1370px"} >
                <div>
                    <img style={{height:300,width:1380}} src={require('./sale1.png')}  />

                    
                </div>
                <div>
                    <img style={{height:300,width:1380}} src={sale2} />
                 
                </div>
                <div>
                    <img style={{height:300,width:1380}} src={sale1}  />
                 
                </div>
            </Carousel>
            
<div style={{position:'relative',top:50,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}><span style={{display:'inline-block',paddingTop:5,paddingBottom:20}}><Carousel onClickItem={()=>{this.click()}} transitionTime={1000} selectedItem={2} centerSlidePercentage={20} height={"50px"} showThumbs={false} centerMode={true}  infiniteLoop={true} style={{zIndex:1}} showIndicators={false} width={"1350px"} height={"700px"} >
  {this.state.compoo}

            </Carousel>
            </span>
              {this.state.compoos}
            </div>
         
<p style={{display:'block',position:'relative',top:-275,zIndex:2,color:'gray',background:"white",padding:10,fontSize:20}}>Products for you</p>

<div style={{position:'relative',top:0,border:'solid',borderWidth:1,borderColor:'#D3D3D3'}}><span style={{display:'inline-block',paddingTop:5,paddingBottom:20}}><Carousel onClickItem={()=>{this.click()}} transitionTime={1000} selectedItem={2} centerSlidePercentage={20} height={"50px"} showThumbs={false} centerMode={true}  infiniteLoop={true} style={{zIndex:1}} showIndicators={false} width={"1350px"} height={"700px"} >
  {this.state.compoo}

            </Carousel>
            </span>
              {this.state.compoos}
            </div>


<p style={{display:'block',position:'relative',top:-325,zIndex:2,color:'gray',background:"white",padding:10,fontSize:20}}>Related to items you've viewed</p>


<br/><br/>


</div>
<div style={{background:"#131528",height:150,width:"100%",position:'relative',top:1300}}>
<p style={{color:'white'}}>about</p>
</div>


	</div>

	)

	

}

}



export default Nav;