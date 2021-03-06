import {React, Component} from "react";
import styles from "../components/TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

class TodoItem extends Component {

    state = {
        editing: false,

    }

    handleEditing = () =>{
        this.setState({
            editing: true,
        })
    }
    handleUpdateDone = (event) => {
        if (event.key === 'Enter'){
            this.setState({editing: false})
        }
    }

    componentWillUnmount(){
        console.log('Cleaning up ...');
    }

    render() { 
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) 
        {
            viewMode.display = "none"
        } else 
        {
            editMode.display = "none"
        }

        const { completed, id, title } = this.props.todo

        const completedStyle = 
        {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type = 'checkbox' checked ={completed} onChange={() => this.props.handleChangeProps(id)}/>
                    <button onClick={()=> this.props.deleteTodoProps(id)}> <FaTrash className="trash" /></button>
                    <span style={completed ? completedStyle : null}>
                    {title}
                    </span>
                </div>
                <input type='text' style={editMode} className={styles.textInput}  value={title} onChange= {e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdateDone}
                />
            </li>
        );
    }
}

export default TodoItem;