import React from 'react';
import { motion } from "framer-motion";
import { Particles } from 'react-particles-js';
import { Card, Col } from 'react-bootstrap';

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
            <div>
              <div className="d-inline-flex position-absolute mx-auto">
                <Card className="shadow text-dark">
                  <Card.Header>
                    BitBadger
                  </Card.Header>
                  <Card.Body>
                    Unchain your money, Unchain yourself
                  </Card.Body>
                </Card>
              </div>
              
              <Particles className="" params={{
                particles: {
                    number: {
                      value: 20,
                      density: {
                        enable: true,
                        value_area: 700.3480069132609
                      }
                    },
                    color: {
                      value: "#f6921a"
                    },
                    shape: {
                      type: "image",
                      stroke: {
                        width: 1,
                        color: "#f6921a"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "images/logo.svg"
                      }
                    },
                    opacity: {
                      value: 1,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: true
                      }
                    },
                    size: {
                      value: 18,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 5,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#000000",
                      opacity: 1,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "none",
                      random: true,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 5
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true
              }} />
            </div>
        </motion.div>
    );
}