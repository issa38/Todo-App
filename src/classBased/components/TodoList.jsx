import {React, Component} from "react";
import TodoItem from "./todoItem";


class TodoList extends Component {

    render() { 
        return (
            <ol>
            {this.props.todos.map(todo => 
            (
              <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps = {this.props.deleteTodos}
              setUpdate= {this.props.setUpdate}
            />
            )
          )
        }
          </ol>
        );
    }
}
 
export default TodoList;