import Head from 'next/head'
import Header from "../../components/header";
import {useState} from "react";
import useSWR from "swr";

export default function Apply() {
    const [ selectValue, setSelectValue ] = useState("")
    const onChange = (v) => {
        setSelectValue(v)
    }

    let { data, error } = useSWR('/api/major', url => fetch(url).then(r => r.json()))
    if (error) console.log(error)
    if (!data) data = []

    return (
        <div className="sm:mx-auto">
            <Head>
                <title>{ `Apply IsDB-BISEW IT Scholarship` }</title>
            </Head>
            <Header title={`IsDB-BISEW IT Scholarship`} />

            <div className="bg-gray-100 mx-auto max-w-6xl bg-white md:py-20 py-10 px-10 md:px-24 shadow-xl mb-24">
                <form>
                    <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group shadow-cyan-500/50 hover:shadow-[#05a0c8] hover:backdrop-blur-2xl">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg group-hover:animate-bounce bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50">Personal Information:</legend>
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
                    <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group  shadow-cyan-500/50 hover:shadow-cyan-500">
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
                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-cyan-500">
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
