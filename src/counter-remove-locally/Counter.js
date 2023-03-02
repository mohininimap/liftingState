import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  // handleIncrement = () => {
  //   this.setState({
  //     value: this.state.value + 1,
  //   });
  // };
  render() {
    const {onDelete,counter,onIncrement}=this.props;
    console.log("props", this.props);
    let classes = this.getBadgeClasses();
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={()=>onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <button onClick={()=>this.props.onDelete(this.props.counter.id)} */}
        <button onClick={()=>onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
        >Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    const {counter}=this.props;

    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const {counter}=this.props;
    const x = <h1>Zero</h1>;
    return counter.value === 0 ? x : counter.value;
  }
}
export default Counter;
