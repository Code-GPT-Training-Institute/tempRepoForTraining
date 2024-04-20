import { Component } from "react";

class AppChildComponent extends Component {

    render() {

        let {name, user, setUser} = this.props;
        return (
            <>
                <p>{name}</p>

                <p> { user.name }</p>
                <p>{ JSON.stringify(this.props) }</p>

                <input type="number" 
                        value= { user.age }
                        onChange={ (evt) => setUser({
                            ...user,
                            age : evt.target.value
                        })} />
            </>
        )
    }
}

export default AppChildComponent;