import React from 'react';
import { CiTextAlignJustify } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import useUser from '../../hooks/useUser';
import Logo from "../../assets/logo.png";
import Loader from '../../utils/Loader/Loader';
import Footer from '../../template/Footer/Footer';

const MyProfile = () => {
    const { userData, userDataLoading } = useUser();

    if (userDataLoading) {
        return <Loader></Loader>
    }

    return (
        <>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
            <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-semibold text-secondary">Profile</h2>
                    <p className="text-sm text-gray-500">Manage your account settings and track your performance.</p>
                </div>
                <div className="flex items-center gap-3 bg-base-200 px-4 py-2 rounded-full w-full lg:w-auto justify-center lg:justify-start hover:border-secondary transition">
                    <img className="w-10 h-10 rounded-full object-cover border-2 border-secondary" src={userData?.photo || Logo} alt={userData?.name || "user"}
                    />
                    <div>
                        <p className="font-medium text-secondary text-sm lg:text-base">
                            {userData?.name || "User Name"}
                        </p>
                        <p className="text-xs lg:text-sm text-secondary/70">
                            {userData?.role || "user"}
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/5 bg-base-200 rounded-3xl p-5 shadow hover:shadow-md transition">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <img src={userData?.photo || Logo} alt="profile" />
                        <div className="flex flex-col gap-3 w-full">
                            <h2 className="text-xl font-bold">
                                {userData?.name || "User"}
                            </h2>
                            <div>
                                <span className="flex items-center gap-2 text-secondary font-semibold">
                                    <CiTextAlignJustify />
                                    Biography
                                </span>
                                <p className="text-sm text-gray-600">
                                    {userData?.bio || "Enter biography here"}
                                </p>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-gray-600">
                                <FaLocationDot className="text-secondary mt-1" />
                                <span>
                                    {userData?.address || "Enter address here"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 bg-base-200 rounded-3xl p-5 shadow">
                    <p className="text-sm text-gray-500">
                        Additional profile section (you can add stats, activity, etc.)
                    </p>
                </div>
            </section>
        </div>
        {/* <Footer></Footer> */}
    </>    
    );
};

export default MyProfile;