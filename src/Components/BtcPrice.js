import React, { useState } from 'react';
import jquery from 'jquery';

export default function BtcPrice() {
    const [price, setPrice] = useState(fetchPrice());
    setInterval(() => {
        setPrice(fetchPrice());
    }, 10000);
    function fetchPrice() {
        let price;
        jquery.getJSON(
            "https://blockchain.info/ticker",
            function (data) {
                price = data["EUR"]["last"];
            }
        )
        return price;
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