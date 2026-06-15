import React from 'react';
import { useForm } from 'react-hook-form';
import SocialGoWith from '../SocialGoWith/SocialGoWith';
import { Link, useNavigate } from 'react-router';
// import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

    const naviget = useNavigate();
    const { signInUser, loading } = useAuth();
    const { register, formState: { errors } , handleSubmit } = useForm();

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
        .then(res => {
            console.log(res);
            naviget("/");
            Swal.fire({
                title: "Logged In!",
                icon: "success",
                position: "center",
                showConfirmButton: false,
                timer: 2000
            })
        })
        .catch(err => {
            Swal.fire({
                title: "Failed to Logging In!",
                icon: "error",
                text: err,
                position: "center",
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    return (
        <div className='p-10 border border-secondary w-full rounded-2xl hover:hover:shadow-2xl transition-all duration-500 items-center font-serif text-secondary'>
            <h2 className='font-bold text-2xl animate-pulse text-center underline-offset-7 underline'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset rounded-box w-full py-2">
                    <label className="label text-md">Email</label>
                    <input  
                    { ...register("email", { required: true } ) }
                    type="email" className="input w-full focus:outline-none focus:ring-0 focus:border-secondary" placeholder="Email" />
                    {
                        errors.email?.type === "required" &&
                        <p className="text-error text-sm mt-1">Email is required!!</p>
                    }

                    <label className="label text-md">Password</label>
                    <input 
                    { ...register("password", { 
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ 
                    } ) }
                    type="password" className="input w-full" placeholder="Password" />
                    {errors.password?.type === "required" && (
                        <p className="text-error text-sm mt-1">Password is required!!</p>
                    )}
                  <button className="btn w-full btn-secondary mt-4">{loading ? "Loading" : "Login"}</button>
                </fieldset>
                <div className='flex flex-col -mt-3 items-center w-full px-4'>
                    <p className='text-center w-full pt-1'>Or</p>
                </div>
            </form>
            <SocialGoWith></SocialGoWith>
            <p className='text-center'>New to the <span className='font-bold text-secondary'>CreaWin</span>? <Link to={"/register"} className='text-blue-500'>Create an account!</Link></p>    
        </div>
    );
};

export default Login;