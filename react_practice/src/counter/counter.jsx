// stale closure
// Batching

import {Component} from "react";

class Counter extends Component{
 state = {
  counter:0,
  counter1:0
 }
 add_count =(e)=>{
  console.log("c1:",this.state.counter)
  this.setState({counter:this.state.counter+1})
  console.log("c2:",this.state.counter)
  this.setState({counter:this.state.counter+1})
  console.log("c3:",this.state.counter)
  this.setState({counter:this.state.counter+1})
 }
 prev_count=()=>{
  console.log("c1:",this.state.counter1)
  this.setState((prevState) => {
   return( {
      counter1: prevState.counter1 + 1,
    });
   }
  );
  console.log("c2:",this.state.counter1)
  this.setState((prevState) => {
     return{
      counter1: prevState.counter1 + 1,
    };
});
console.log("c3:",this.state.counter1)
this.setState((prevState) => {
  return{
   counter1: prevState.counter1 + 1,
 };
});
 }
 render(){
  const{counter,counter1} = this.state
  return(
    <>
    <p>{counter}</p>
    <button onClick={this.add_count}>increment</button>
    <p>{counter1}</p>
    <button onClick={this.prev_count}>increment</button>
    </>
  )
 }
}

export default Counter;