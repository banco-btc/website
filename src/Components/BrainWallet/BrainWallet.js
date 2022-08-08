import { React, Component } from "react";
import StepByStep from './StepByStep';

export default class BrainWallet extends Component {
    render() {
        return (
            <StepByStep passphrase="esta é a passphrase da minha brain wallet" />
        );
    }
}