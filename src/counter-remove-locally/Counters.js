import React,{Component} from "react";
import Counter from "./Counter";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Counters extends Component{
  state={
    counters:[
      {id:1,value:4},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:0}
    ]
  }
  addCounter=()=>{
    const counters=this.state.counters;
    const newobj={id:counters.length+1,value:0}
    counters.push(newobj)
    this.setState({counters})
  }
  handleIncrement = (counter) => {

    // this.setState({
    //   value: counter.value + 1,
    // });
    console.log(counter.value+1)
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter)
    counters[index]={...counter}  //here clone new object that have receive.yaha current object index position milegi aur jo naya object milega o ham clone karenge
    counters[index].value++ //yaha value direct increment ho raha tha o avoid karne ke above sentence
this.setState({counters})
  };
  
  handleReset=()=>{
    const counters=this.state.counters.map((c)=>{
      c.value=0
    return c;
    });
    this.setState({counters:counters})
  }

  handleDelete=(counterId)=>{
console.log("Event Handler Called"+counterId)
const counters=this.state.counters.filter((data)=>data.id!==counterId)
this.setState({counters:counters})
  }
    render(){
      console.log(this.props)
        return(
          <>
          <button 
          onClick={()=>this.handleReset()}
          className="btn btn-primary btn-sm m-2">Reset</button> 
          
          <button 
          onClick={()=>this.addCounter()}
          className="btn btn-primary btn-sm m-2">Add</button>

          {this.state.counters.map((counter)=>
          <Counter key={counter.id} value={counter.value} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}>
            <h4>Counter # {counter.id}</h4>
          </Counter>
          )}
          </>
        )
    }
} 
export default Counters;