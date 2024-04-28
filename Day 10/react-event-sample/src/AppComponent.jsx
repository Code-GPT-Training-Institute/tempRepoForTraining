import { Component } from "react";

class AppComponent extends Component {

    state = {
        name: "My Class Component"
    }

    componentDidMount() {
        console.log("Component mounted.....");
        console.log(this.props);
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log("Component will un mount....");
    }

    render() {
        return (
            <>
                <p> App Component Works....!</p>
                <p> {this.props.power} </p>
                <p> {this.props.toggleBoolean} </p>
            </>
        )
    }
}

export default AppComponent;