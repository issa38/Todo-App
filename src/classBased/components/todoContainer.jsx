import React from "react";
import { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header"
import InputTodo from "./inputTodo";
import {v4 as uuidv4} from "uuid";


class TodoContainer extends Component {

    state ={
        todos: [

        ] 
    }
    
    // This is a Lifecycle method that executes directly after the Render function runs.
    componentDidMount() {
      const tmp = localStorage.getItem('todos')
      const loaded = JSON.parse(tmp)
      if(loaded){
        this.setState({
          todos: loaded
        })
      }
    }

    componentDidUpdate(prevState, prevProps){
      if(prevState !== this.state.todos){
        const tmp = JSON.stringify(this.state.todos)
        localStorage.setItem('todos', tmp)
      }
    }

    handleChange = (id) =>{
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id){
            return{
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        }),
      }))
    }

    delTodo = id =>{
      this.setState({
        todos: [
          ...this.state.todos.filter(todo =>{
            return todo.id !== id;
          })
        ]
      })
    }

    addTodoItem = title => {
      const newTodo ={
        id: uuidv4(),
        title: title,
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    }

    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id){
            todo.title = updatedTitle
          }
          return todo
        })
      })
    }

    render() {
        return (
          <div className="container">
            <div className="inner">
            <Header />
            <InputTodo addTodos = {this.addTodoItem}/>
            <TodoList handleChangeProps = {this.handleChange} todos={this.state.todos} deleteTodos = {this.delTodo} setUpdate ={this.setUpdate}/>
            </div>
          </div>
        );
      }
    }
 
export default TodoContainer;