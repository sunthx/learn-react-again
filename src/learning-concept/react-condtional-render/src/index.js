import React from 'react';
import ReactDOM from 'react-dom';

function MailBox(props){
    const unreadMessage = props.unreadMessage;
    if(unreadMessage.length === 0)
        return null;

    return (
        <div>
            <h2>Mail</h2>
            { unreadMessage.length > 0 && 
                <h3>
                    You have {unreadMessage.length} unread message.
                </h3>
            }
        </div>
    );
}

function UserGreeting(props) {
    const messages = ['react','Vue','Angular'];
    return (
        <div>
            <h1>Welcome back!</h1>
            <MailBox unreadMessage={messages}/>
        </div>
    );
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggIn = props.isLoggIn;
    if (isLoggIn) {
        return <UserGreeting />
    }

    return <GuestGreeting />
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById("root")
);