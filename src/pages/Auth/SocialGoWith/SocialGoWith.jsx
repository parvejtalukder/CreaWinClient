import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const SocialGoWith = () => {

    const { goWithGoogle } = useAuth();
    const axiosSecure = useAxios();
    const navigate = useNavigate();

    const handleGoWithGoogle = () => {
        // e.preventDefault();
        goWithGoogle()
        .then(res => {
            Swal.fire({
                title: "Logged In!",
                position: "center",
                icon: "success",
                // text: `${res}`,
                showConfirmButton: false,
                timer: 2000,
            })

            navigate("/");

            const userObject = {
                uid: res.user.uid,
                displayName: res.user.name,
                photoURL: res.user.photoURL,
                email: res.user.email,
            }

            axiosSecure.post("/add-user", userObject)
            .then(res_db => {
                console.log(res_db);
            }) 
            .catch(err_db => {
                console.log(err_db);
            })
        })
        .catch(err => {
            Swal.fire({
                title: "Logged In!",
                position: "center",
                icon: "success",
                text: `${err}`,
                showConfirmButton: false,
                timer: 2000,
            })
        })
    }

    return (
        <button onClick={() => handleGoWithGoogle()} className="btn w-full bg-secondary text-secondary-content">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Go with Google
        </button>
    );
};

export default SocialGoWith;