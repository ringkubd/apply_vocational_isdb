import Head from 'next/head'
import Header from "../../components/header";
import {useEffect, useRef, useState} from "react";
import useSWR from "swr";

function Apply({districts}) {
    const [ selectValue, setSelectValue ] = useState("")
    const [searchDistrict, setSearchDistrict] = useState([]);

    const [formData, setFormData] = useState([])

    const currentStudyingLevel = useRef(null);
    const districtRef = useRef(null);
    const districtInput = useRef(null);
    const presentAddress = useRef(null);
    const same_as_permanent = useRef(null);


    const onChange = (v) => {
        setSelectValue(v)
    }

    const presentStatus = (e) => {
        if (e.target.value === "Studying"){
            currentStudyingLevel.current.removeAttribute('disabled')
            currentStudyingLevel.current.focus()
        }else{
            currentStudyingLevel.current.setAttribute('disabled', true)
            currentStudyingLevel.current.value = ""
        }
    }

    const onDistrictSearch = (e) => {
        let inputVal = e.target.value
        if (inputVal === "" || inputVal === " "){
            districtRef.current.style.display = "none";
            return
        }
        let search_result = districts.filter((district) => {
            return district.name.toLowerCase().includes(inputVal.toLowerCase())
        })
        setSearchDistrict(search_result)

        if (search_result.length > 0){
            districtRef.current.style.display = "block";
        }

    }
    const onClickDistrict = (e) => {
        districtRef.current.style.display = "none";
        districtInput.current.value = e.target.innerHTML
    }

    const onClickSameAsPermanent = (e) => {
        if (e.target.checked){
            presentAddress.current.setAttribute('disabled', true)
            presentAddress.current.classList.remove('bg-gray-200');
            presentAddress.current.classList.add('bg-gray-600');


        }else{
            presentAddress.current.removeAttribute('disabled', true)
            presentAddress.current.classList.remove('bg-gray-600');
            presentAddress.current.classList.add('bg-gray-200');
        }
    }

    const onFormChange = (e) => {
        setFormData({
            [e.target.name] : e.target.value
        })
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

            <div className="bg-gray-100 mx-auto max-w-7xl bg-white md:py-20 py-10 px-5 md:px-24 shadow-xl mb-24">
                <form>
                    <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group shadow-cyan-500/50 hover:shadow-[#05a0c8] hover:backdrop-blur-2xl">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Personal Information:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Candidate Name<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="text" id="name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="father_name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Father's Name<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="text" id="father_name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="mother_name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Mother's Name<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="text" id="mother_name" required className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="dob" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Date of Birth<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="date" required id="dob" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="gender" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Gender<sup className="text-sm text-red-500">*</sup></label>
                                <select name="gender" required id="gender" onChange={onFormChange} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="religion" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Religion<sup className="text-sm text-red-500">*</sup></label>
                                <select name="religion" required id="religion" onChange={onFormChange} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                    <option value="islam">Islam</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="marital_status" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Marital Status<sup className="text-sm text-red-500">*</sup></label>
                                <select name="marital_status" onChange={onFormChange} required id="marital_status" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="nid" className="uppercase tracking-wide text-black text-xs font-bold mb-2">NID</label>
                                <input type="number" onChange={onFormChange} id="nid" name="nid" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="photo" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Photo<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="file" accept="image/*" id="photo" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border-2 p-4 mb-4 shadow hover:shadow-2xl rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Educational Information:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="last_degree" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Highest Educational Qualification<sup className="text-sm text-red-500">*</sup></label>
                                <select onChange={onFormChange} name="education" required id="last_degree" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
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
                                <input onChange={onFormChange} type="number" name="roll" required id="roll" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="passing_year" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Passing Year<sup className="text-sm text-red-500">*</sup></label>
                                <input type="number" name="passing_year" required id="passing_year" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="gpa" className="uppercase tracking-wide text-black text-xs font-bold mb-2">GPA/Marks<sup className="text-sm text-red-500">*</sup></label>
                                <input onChange={onFormChange} type="text" name="gpa" required id="passing_year" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Present Status:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="present_status" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Present Status<sup className="text-sm text-red-500">*</sup></label>
                                <select onChange={presentStatus} name="present_status" required id="present_status" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                                    <option value="">Present Status</option>
                                    <option value="Studying">Studying</option>
                                    <option value="Employed">Employed</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Unemployed">Unemployed</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="studying_level" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Present Studying Level<sup className="text-sm text-red-500">*</sup></label>
                                <select ref={currentStudyingLevel} disabled={true} onChange={onFormChange} name="studying_level" required id="studying_level" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
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
                        </div>
                    </fieldset>
                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Contact Information:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="email" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Email</label>
                                <input type="email"  onChange={onFormChange} name='email' id="email" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="mobile" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Mobile Number<sup className="text-sm text-red-500">*</sup></label>
                                <input type="tel" onChange={onFormChange} name="mobile" required id="mobile" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="guardian_number" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Guardian Number<sup className="text-sm text-red-500">*</sup></label>
                                <input type="tel" onChange={onFormChange} name="guardian_number" required id="guardian_number" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Permanent Address:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="permanent_address" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Permanent Address<sup className="text-sm text-red-500">*</sup></label>
                                <input className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3' onChange={onFormChange} name="permanent_address" id='permanent_address' />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="district" className="uppercase tracking-wide text-black text-xs font-bold mb-2">District<sup className="text-sm text-red-500">*</sup></label>
                                <input name="district" required id="district" onChange={onFormChange} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1 relative" ref={districtInput} onKeyUp={onDistrictSearch} />
                                <ul className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-2 mb-3 list-none min-h-50 max-h-40 transition ease-in-out overflow-x-scroll hidden" ref={districtRef}>
                                    {
                                        searchDistrict.map((d, index) => {
                                            return (
                                                <li key={index} className="cursor-pointer p-1 border-b-2 border-amber-100 hover:shadow hover:text-blue-900" onClick={onClickDistrict}>{d.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border-2 p-4 shadow hover:shadow-2xl mb-4 rounded group  shadow-cyan-500/50 hover:shadow-[#05a0c8]">
                        <legend className="font-bold text-[#05A0C8] border-2 p-2 rounded-lg bg-transparent group-hover:backdrop-blur-2xl bg-cyan-50 bg-gradient-to-r to-cyan-200 via-cyan-200 from-cyan-300">Present Address:</legend>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3 mb-6 md:mb-0">
                                <label htmlFor="present_address" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Present Address<sup className="text-sm text-red-500">*</sup></label>
                                <label htmlFor="same_as_permanent" className="text-xs border-2 p-1 border-cyan-200" onClick={onClickSameAsPermanent}>Same as Permanent <input type="checkbox" ref={same_as_permanent} id="same_as_permanent" className="rounde"/></label>
                                <textarea ref={presentAddress} onChange={onFormChange} className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3' name="present_address" id='present_address'></textarea>
                            </div>
                            <div className="md:w-full px-3 mb-6 md:mb-0">
                                <label htmlFor="reference" className="tracking-wide text-black text-xs font-bold mb-2"><span className='uppercase'>Reference</span><sup className="text-xs font-normal">(if any)</sup></label>
                                <textarea onChange={onFormChange} className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3' name="reference" id='reference' placeholder="Name, Designation, Contact Number, Address"></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <div className="-mx-3 md:flex justify-end mb-6">
                        <div className="md:w-1/2 md:mt-6 px-3 mb-6 md:mb-0">
                            <input type="submit" value="Apply" className="w-full bg-green-600 text-black border border-gray-200 rounded py-3 px-4 mb-3 shadow hover:shadow-2xl shadow-green-500/50 hover:shadow-green-500"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
Apply.getInitialProps = async ({ req }) => {
    const protocol = req?.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(`${baseUrl}/api/district`)
    const json = await res.json()
    return { districts: json }
}
export default Apply;