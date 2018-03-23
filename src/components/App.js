import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "../actions";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
// import VisibleTodoList from "../containers/VisibleTodoList";
import TodoList from "../components/TodoList";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(toggleTodo(index))}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  visibilityFilter: PropTypes.oneOf([
    "SHOW_ALL",
    "SHOW_ACTIVE",
    "SHOW_COMPLETED"
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// );

export default connect(select)(App);
