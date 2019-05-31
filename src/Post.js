import axios from 'axios'


import React, { Component } from 'react';


export const logi=user=>{
return axios.post('https://git.heroku.com/secret-badlands-38102.git/users/signin',{


email:user.email,
password:user.password




 }).then(res=>{
if(res){
localStorage.setItem('usertoken',res.data)
console.log(res.data)
return res.data
}
 }).catch(err=>{console.log(err)})
}








export const reg=newUser=>{
return axios.post('https://git.heroku.com/secret-badlands-38102.git/users/register',{

first_name:newUser.first_name,
last_name:newUser.last_name,
email:newUser.email,
password:newUser.password

}).then(res=>{console.log('registered')})

}

