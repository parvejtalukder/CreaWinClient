import React from "react";
import Logo from "../../assets/logo.png"
import TbBackground from "../../assets/bannerImage.png";
import { Link, Outlet } from "react-router";

const Auth = () => {
  return (
    <div className="min-h-screen flex">
      <section
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${TbBackground})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-10 flex flex-col items-center">
          <Link to={"/"}><img src={Logo} alt="CreaWin" className="w-20" /></Link>
          <h1 className="text-4xl font-bold text-secondary">Welcome to CreaWin</h1>
          <p className="mt-3 font-serif text-secondary-content text-2xl">Create. Compete. Win.</p>
        </div>
      </section>
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Auth;