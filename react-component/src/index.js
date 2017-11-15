import React from 'react';
import ReactDOM from 'react-dom'
import "./index.css"

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        };
    }

    updateTodo(value) {
        if(value == ""){
            return;
        }

        var todoItems = this.state.todoItems.slice();
        todoItems.push(value);

        this.setState({
            todoItems: todoItems
        });
    }

    render() {
        return (
            <div>
                <InputComponent onClick={(val) => this.updateTodo(val)} />
                <ToDoComponent className="todoList" todoItems={this.state.todoItems} />
            </div>
        );
    }
}

class InputComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="input-group">
                <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control"></input>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => {
                        this.props.onClick(this.state.value);
                        this.setState({ value: "" })
                    }}>Add Todo Item</button>
                </span>
            </div>
        );
    }
}

class ToDoComponent extends React.Component {
    render() {
        return (
            <ul className="list-group todoList">
                {
                    this.props.todoItems.map((item, i) => {
                        return (
                            <li className="list-group-item" key={i}><ToDoItemComponent value={item} /></li>
                        );
                    })
                }
            </ul>
        );
    }
}

class ToDoItemComponent extends React.Component {
    render() {
        return (
            <h6>{this.props.value}</h6>
        );
    }
}

ReactDOM.render(
    <div>
        <h1>ToDoList-React</h1>
        <AppComponent />
    </div>
    ,
    document.getElementById('root')
);