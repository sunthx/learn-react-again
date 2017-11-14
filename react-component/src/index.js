import React from 'react';
import ReactDOM from 'react-dom'

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        };
    }

    updateTodo(value) {
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
                <ToDoComponent todoItems={this.state.todoItems} />
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
            <div class="input-group">
                <input value={this.state.value} onChange={this.handleChange} type="text" class="form-control"></input>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" onClick={() => this.props.onClick(this.state.value)}>Add Todo Item</button>
                </span>
            </div>
        );
    }
}

class ToDoComponent extends React.Component {
    render() {
        return (
            <ul class="list-group">
                {
                    this.props.todoItems.map((item, i) => {
                        return (
                            <li class="list-group-item" key={i}><ToDoItemComponent value={item} /></li>
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
            <div>
                <input type="checkbox"></input>{this.props.value}
            </div>

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