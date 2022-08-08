import { React } from "react";

export default function Greetings() {
    const greeting = () => {
        const hora = new Date().getHours();
        if (hora >= 5 && hora < 13) {
            return "Bom dia! Seja bem vindo.";
        } else if (hora >= 13 && hora < 21) {
            return "Boa tarde! Seja bem vindo."
        } else {
            return "Boa noite! Seja bem vindo."
        }
    }

    return(
        <div>{greeting()}</div>
    );
}