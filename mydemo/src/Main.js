import React,{Component} from 'react';
import './bootstrap/dist/css/bootstrap.min.css';
import logo1 from './2.png';
import data from './data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume.js';
class Main extends Component{
    render(){
             return(
                   <BrowserRouter>
                   <Route exact path="/" component={Main1} />
                   <Route  path="/about" component={Resume} />
                   </BrowserRouter>

                 )
           }     
}
function Main1() {
   return( <div className="row">
                 <div className="card col-md-4 offset-4 mt-4"
                 style={{width:"18rem",textAlign:"center"}}>
                     <h2>Resume</h2>
                     <img src={logo1} className="card-img-top"/>
                     <h1>{data["technical skills"]}</h1>
                     
                     <Link to="about" className="btn btn-primary">Click me</Link>
                 </div>
             </div>)
}
export default Main