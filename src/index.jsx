import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./classBased/components/todoContainer"
// import TodoList from "./components/TodoList"
import "./classBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
    <StrictMode> 
        <Router>
         <TodoContainer />
        </Router>
    </StrictMode>, document.getElementById("root"))