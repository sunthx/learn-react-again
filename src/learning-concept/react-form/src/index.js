import React from 'react';
import ReactDOM from 'react-dom';

//可变状态 mutable state
class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      desc: '',
      gender: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      // ES6 的计算属性
      [name]: value
    });
  }

  handleSumbit(event) {
    alert(this.state.userName + '|' + this.state.desc + '|' + this.state.gender);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <label>
          名字：
          <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          简介:
          <textarea name="desc" value={this.state.desc} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          性别：
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="未知">未知</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);