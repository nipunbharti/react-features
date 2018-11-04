import React from "react";
import ErrorBoundaries from "./ErrorBoundaries";

export default class ErrorBoundariesCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    onIncrement = (e) => {
        this.setState({
            counter: ++this.state.counter
        });
    }

    onDecrement(e) {
        this.setState({
            counter: this.state.counter--
        });
    }

    render() {
        if(this.state.counter == 5) {
            throw new Error('Crash');
        }
        return (
                <div className="counter">
                    {this.state.counter}
                    <button onClick={this.onIncrement}>+</button><button onClick={this.onDecrement}>-</button>
                </div>
        );
    }
}