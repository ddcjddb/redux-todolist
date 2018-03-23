import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

// let AddTodo = ({ dispatch }) => {
//   let input;

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           if (!input.value.trim()) {
//             return;
//           }
//           dispatch(addTodo(input.value));
//           input.value = "";
//         }}
//       >
//         <input
//           ref={node => {
//             input = node;
//           }}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   );
// };

// AddTodo = connect()(AddTodo);

// export default AddTodo;
