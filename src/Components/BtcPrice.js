import React, { useState } from 'react';
import jquery from 'jquery';

export default function BtcPrice() {
    const [price, setPrice] = useState(0);
    setInterval(() => {
        fetchPrice()
    }, 10000);
    function fetchPrice() {
        jquery.getJSON(
            "https://blockchain.info/ticker",
            function (data) {
                price = data["EUR"]["15m"];
                setPrice(price);
            }
        )
    }

    return(
            <GetPrice price_holder={price} />
    );
}

function GetPrice(props) {
    return(
        <div>
            1 BTC = {props.price_holder} EUR
        </div>
    );
}