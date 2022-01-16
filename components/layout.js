import Navbar from "./navbar";
import Head from 'next/head';
import Footer from "./footer";
import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Particles from "react-tsparticles";

export default function Layout({ children, title }){
    const router = useRouter()


    return (
        <div className="mx-auto min-h-screen">
            <Head>
                <meta name="description" content="IsDB-BISEW was established following an agreement between the Islamic Development Bank, Jeddah, Saudi Arabia, and the Government of Bangladesh." />
                <meta name="author" content="IsDB-BISEW" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://isdb-bisew.org/apply" />
                <meta property="og:title" content="Apply for Vocational Training Programme" />
                <meta property="og:description" content="IsDB-BISEW was established following an agreement between the Islamic Development Bank, Jeddah, Saudi Arabia, and the Government of Bangladesh." />
                <meta property="og:image" content="https://isdb-bisew.org/photos/shares/Meta-Picture/isdb-bisew-11-2021.png" />

                <meta property="twitter:card" content="isdbbisew" />
                <meta property="twitter:url" content="https://isdb-bisew.org/apply" />
                <meta property="twitter:title" content="Apply for Vocational Training Programme" />
                <meta property="twitter:description" content="IsDB-BISEW was established following an agreement between the Islamic Development Bank, Jeddah, Saudi Arabia, and the Government of Bangladesh." />
                <meta property="twitter:image" content="https://isdb-bisew.org/photos/shares/Meta-Picture/isdb-bisew-11-2021.png" />
                <link rel="shortcut icon" href="https://isdb-bisew.org/img/logo.png" type="image/x-icon"/>
            </Head>
            <Navbar />
            <main className="mx-auto" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>{ children }</main>
            {
                router.pathname !== "/apply" ? (
                    <div data-aos="fade-down" data-aos-duration={1000} data-aos-delay={700} className="flex justify-center items-center shadow mt-10 sticky bottom-3">
                        <Link href="/apply" passHref>
                            <button className="w-full md:w-1/2 py-2 mb-10 px-10 bg-[#05A0C8] rounded-2xl text-white">Apply</button>
                        </Link>
                    </div>
                ) : ""
            }

            <Footer />
            <Particles
                className="bg-cyan-900 z-0 opacity-10 fixed overflow-visible"
                options={{
                    background: {
                        color: {
                            value: "#152fa1",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            >
            </Particles>
        </div>
    )
}