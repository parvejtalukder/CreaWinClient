import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import useTheme from '../../hooks/useTheme';
import { CgProfile } from 'react-icons/cg';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaLessThanEqual } from 'react-icons/fa';

const Dashboard = () => {

    const navigate = useNavigate();
    const { toggleTheme } = useTheme();
    const { logOut, setLoading } = useAuth();

    const handleLogout = async () => {
        try {
          await logOut();
          Swal.fire({
            title: "Logged Out!",
            icon: "success",
            position: "center",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/");
          setLoading(false)
        } catch (error) {
        // console.error(error);
        Swal.fire({
            title: "Logged Out!",
            icon: "success",
            position: "top-end",
            text: error,
            showConfirmButton: false,
            timer: 1000,
        });
      }
    };


    return (
        <div className="drawer lg:drawer-open font-serif text-base-content">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <nav className="navbar flex justify-between items-center pr-5 w-full bg-base-200">
            <div className='flex justify-between items-center'>
                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  {/* Sidebar toggle icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                </label>
                <div className="px-4 text-base-content text-xl font-bold">CreWin</div>
              </div>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input onClick={() => toggleTheme()} type="checkbox" className="theme-controller" value="synthwave" /> 
                  {/* sun icon */}
                  <svg
                    className="swap-off h-10 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* moon icon */}
                  <svg
                    className="swap-on h-10 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                   </label>
            </nav>
            {/* Page content here */}
            <div className="p-4 text-base-content"><Outlet></Outlet></div>
          </div>
          { /*navllinks */ }
          <div className="drawer-side is-drawer-close:overflow-visible bg-base-300 font-serif text-base-content">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="flex min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-64">
              {/* Sidebar content here */}
              <ul className="menu w-full grow gap-1">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `is-drawer-close:tooltip is-drawer-close:tooltip-right
                       transition-all duration-200
                       ${
                         isActive
                           ? "bg-secondary text-secondary-content font-semibold"
                           : "hover:bg-base-300"
                       }`
                    }
                    data-tip="Homepage"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-3.5"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span className="is-drawer-close:hidden"> Homepage</span>
                  </NavLink>
                </li>
                  
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `is-drawer-close:tooltip is-drawer-close:tooltip-right
                       transition-all duration-200
                       ${
                         isActive
                           ? "bg-secondary text-secondary-content font-semibold"
                           : "hover:bg-base-300"
                       }`
                    }
                    data-tip="Profile"
                  >
                    <CgProfile />
                    <span className="is-drawer-close:hidden">My Profile</span>
                  </NavLink>
                </li>
              </ul>
              <ul className='menu w-full '>
                <li>
                  <div
                    onClick={handleLogout}
                    className={
                      `is-drawer-close:tooltip is-drawer-close:tooltip-right
                       transition-all duration-200
                       bg-secondary text-secondary-content font-semibold`
                    }
                    data-tip="Log Out"
                  >
                    <CgProfile />
                    <span className="is-drawer-close:hidden">Log Out</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default Dashboard;