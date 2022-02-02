import Head from "next/head";
import Header from "../components/header";
import {BiAlarm} from "react-icons/bi";
import {useEffect, useRef} from "react";
import {BanglaDate, EnglishNumberToBangla} from "../lib/banglaDate";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Bar, Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, ChartDataLabels);

function Home({intake_schedule, report}){
    const scrollToTop = useRef("");

    useEffect(() => {

    });

    const data = {
        labels: ['Number of Application', 'Number of Assigned', 'Number of Complete Graduate', 'Number of Placed', 'Running Student'],
        datasets: [
            {
                label: 'Students',
                data: [report?.total_application, report?.total_assigned, report?.number_of_complete_graduate, parseInt((parseInt(report?.number_of_complete_graduate) / 100) * 95), report?.number_of_student_running],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'এক নজরে ভোকেশনাল প্রজেক্ট',
            },
            ChartDataLabels
        },
    }

    const scrollTo = (ref) => {
        if (ref && ref.current /* + other conditions */) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            console.log(ref.current.scrollTop)
        }
    }

    const handleScroll = (e) => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log(element.scrollHeight)
        }
        console.log(element.scrollHeight)
    }

    return (
        <div>
            <Head>
                <title>IsDB-BISEW Vocational Training Program</title>
            </Head>
            <Header title="IsDB-BISEW Vocational Program"/>
            <main className="container mx-auto mb-10">
                <div className="w-full py-2 shadow-xl min-h-max text-center rounded-lg bg-[#05A0C8] sticky" ref={scrollTo} onScroll={handleScroll}>
                    <h1 className="text-4xl">Round - {EnglishNumberToBangla(intake_schedule.round)}</h1>
                    <h2 className="flex items-center justify-center">
                        <BiAlarm className="animate-ping text-red-600 text-xl" /> আবেদনের শেষ তারিখ : <span className="text-red-700 font-bold">{ BanglaDate(intake_schedule.end_date)}</span>
                    </h2>
                </div>
                <div className="w-full shadow-lg p-2 my-2 overflow-auto rounded-lg">
                    <span className="text-md font-bold">কোর্স পরিচিতিঃ </span> IsDB-BISEW বিগত ছয় বছর যাবত ভোকেশনাল স্কলারশিপ এর অধীনে বিভিন্ন ট্রেডে ছয় মাস (৬) মেয়াদী কারিগরী শিক্ষা প্রদান করে আসছে। আর্থিক কারণে পড়াশোনা বন্ধ হয়ে যাওয়া
                    দরিদ্র মুসলিম যুব সমাজকে দক্ষ ও পেশাদার পর্যায়ে উন্নীত করাই এই প্রোগাম এর একমাত্র লক্ষ্য ও উদ্দেশ্য।
                    বর্তমানে রাউন্ড-১ থেকে রাউন্ড-{EnglishNumberToBangla(report.last_round)} পর্যন্ত {EnglishNumberToBangla(report.number_of_complete_graduate)} জন এই স্কলারশিপ এর আওতায় ট্রেনিং সম্পন্ন করে দেশ ও দেশের বাহিরে ১৪০টিরও বেশী প্রতিষ্ঠানে কর্মরত আছে।
                </div>
                <div className="w-full shadow-xl p-2 my-2 overflow-auto rounded-lg max-h-45 flex flex-col">
                    <Pie data={data} height={40} width={40} className="max-h-40 w-full"/>
                    <Bar type='bar' data={data} options={options} height={40} width={40} className="max-h-40 w-full"/>
                </div>
                <div className="flex border-2 my-2 border-gray-300 w-full min-h-fit rounded-lg">
                    <div className="border-r-2 p-2 m-2 group w-full">
                        <h2 className="font-bold group-hover:animate-bounce group-hover:text-red-700 group-hover:shadow-2xl group-hover:shadow-amber-400">স্কলারশিপের সুবিধাসমূহ:</h2>
                        <ul>
                            <li>ছয় মাস মেয়দী (৭২০ ঘন্টা) প্রশিক্ষণের মাধ্যমে দক্ষ কারিগরী শিক্ষায় শিক্ষিত হওয়ার সুযোগ</li>
                            <li>থাকা খাওায়া সহ সম্পূর্ণ ফ্রি ট্রেনিং</li>
                            <li>প্রশিক্ষণ চলাকালিন মাসিক ৫০০ টাকা হাত খরচ</li>
                            <li>চাকরি উপযোগী সিলেবাস এবং অভিজ্ঞ প্রশিক্ষক এর মাধ্যমে প্রশিক্ষণ প্রদান</li>
                            <li>চাকুরি পাওয়ার ক্ষেত্রে সর্বত্নক সহযোগীতা</li>
                        </ul>
                    </div>
                    <div className="border-l-2 p-2 m-2 group w-full">
                        <h2 className="font-bold group-hover:animate-bounce group-hover:text-red-700">ট্রেড কোর্স সমূহ:</h2>
                        <ul>
                            <li>ইলেক্ট্রিক্যাল ওয়াকর্স</li>
                            <li>ইলেক্ট্রনিক্স</li>
                            <li>রেফ্রিজারেশন এন্ড এয়ার কন্ডিশনিং</li>
                            <li>ওয়েল্ডিং এন্ড ফেব্রিকেশন</li>
                            <li>মেশিনিস্ট</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full shadow-xl p-2 my-2 overflow-auto rounded-lg">
                    <h1 className="w-full border-b-2 p-3 border-gray-300 font-bold">সাধারণ নির্দেশাবলী</h1>
                    <ul>
                        <li>শুধুমাত্র সুবিধাবঞ্চিত মুসলিম প্রার্থীদের জন্য প্রযোজ্য</li>
                        <li>একজন প্রার্থী একবার আবেদন করতে পারবে</li>
                        <li>জন্ম তারিখ সঠিকভাবে প্রদান করতে হবে</li>
                        <li>
                            <h4>নিম্নলিখিত তথ্যাদি সংশ্লিষ্ট ডকুমেন্ট দেখে ফরম পূরণ করুন:</h4>
                            <ul className="list-disc">
                                <li>JSC, SSC, HSC এর ফলাফল, ফলাফল প্রকাশের বছর, রোল নম্বর।</li>
                                <li>ফরম পূরণের জন্য প্রত্যেক আবেদনকারীকে মোবাইল নম্বর ব্যবহার করতে হবে এবং মোবাইল নাম্বার টি যাচাই এর জন্য দ্বিতীয়বার কনফার্ম মোবাইল নাম্বার এর ঘরে লিখতে হবে।</li>
                                <li>Passport সাইজ এর ছবি আপলোড করতে হবে।</li>
                                <li>প্রবেশপত্র ছাড়া পরীক্ষায় অংশগ্রহণ করতে দেয়া হবে না।</li>
                                <li>এই ফরম Submit করার পর প্রিন্ট বাটন এ ক্লিক করে প্রবেশপত্র প্রিন্ট করতে হবে।</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="w-full shadow-xl p-2 my-2 overflow-auto rounded-lg">
                    <h1 className="w-full border-b-2 p-3 border-gray-300 font-bold">আবেদন করার যোগ্যতা</h1>
                    <ul>
                        <li>সর্বনিম্ন অষ্টম শ্রেণী পাস এবং সর্বোচ্চ এসএসসি পাস</li>
                        <li>বয়সসীমা ১৮ থেকে ২৬ বছর</li>
                        <li>জন্ম তারিখ সঠিকভাবে প্রদান করতে হবে</li>
                        <li className="text-red-600">
                            বর্তমানে যারা পড়াশোনার সাথে যুক্ত আছে তাদের জন্য এই স্কলারশিপ প্রযোজ্য নয়
                            (যারা অনার্স/মাস্টার্স/ডিপ্লোমা শেষ করেছে অথবা অধ্যায়নরত আছে তাদের IsDB-BISEW IT Scholarship Programme এর ১ বছর মেয়াদী ট্রেনিং এর মাধ্যমে IT Professional হওয়ার সুযোগ আছে, বিস্তারিত: https://apply.idb-bisew.info/)
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}


Home.getInitialProps = async ({ req }) => {
    const api_base_url = process.env.API_BASE
    const res = await fetch(`${api_base_url}intakeschedule`)
    const json = await res.json()

    const report = await fetch(`${api_base_url}report`)
    const reportJson = await report.json()

    return {
        intake_schedule: json,
        report: reportJson
    }
}
export default Home;
