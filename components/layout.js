import Navbar from "./navbar";
import Head from 'next/head';
import Footer from "./footer";
import Link from "next/link";

export default function Layout({ children, title }){
    return (
        <div className="mx-auto md:px-4 min-h-screen">
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
            <main className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>{ children }</main>
            <div data-aos="fade-down" data-aos-duration={1000} data-aos-delay={700} className="flex justify-center items-center shadow mt-10 sticky bottom-3">
                <Link href="/apply" passHref>
                    <button className="w-full md:w-1/2 py-2 mb-10 px-10 bg-[#05A0C8] rounded-2xl text-white">Apply</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}