import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FaUserCheck } from 'react-icons/fa6';
import Logo from "../../assets/logo.png";
import useRole from '../../hooks/useRole';

const MyProfile = () => {

    const { role }= useRole();
    const { user } = useAuth();
    console.log(user);
    console.log(role);

    return (
        <div className='flex flex-col gap-3'>
            <section className='flex justify-between items-center'>
                <div className='flex-4/6'>
                    <h2 className='text-xl text-secondary'>Profile</h2>
                    <p>Manage your account settings and track your performance.</p>
                </div>
                <div className="max-w-xs px-4 py-2 bg-primary-content rounded-full flex items-center gap-2 border border-transparent hover:border-secondary transition-all duration-500">
                    <img className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                        src={user?.photoURL || Logo}
                        alt={user?.displayName}
                    />
                    <div>
                        <p className="text-md text-secondary font-medium">
                            {user?.displayName || "User Name"}
                        </p>
                        <p className="text-sm text-secondary/70">
                            User Type
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center gap-3'>
                <div className='flex-3/5 bg-base-200 rounded-3xl p-5 shadow hover:shadow-md duration-300 transition-all flex justify-self-auto items-center gap-5'>
                    <img src={user?.photoURL} className='w-25 rounded-xl' />
                    <div>
                        <h2>{user?.displayName}</h2>
                        <p>Loren20fldfldfldkfldkfldklfdlfdlkfdlkfdklfdilfdlfklodfklodfdklfdofklodfk,</p>
                    </div>
                </div>
                <div className='flex-2/5 bg-base-200 rounded-3xl'>
                    
                </div>
            </section>
        </div>
    );
};

export default MyProfile;