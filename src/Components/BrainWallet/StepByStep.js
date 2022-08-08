import { React, Component } from "react";

export default class StepByStep extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Esta é a brain wallet do bitcoin!</h1>
                <p>Passphrase escolhida: {this.props.passphrase}</p>
            </div>
        );
    }
}