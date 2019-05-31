import React, { Component } from 'react';
import axios from 'axios'
export const Search=(val)=>{
 
  axios.post('http://localhost:3001/users/search',{


value:val





 }).then(res=>{if(res.data.length!=0)
  
{
 	console.log(res.data[0].pname)
    

}


 })


}
