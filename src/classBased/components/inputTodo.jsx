import React, { Component } from 'react';
import { FaPlusCircle } from "react-icons/fa"


class InputTodo extends Component {
    state = {
        title: ''
    }

    onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    };
    
    handleSubmit = e =>{
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodos(this.state.title)
            this.setState({
                title: ''
            })
        }else{
            alert('Please input something first.')
        }
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input className='input-text' type='text' placeholder='What to do?' value={this.state.title} onChange = {this.onChange} name ='title'/>
                <button className='input-submit'><FaPlusCircle /></button>
            </form>
        );
    }
}
 
export default InputTodo;