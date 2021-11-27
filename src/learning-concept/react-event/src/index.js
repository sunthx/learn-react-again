import ReactDOM from 'react-dom';
import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isToggleOn: true };

        //如果不进行bind，handleclick 中的 this 就等于 undefined.
        //bind 的第一种方式
        //this.handleClick = this.handleClick.bind(this);


    }

    // handleClick(){
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    //第二种方法：public class field
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);