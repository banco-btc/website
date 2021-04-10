import React, { useState } from 'react';
import jquery from 'jquery';

export default function BtcPrice() {
    const [price, setPrice] = useState();
    setInterval(() => {
        setPrice(fetchPrice())
    }, 10000);
    function fetchPrice() {
        const price = 0;
        jquery.getJSON(
            "https://blockchain.info/ticker",
            function (data) {
                console.log(price);
                price = data["EUR"]["15m"];
            }
        )
        console.log(price);
        return price;
    }

    return(
            <GetPrice price={price} />
    );
}

function GetPrice(props) {
    return(
        <div>
            {props.price}
        </div>
    );
}