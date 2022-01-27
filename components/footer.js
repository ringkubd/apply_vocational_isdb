import { FaHome} from "react-icons/fa";
import {FcAbout, FcFaq} from "react-icons/fc";
import Link from 'next/link'
import {VscIssues} from "react-icons/vsc";
import useSWR from "swr";
import {FiFacebook} from "react-icons/fi";
import React from "react";

function Footer(){
    const {data, error} = useSWR('/api/footer_links', url => fetch(url).then(r => r.json()))
    if (error) return <div className="flex items-center justify-items-center">{error.message}</div>
    if (!data) return <div className="flex items-center justify-items-center">Loading....</div>


    return (
        <div>
            <div className="w-full md:hidden">
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                    <div id="tabs" className="flex justify-between">
                        <Link passHref href="/">
                            <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                                <FaHome className="inline-block text-2xl mb-1 text-[#05A0C8]" />
                                <span className="tab tab-home block text-xs">Home</span>
                            </a>
                        </Link>
                        <Link passHref href="/faq" >
                            <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                                <div>
                                    <FcFaq className="inline-block text-2xl mb-1" />
                                    <span className="tab tab-home block text-xs">FAQ</span>
                                </div>
                            </a>
                        </Link>
                        <Link passHref href="/course_outcome" >
                            <a  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                                <div>
                                    <VscIssues className="inline-block text-green-700 text-2xl mb-1" />
                                    <span className="tab tab-home block text-xs">Course Outcome</span>
                                </div>
                            </a>
                        </Link>
                        <a href="https://isdb-bisew.org/" target="_blank" rel="noreferrer" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <div>
                                <FcAbout className="inline-block text-2xl mb-1" />
                                <span className="tab tab-home block text-xs">About Us</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <footer className="w-full min-h-fit mb-10 md:mb-0 bg-[#25272E] rounded shadow text-gray-300">
                <div className="md:flex">
                    <div className="p-4 w-full">
                        <h2 className="w-full border-b-2 font-bold text-xl">Address</h2>
                        <ul className="list-none pl-0 pt-0 mt-0.5 font-light">
                            <li>{data[0].address.flat}</li>
                            <li>{data[0].address.location}</li>
                            <li>Phone: <a href={'tel:'+data[0].address.phone}>{data[0].address.phone}</a></li>
                            <li>Email: <a href={'mailto:'+data[0].address.phone}>{data[0].address.email}</a></li>
                            <li>Fax: <a href={'fax:'+data[0].address.fax}>{data[0].address.fax}</a></li>
                        </ul>
                    </div>
                    <div className="p-4 w-full">
                        <h2 className="w-full border-b-2 font-bold text-xl">IsDB-BISEW Programme</h2>
                        <ul className="list-none pl-0 pt-0 mt-0.5 font-light">
                            {
                                data[1].programme.map((pro, index) => {
                                    return <li key={index}>
                                        <a href={pro.link} target="_blank" rel="noreferrer" >{pro.text}</a>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="p-4 w-full">
                        <h2 className="w-full border-b-2 font-bold text-xl">Important Links</h2>
                        <ul className="list-none pl-0 pt-0 mt-0.5 font-light">
                            {
                                data[2].other_links.map((pro, index) => {
                                    return <li key={index}>
                                        <a href={pro.link} target="_blank" rel="noreferrer" >{pro.text}</a>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="p-4 w-full">
                        <h2 className="w-full border-b-2 font-bold text-xl">Connect</h2>
                        <ul className="list-none pl-0 pt-0 mt-0.5 font-light">
                            <li>
                                <Link href={data[3].social.facebook} passHref>
                                    Fb
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;