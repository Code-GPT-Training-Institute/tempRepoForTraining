import { Component, createRef } from "react";

class AppClassComponent extends Component {

    state = {
        power : 0,
        strength: 10
    }

    powerIpReg = createRef();

    setPower = (evt) => {
        this.setState({power: Number(evt.target.value)});
    }

    increasePower = () => {
        this.setState({power : this.state.power + 1});
    }

    updatePowerOnClick = () => {
        this.setState({power: this.powerIpReg.current.value});
    }

    render() {
        return (
            <>
                <div>
                    <h1>Class Component</h1>

                    <h3> POWER: {this.state.power}</h3>

                    <button onClick={ this.increasePower }>increase power</button>
                    <br/>

                    <input value= { this.state.power } onChange={ (evt) => this.setState({power: Number(evt.target.value)}) } type='range' />

                    <input value = { this.state.power } min={1} onChange={ this.setPower } ref = { this.powerIpReg } type='number' />
                    <button onClick={ this.updatePowerOnClick }>submit</button>
                    {/* <button onClick={ () => setPower(Number(powerInputRef.current.value))}>submit</button> */}
                </div>
            </>
        )
    }
}

export default AppClassComponent;