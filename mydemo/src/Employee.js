import React,{Component} from 'react';
class Employee extends Component{
    constructor(){
        super();
        this.state={
            Users:[
                {name:"nbs",designation:"software developer"},
                {name:"charan",designation:"software developer"},
                {name:"me",designation:"software developer"}]

            
        }
    }
    render(){
       // setTimeout(() => {
          //  this.setState({name:"Charan"})
       // }, 5000);
         return(
         <div>
            <h2>employee name:{this.state.Users[0].name} with designation 
            {this.state.Users[0]}</h2>
           
             </div>
         );
    }
}
export default Employee