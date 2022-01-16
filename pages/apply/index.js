import Head from 'next/head'
import Header from "../../components/header";
import {useEffect, useRef, useState} from "react";
import useSWR from "swr";
import VanillaTilt from 'vanilla-tilt';
import Tilt from "../../components/tilt";

export default function Apply() {
    const [ selectValue, setSelectValue ] = useState("")
    const onChange = (v) => {
        setSelectValue(v)
    }


    let { data, error } = useSWR('/api/major', url => fetch(url).then(r => r.json()))
    if (error) console.log(error)
    if (!data) data = []

    const options = {
        reverse:                false,  // reverse the tilt direction
        max:                    35,     // max tilt rotation (degrees)
        startX:                 0,      // the starting tilt on the X axis, in degrees.
        startY:                 0,      // the starting tilt on the Y axis, in degrees.
        perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:                  300,    // Speed of the enter/exit transition
        transition:             true,   // Set a transition on enter/exit.
        axis:                   null,   // What axis should be disabled. Can be X or Y.
        reset:                  true,    // If the tilt effect has to be reset on exit.
        easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        glare:                  false,   // if it should have a "glare" effect
        "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        "mouse-event-element":  null,    // css-selector or link to HTML-element what will be listen mouse events
        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        gyroscope:              true,    // Boolean to enable/disable device orientation detection,
        gyroscopeMinAngleX:     -45,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
        gyroscopeMaxAngleX:     45,      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
        gyroscopeMinAngleY:     -45,     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
        gyroscopeMaxAngleY:     45,      // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    };


    return (
        <div className="sm:mx-auto">
            <Head>
                <title>{ `Apply IsDB-BISEW IT Scholarship` }</title>
            </Head>
            <Header title={`IsDB-BISEW IT Scholarship`} />

            <div className="bg-gray-100 mx-auto max-w-7xl bg-white md:py-20 py-10 px-5 md:px-24 shadow-xl mb-24">
                <form>
                    <Tilt options={options}>
                        <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group shadow-cyan-500/50 hover:shadow-[#05a0c8] hover:backdrop-blur-2xl">
                            <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Personal Information:</legend>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Candidate Name<sup className="text-sm text-red-500">*</sup></label>
                                    <input type="text" id="name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="father_name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Father's Name<sup className="text-sm text-red-500">*</sup></label>
                                    <input type="text" id="father_name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="mother_name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Mother's Name<sup className="text-sm text-red-500">*</sup></label>
                                    <input type="text" id="mother_name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="dob" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Date of Birth<sup className="text-sm text-red-500">*</sup></label>
                                    <input type="date" required id="dob" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="gender" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Gender<sup className="text-sm text-red-500">*</sup></label>
                                    <select name="gender" required id="gender" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="religion" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Religion<sup className="text-sm text-red-500">*</sup></label>
                                    <select name="religion" required id="religion" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                        <option value="islam">Islam</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="marital_status" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Marital Status<sup className="text-sm text-red-500">*</sup></label>
                                    <select name="marital_status" required id="marital_status" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </select>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="nid" className="uppercase tracking-wide text-black text-xs font-bold mb-2">NID</label>
                                    <input type="number" id="nid" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="photo" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Photo<sup className="text-sm text-red-500">*</sup></label>
                                    <input type="file" accept="image/*" id="photo" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                                </div>
                            </div>
                        </fieldset>
                    </Tilt>
                    <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg  group-hover:animate-bounce">Educational Information:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="last_degree" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Highest Educational Qualification<sup className="text-sm text-red-500">*</sup></label>
                                <select name="education" required id="last_degree" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                    <option value="VIII">VIII</option>
                                    <option value="JSC">JSC</option>
                                    <option value="JDC">JDC</option>
                                    <option value="SSC">SSC</option>
                                    <option value="Dakhil">Dakhil</option>
                                    <option value="SSC-VOC">SSC-VOC</option>
                                    <option value="Dakhil-VOC">Dakhil-VOC</option>
                                    <option value="HSC">HSC</option>
                                    <option value="Alim">Alim</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Fazil">Fazil</option>
                                    <option value="BA(Hons)">BA (Hons)</option>
                                    <option value="Masters">Masters</option>
                                    <option value="Kamil">Kamil</option>
                                    <option value="Diploma">Diploma</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="roll" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Roll Number<sup className="text-sm text-red-500">*</sup></label>
                                <input type="number" name="roll" required id="roll" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="passing_year" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Passing Year<sup className="text-sm text-red-500">*</sup></label>
                                <input type="number" name="passing_year" required id="passing_year" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg  group-hover:animate-bounce">Contact Information:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="email" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="mobile" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Mobile Number<sup className="text-sm text-red-500">*</sup></label>
                                <input type="tel" name="mobile" required id="mobile" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                        </div>
                    </fieldset>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 md:mt-6 px-3 mb-6 md:mb-0">
                            <input type="submit" value="Apply" className="w-full bg-green-600 text-black border border-gray-200 rounded py-3 px-4 mb-3 shadow hover:shadow-2xl shadow-green-500/50 hover:shadow-green-500"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
