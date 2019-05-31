import React, { Component } from 'react';
import  {BrowserRouter,Route,Switch ,NavLink} from "react-router-dom";
import Nav from './Nav.js';
import Login from './Login.js';
import Reg from './Reg.js';
import Cart from './Cart.js';
import Dress from './Dress.js';
import Product from './Product.js';
const comp=()=>{

return(<div><NavLink to="/new">new</NavLink></div>)


}

class App extends Component {
  render() {
    return (
      <div >
        
        <BrowserRouter>
        <div>
    
        <Switch>
        <Route path="/login"component={Login}/>
         <Route path="/cart"component={Cart}/>
        <Route path="/Register"component={Reg}/>
        <Route path="/dress"component={Dress}/>
       <Route path="/product" exact component={Product}/>
        <Route path="/" exact component={Nav}/>
 </Switch> 
 </div>
 </BrowserRouter>
      </div>

    );
  }
}

export default App;
