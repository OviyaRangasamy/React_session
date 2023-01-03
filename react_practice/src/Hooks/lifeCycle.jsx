import { Component } from "react";

class LifeCycleClass extends Component{

    constructor (props){
        // super(props)
        // this.state= {
        //     name :"Oviya",
        //     counter : 0,
        // }
        console.log("I am Constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("I am prop to state Convertor");

        return (null);
    }

    componentDidMount(){
        console.log("I am ready to mount")
    }

    render(){
        console.log("I am a render return");
        // console.log(this.state.counter);
        return(
        <>
        <h2>I am a Container</h2>
        {/* <h2>My name is {this.state.name}</h2> */}
        {/* <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button> */}
        {/* <p>{this.state.counter}</p> */}
        </>
        )
    }
}
 export default LifeCycleClass;