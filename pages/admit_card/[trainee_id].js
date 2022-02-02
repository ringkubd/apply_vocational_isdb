import Head from "next/head";
import {useEffect, useRef, useState} from "react";
import { useRouter } from "next/router";
import Img from 'next/image'
import ReactToPrint from 'react-to-print';



function AdmitCard({trainee_id, traineeInfo}) {
    const router = useRouter()
    const printContent = useRef("")

    useEffect(()=>{
        if (traineeInfo.name == undefined && traineeInfo.round == undefined){
            //router.push('/404')
        }
    },[traineeInfo])



    return (
        <div className="container mx-auto">
            <ReactToPrint
                trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return <a className="text-center" href="#">Print this out!</a>;
                }}
                content={() => printContent.current}
            />
            <div className="m-auto print:m-0 print:p-0 print:w-[23cm] print:h-[29cm]" ref={printContent}>
                <div className="flex flex-col justify-center items-center border-1 w-[100%] py-4 mt-10 mx-auto border-slate-400">
                    <div className="">
                        <Img src="https://isdb-bisew.org/img/isdb-bisew.png" width="90"
                             height="100"
                             className="h-12 w-12"/>
                    </div>
                    <div className="text-center">
                        <h1>IsDB-BISEW Vocational Training Programme</h1>
                        <h1 className="print:mb-3">Admit Card</h1>
                    </div>
                    <div className="w-1/2 print:w-3/4">
                        <table className="table w-full border-collapse border border-slate-400">
                            <tbody className="border-1">
                            <tr>
                                <td className="border-collapse border border-slate-200 p-2">Round</td>
                                <td className="border-collapse border border-slate-200 p-2">29</td>
                                <td className="border-collapse border border-slate-200 p-2 text-center" rowSpan="5">
                                    <Img src="https://isdb-bisew.org/img/isdb-bisew.png" width="90"
                                         height="100"
                                         className="h-12 w-12"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-collapse border border-slate-200 p-2">Applicant ID</td>
                                <td className="border-collapse border border-slate-200 p-2">422225</td>
                            </tr>
                            <tr>
                                <td className="border-collapse border border-slate-200 p-2">Applicant Name</td>
                                <td className="border-collapse border border-slate-200 p-2">MD. Anwar Jahid</td>
                            </tr>
                            <tr>
                                <td className="border-collapse border border-slate-200 p-2">Father's Name</td>
                                <td className="border-collapse border border-slate-200 p-2">MD. Ainal Hossain</td>
                            </tr>
                            <tr>
                                <td className="border-collapse border border-slate-200 p-2">Mobile Number</td>
                                <td className="border-collapse border border-slate-200 p-2">01737956549</td>
                            </tr>
                            </tbody>
                        </table>
                        <ol className="list-disc ml-5 mt-10">
                            <li>পরীক্ষার্থীকে অবশ্যই এই প্রবেশপত্রটি (Admit Card) সংরক্ষণ করতে হবে।</li>
                            <li>পরীক্ষার্থীকে পরীক্ষার সময় অবশ্যই এই প্রবেশপত্র এবং সকল পরীক্ষার মূল সার্টিফিকেট সঙ্গে আনতে হবে।</li>
                            <li>পরীক্ষার সময় ও নির্বাচিত প্রাথী তালিকা http://isdb-bisew.org ওয়েবসাইট এ প্রকাশিত হবে।</li>
                            <li>পরীক্ষার স্থান: আই ডি বি ভবন (৪র্থ তলা), ই/৮-এ রোকেয়া সরণী, আগারগাঁও, ঢাকা।</li>
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center border-1 w-[100%] py-4 mx-auto border-slate-400">
                    <div className="w-2/3 print:w-3/4">
                        <p className="text-center font-serif text-xs bg-gray-50">Islamic Development Bank Bangladesh Islamic Solidarity Educational Wakf (IsDB-BISEW)
                            IDB Bhaban (4th Floor), E/8-A, Rokeya Sharani, Sher-e-Bangla Nagar, Dhaka-1207, Bangladesh, Phone: +880 2 9183006, Fax: +880 2 9183001 - 2, Email: idbb@isdb-bisew.org</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps({query, res}) {
    return {
        props: {
            trainee_id : query.trainee_id,
            traineeInfo: query,
            error: 'oops'

        }
    }
}
export default AdmitCard;