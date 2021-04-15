import React from 'react';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";



export default function Home() {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-100vh",
            scale: 0.5
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "100vh",
            scale: 1.2
        }
    };
    const pageTransition = {
        duration: 1,
        type: "tween",
        ease: "anticipate"
    };
    return(
        <motion.div className="Home" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Image src="./images/btc.jpg" fluid></Image>
            Oi
        </motion.div>
    );
}