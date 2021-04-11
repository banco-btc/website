import React from 'react';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";



export default function Home() {
    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100vh"
        }
    };
    return(
        <motion.div className="Home" initial="out" animate="in" exit="out" variants={pageTransition}>
            <Image src="./images/btc.jpg" fluid></Image>
            Oi
        </motion.div>
    );
}