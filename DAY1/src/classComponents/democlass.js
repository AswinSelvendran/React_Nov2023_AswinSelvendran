import {Component} from 'react'
class HelloWorld extends Component

{  
   constructor(props)
   {
      super(props);
      this.state={
         name:"huzaif",
         city:"Coimbatore",
      }
   }
 render()
 {   
   return(
   <div>
    <h2>Hi Hello</h2>
    <h2>Hello{this.state.name}</h2>
    <h2> From {this.state.city}</h2>
    {/* <h1>Props:{this.props.name}</h1> */}
   </div>
   );
 }
}
export default HelloWorld;