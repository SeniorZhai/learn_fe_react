import React, { Component } from "react";
import { increment, decrement, reset } from "actions/counter";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          当前计数为
          {this.props.counter.count}
        </div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    );
  }
}
// 把state转成component的props
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
// 发送action转成props的方法
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};
// 链接组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
