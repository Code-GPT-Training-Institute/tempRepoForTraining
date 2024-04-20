import { Component } from "react";
import AppChildComponent from "./AppChildComponent";

class AppComponent extends Component {

    state = {
        user: {
            name: "Balaji",
            age: 1,
            height: 0
        }
    }

    setUser = (user) => {
        this.setState({ user: user });
        // this.state.user = user;
    }

    render() {

        return (
            <>
                <p>{ this.props.appName }</p>
                <p>{ this.state.user.age }</p>

                <input type="text" 
                        value={ this.state.user.name }  
                        onChange={ (evt) => this.setState({user : {
                                                                    ...this.state.user,
                                                                    name: evt.target.value
                                                                }
                                                        })
                                }/>
                <AppChildComponent name = { this.props.appName } 
                                    user = {this.state.user}
                                    setUser = { this.setUser } />
            </>
        )
    }
}

export default AppComponent