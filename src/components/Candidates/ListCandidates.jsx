import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import ImageHeader from './image.png'
import UserIcon from '../../assets/images/userIcon.png'
import axios from 'axios';
import {  NavLink } from "react-router-dom";

const stages = ['applied', 'screen', 'tech', 'offer', 'hired', 'rejected'];

const STORAGE_KEY_CANDIDATES = 'talentflow_candidates';


const CandidateListings = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setfilterOption] = useState({ "jobTitle": [], "skills": [], "location": [], "salary": [] });
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [filterStage, setFilterStage] = useState('');
    const [sortBy, setSortBy] = useState('bestMatch');
    const [selectedIds, setSelectedIds] = useState([]);
    const observerRef = useRef(null); // Ref for the bottom element
    const lastScrollY = useRef(0); // Track scroll direction
    const [jobTitle, setjobTitle] = useState(undefined);
    const [salary, setsalary] = useState(undefined);
    const [lacation, setlacation] = useState(undefined);
    const [experience, setexperience] = useState(undefined);
    const [skill, setskill] = useState(undefined);




    useEffect(() => {

        getApi()


    }, [searchTerm, skill, experience, page, jobTitle, lacation, salary]);
    useEffect(() => {

        getApiFilterOption()


    }, []);
    useEffect(() => {

        console.log("chancges", filterOption)


    }, [filterOption]);
    const getApi = async () => {
        const data = await axios.get(`http://vps-979f2e11.vps.ovh.net:8080/api/candidates`, { params: { searchTerm, skill, experience, page, jobTitle, lacation, salary } })
        // setTotalCount(data.data?.total)
        setCandidates(data.data?.data)
    }

    const getApiFilterOption = async () => {
        const data = await axios.get(`http://vps-979f2e11.vps.ovh.net:8080/api/candidatesFilterOption`)

        setfilterOption(data.data)
        console.log(data.data)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterStage = (e) => {
        setFilterStage(e.target.value);
    };

    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

    const handleSelect = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedIds.length === candidates.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(candidates.map(c => c.id));
        }
    };

    const handleDeleteSelected = () => {
        if (window.confirm('Are you sure you want to delete selected candidates?')) {
            const updatedCandidates = candidates.filter(c => !selectedIds.includes(c.id));
            setCandidates(updatedCandidates);
            setSelectedIds([]);
        }
    };



    useEffect(() => {
        const handleScroll = () => {
            lastScrollY.current = window.scrollY; // Update scroll position
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const isScrollingDown = window.scrollY > lastScrollY.current;
                if (entries[0].isIntersecting && isScrollingDown) {
                    // alert()
                    // alert()
                } else {
                    setPage(e => e + 1)
                }
            },
            { threshold: 0.1 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />

            <div className="font-sans w-full mt-16   bg-gray-50 min-h-screen">
                {/* Header */}
                <div style={{ backgroundColor: "#E0E7FF", borderColor: "#E5E7EB" }} className="px-8 mx-5   mt-5 mb-2   py-6 border rounded-xl  ">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Candidate Listings</h2>
                            <p className="text-gray-600">
                                A comprehensive overview of your candidate pool, allowing you to search, filter, and track all applicants
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img className='h-28' src={ImageHeader} alt="" />
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="p x-8 px-5 py-6 bg-white border-b border-gray-200">

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Search candidates by name or email"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Search
                        </button>
                    </div>
                    <div className="flex gap-4">

                        <div className='py-0.5 px-1 '>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.8994 0.0295715C32.3177 0.0295715 35.8994 3.61129 35.8994 8.02957V26.97C35.8994 31.3883 32.3177 34.97 27.8994 34.97H8.95898C4.54071 34.97 0.958984 31.3883 0.958984 26.97V8.02957C0.958984 3.61129 4.54071 0.0295715 8.95898 0.0295715H27.8994Z" fill="#F5F5F5" />
                                <path d="M27.8994 0.0295715C32.3177 0.0295715 35.8994 3.61129 35.8994 8.02957V26.97C35.8994 31.3883 32.3177 34.97 27.8994 34.97H8.95898C4.54071 34.97 0.958984 31.3883 0.958984 26.97V8.02957C0.958984 3.61129 4.54071 0.0295715 8.95898 0.0295715H27.8994Z" stroke="#E5E7EB" />
                                <path d="M23.959 27.0296H8.95898V3.02957H23.959V27.0296Z" stroke="#E5E7EB" />
                                <g clip-path="url(#clip0_176_9645)">
                                    <path d="M9.09591 9.20965C9.32794 8.71746 9.82013 8.40457 10.3651 8.40457H25.5526C26.0975 8.40457 26.5897 8.71746 26.8217 9.20965C27.0537 9.70184 26.9834 10.2819 26.6389 10.7038L20.2088 18.5612V23.0296C20.2088 23.455 19.9697 23.8452 19.5865 24.035C19.2033 24.2249 18.7498 24.1862 18.4088 23.9296L16.1588 22.2421C15.874 22.0311 15.7088 21.6971 15.7088 21.3421V18.5612L9.27521 10.7003C8.93419 10.2819 8.86036 9.69832 9.09591 9.20965Z" fill="#ADAEBC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_176_9645">
                                        <path d="M8.95898 7.27957H26.959V25.2796H8.95898V7.27957Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <select onChange={e => setjobTitle(e.target.value)} className="px-4 py-2 border w-32  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value={""}>Job Title</option>
                            {filterOption.jobTitle.map(el => <option value={el}>{el}</option>)}
                        </select>
                        <select onChange={e => setexperience(e.target.value)} className="px-4 py-2 w-32  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value={""}>Experience</option>
                            {filterOption.jobTitle.map(el => <option value={el}>{el}</option>)}
                        </select>
                        <select onChange={e => setskill(e.target.value)} className="px-4 py-2 w-32  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value={""}>Skills</option>
                            {filterOption.skills.map(el => <option value={el}>{el}</option>)}
                        </select>
                        <select onChange={e => setlacation(e.target.value)} className="px-4 py-2 w-32  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value={""}>Location</option>
                            {filterOption.location.map(el => <option value={el}>{el}</option>)}
                        </select>
                        <select onChange={e => setsalary(e.target.value)} className="px-4 py-2 w-32  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value={""}>Salary</option>
                            {filterOption.salary.map(el => <option value={el}>{el}</option>)}
                        </select>

                    </div>

                </div>
                <div className='"p x-8 px-5 pt-3 pb-1 bg-white border-b border-gray-200'>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-700 font-semibold text-lg ">1,000 Candidates Found <input className='mx-2 ' type="checkbox" onClick={handleSelectAll} id='selectAllInp' /><label className='text-sm font-normal ' htmlFor="selectAllInp">{selectedIds.length === candidates.length ? 'Deselect All' : 'Select All'}</label></span>
                        <div className="flex gap-2">
                            <button
                                onClick={handleDeleteSelected}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Delete Selected
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
                                Manage Candidates
                            </button>
                            <span className='ml-6 mr-2 py-2'>Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={handleSort}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="bestMatch">Best Match</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Candidates List */}
                <div className="p x-8 mt-6  px-5 py-6 bg-white">
                    {candidates.map(candidate => (
                        <div className="border border-gray-200 p-6 mb-4 rounded-lg flex items-start bg-white shadow-sm hover:shadow-md transition-shadow">
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(candidate.id)}
                                onChange={() => handleSelect(candidate.id)}
                                className="mt-1 mr-4 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <img src={UserIcon} alt={candidate.name} className="w-10 h-10 rounded-full mr-4 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold text-gray-900 mb-0  truncate">{candidate.name}</h3>
                                <h6 style={{ color: "#4B5563" }} className='mb-1 font-normal text-base '>Senior web development</h6>
                                <p className="text-sm text-gray-600 mb-1  flex ">
                                    <div className='mx-1 mt-0.5 '>   <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_9342)">
                                            <path d="M5.89805 14.4C7.30078 12.6445 10.5 8.38984 10.5 6C10.5 3.10156 8.14844 0.75 5.25 0.75C2.35156 0.75 0 3.10156 0 6C0 8.38984 3.19922 12.6445 4.60195 14.4C4.93828 14.8184 5.56172 14.8184 5.89805 14.4ZM5.25 4.25C5.71413 4.25 6.15925 4.43437 6.48744 4.76256C6.81563 5.09075 7 5.53587 7 6C7 6.46413 6.81563 6.90925 6.48744 7.23744C6.15925 7.56563 5.71413 7.75 5.25 7.75C4.78587 7.75 4.34075 7.56563 4.01256 7.23744C3.68437 6.90925 3.5 6.46413 3.5 6C3.5 5.53587 3.68437 5.09075 4.01256 4.76256C4.34075 4.43437 4.78587 4.25 5.25 4.25Z" fill="#4B5563" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_9342">
                                                <path d="M0 0.75H10.5V14.75H0V0.75Z" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </div>
                                    {candidate.location} <div className='mx-1 mt-0.5 ml-1.5'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_176_9345)">
                                                <g clip-path="url(#clip1_176_9345)">
                                                    <path d="M7.75 0.75C9.60652 0.75 11.387 1.4875 12.6997 2.80025C14.0125 4.11301 14.75 5.89348 14.75 7.75C14.75 9.60652 14.0125 11.387 12.6997 12.6997C11.387 14.0125 9.60652 14.75 7.75 14.75C5.89348 14.75 4.11301 14.0125 2.80025 12.6997C1.4875 11.387 0.75 9.60652 0.75 7.75C0.75 5.89348 1.4875 4.11301 2.80025 2.80025C4.11301 1.4875 5.89348 0.75 7.75 0.75ZM7.09375 4.03125V7.75C7.09375 7.96875 7.20312 8.17383 7.38633 8.29688L10.0113 10.0469C10.3121 10.2492 10.7195 10.1672 10.9219 9.86367C11.1242 9.56016 11.0422 9.15547 10.7387 8.95312L8.40625 7.4V4.03125C8.40625 3.66758 8.11367 3.375 7.75 3.375C7.38633 3.375 7.09375 3.66758 7.09375 4.03125Z" fill="#4B5563" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_176_9345">
                                                    <rect width="14" height="14" fill="white" transform="translate(0.75 0.75)" />
                                                </clipPath>
                                                <clipPath id="clip1_176_9345">
                                                    <path d="M0.75 0.75H14.75V14.75H0.75V0.75Z" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div> {candidate.experience} years experience <div className='mx-1 mt-0.5 ml-1.5'><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_176_9350)">
                                            <path d="M4.54667 0.75C5.03065 0.75 5.42167 1.14102 5.42167 1.625V2.60117C5.46542 2.60664 5.50644 2.61211 5.55019 2.62031C5.56112 2.62305 5.56933 2.62305 5.58026 2.62578L6.89276 2.86641C7.36855 2.95391 7.683 3.41055 7.5955 3.88359C7.508 4.35664 7.05136 4.67383 6.57831 4.58633L5.27948 4.34844C4.42362 4.22266 3.66894 4.30742 3.13847 4.51797C2.608 4.72852 2.39472 5.01836 2.3455 5.28633C2.29081 5.57891 2.33183 5.74297 2.37831 5.84414C2.42753 5.95078 2.5287 6.07109 2.72831 6.20508C3.17401 6.49766 3.85761 6.68906 4.74355 6.92422L4.82284 6.94609C5.60487 7.15391 6.56191 7.40547 7.27284 7.87031C7.66112 8.12461 8.02753 8.46914 8.25448 8.95039C8.4869 9.43984 8.53612 9.98672 8.42948 10.5691C8.24081 11.6082 7.5244 12.3027 6.63573 12.6664C6.26112 12.8195 5.8537 12.918 5.42167 12.9672V13.875C5.42167 14.359 5.03065 14.75 4.54667 14.75C4.06269 14.75 3.67167 14.359 3.67167 13.875V12.9207C3.66073 12.918 3.64706 12.918 3.63612 12.9152H3.63065C2.96347 12.8113 1.86698 12.5242 1.1287 12.1961C0.688467 11.9992 0.488858 11.4824 0.685733 11.0422C0.882608 10.602 1.3994 10.4023 1.83964 10.5992C2.41112 10.8535 3.35175 11.1051 3.89589 11.1898C4.76815 11.3184 5.4873 11.2445 5.97401 11.0449C6.43612 10.8562 6.64667 10.5828 6.70683 10.2547C6.75878 9.96484 6.71776 9.79805 6.67128 9.69688C6.61933 9.5875 6.51815 9.46719 6.31581 9.3332C5.86737 9.04062 5.18105 8.84922 4.29237 8.61406L4.21581 8.59492C3.43651 8.38711 2.47948 8.13281 1.76855 7.66797C1.38026 7.41367 1.01659 7.06641 0.789639 6.58516C0.559952 6.0957 0.513467 5.54883 0.622842 4.96641C0.819717 3.92188 1.60175 3.24375 2.49042 2.89102C2.85409 2.74609 3.25331 2.64766 3.67167 2.59023V1.625C3.67167 1.14102 4.06269 0.75 4.54667 0.75Z" fill="#4B5563" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_176_9350">
                                                <path d="M0.171875 0.75H8.92188V14.75H0.171875V0.75Z" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </div> {candidate.salary}
                                </p>
                                <p className="text-sm text-gray-600 mb-1 flex gap-2">{candidate.skills.map(el => <span style={{ color: "#1E40AF", backgroundColor: "#DBEAFE", borderColor: "#E5E7EB" }} className='block border p-2 pt-1.5 rounded  '>{el}</span>)}</p>
                                <p style={{ color: "#374151" }} className='font-normal text-sm '>{candidate.describe}</p>
                                <p className="text-xs text-gray-500 mt-4 flex justify-between items-center ">
                                    <p>Last active: {candidate.lastActive}</p>   <NavLink to={"/Candidates/"+candidate.id}
                                        className="w-28 h-9 text-sm font-normal  block  bg-blue-600 text-white text-center leading-8 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        
                                    >
                                        View Profile
                                    </NavLink>
                                </p>

                            </div>


                        </div>
                    ))}
                </div>


            </div>
            <div ref={observerRef} style={{ height: '10px' }} ></div>
        </div>

    </div >



};

export default CandidateListings;