import React from 'react';
import { useForm } from 'react-hook-form';
import SocialGoWith from '../SocialGoWith/SocialGoWith';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';

const Register = () => {

    const axiosPost = useAxios();
    const navigate = useNavigate();
    const { loading, registerUser, updateUser } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleRegister = (data) => {
        
        const fileOfPhoto = data.photo[0];
        registerUser(data.email, data.password)
        .then(res => {

            console.log(res);
            const formData = new FormData();
            formData.append("image", fileOfPhoto);
            const imageUpload = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGEBB_API}`;

            axios.post(imageUpload, formData)
            .then(image_res => {
                console.log(image_res);

                const updatedProfile = {
                    displayName: data.name,
                    photoURL: image_res.data.data.display_url
                }

                updateUser(updatedProfile)
                .then(res_update => {
                    console.log(res_update);

                    const userObject = {
                        uid: res.user.uid,
                        displayName: data.name,
                        photoURL: image_res.data.data.display_url,
                        email: data.email || res.user.email,
                    }

                    axiosPost.post("/add-user", userObject)
                    .then(res_db => {
                        if (res_db.data.acknowledged) {
                            navigate("/");
                            Swal.fire({
                                title: "Registration Successful!",
                                position: "top-end",
                                icon: "success",
                                text: `${updatedProfile.displayName} has been registered successfully.`,
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
                    .catch(user_db_err => {
                        Swal.fire({
                            title: "Error!",
                            position: "top-end",
                            icon: "warning",
                            text: `${user_db_err}`,
                            showConfirmButton: false,
                            timer: 2000
                        })
                        // navigate("/");
                    })

                })
                .catch(err => {
                    console(err);
                })

            })
            .catch( img_err => {
                console.log(img_err);
            } )

        })
        .catch(reg_err => {
            console.log(reg_err);
            Swal.fire({
                title: "Registration Failed!",
                position: "top-end",
                icon: "warning",
                text: `${reg_err}`,
                showConfirmButton: false,
                timer: 2000
            })
            // navigate("/");
        })
    }

    return (
        <div className='p-10 border border-secondary w-full rounded-2xl hover:hover:shadow-2xl transition-all duration-500 items-center font-serif text-secondary'>
            <h2 className='font-bold text-2xl animate-pulse text-center underline-offset-7 underline'>Register</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset rounded-box w-full p-4">

                    <label className="label text-md">Name</label>
                    <input 
                    {...register("name", { required: true })}
                    type="text" className="input focus:outline-none focus:ring-0 focus:border-secondary" placeholder="Name" />  
                    {
                        errors.name?.type === "required" && 
                        <p className="text-error text-sm mt-1">Name is required!!</p>
                    }

                    <label className="label text-md">Photo</label>
                    <input 
                    { ...register("photo", { required: true }) }
                    type="file" className="input file-input focus:outline-none focus:ring-0 focus:border-secondary" placeholder="Photo" />
                    {
                        errors.photo?.type === "required" &&
                        <p className="text-error text-sm mt-1">Photo is required!!</p>
                    }

                    <label className="label text-md">Email</label>
                    <input  
                    { ...register("email", { required: true } ) }
                    type="email" className="input focus:outline-none focus:ring-0 focus:border-secondary" placeholder="Email" />
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
                    type="password" className="input" placeholder="Password" />
                    {errors.password?.type === "required" && (
                        <p className="text-error text-sm mt-1">Password is required!!</p>
                    )}

                    <button className="btn btn-secondary mt-4">{ loading ? "Loading" : "Register" }</button>
                </fieldset>
                <div className='flex -mt-3 flex-col items-center w-full px-4'>
                    <p className='text-center'>Or</p>
                    <SocialGoWith></SocialGoWith>    
                </div>
                <p className='text-center'>Already have an account? <Link to={"/login"} className='text-blue-500'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;