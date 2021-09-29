import React, {Component} from "react";

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();  //Cancela el comportamiento por defecto
    }

    onChange = e => {
        console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
         //se puede ejecutar funciones desde documentos diferentes

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name= "title"
                    placeholder="Write a task" 
                    onChange={this.onChange}
                    value = {this.state.title}/>
                <br/>
                <br/> 
                <textarea 
                    name= "description"
                    placeholder="Write a description" 
                    onChange={this.onChange}
                    value = {this.state.description}></textarea>
                <br/>
                <br/>
                <button type="submit">  
                    Save a Task
                </button>
            </form>
        )
    }
}