import ReactDOM from "react-dom";
import React from 'react';

//函数组件
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello,World.</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// function tick() {
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

// 2.
// 2.1 将 Clock 组件改为 class 组件
// 2.2 使用 state , 修改 state 应使用 setState()
// 2.3 使用了组件的生命周期，mount 与 unmount
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(()=> this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello,World.</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById("root"),
);