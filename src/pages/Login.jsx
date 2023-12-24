import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import SocialLogin from './Social/SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [control, setControl] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 character');
            return;
        }

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User has been successfully logged in');
                setError('');
                event.target.reset();
            })
            .catch(error => {
                setError(error.message);
                setSuccess('')
            })
    }

    return (
        <div className='my-container'>
            <h3 className='my-8 text-3xl font-bold text-gray-700 text-center'>Login Your Account</h3> <hr />
            <div className='flex justify-center '>
                <form onSubmit={handleLogin} className='mt-12 p-5 lg:p-10 shadow-2xl'>
                    <label htmlFor="Email"> <span className=' text-stone-700 font-medium  text-xl'>Email</span> <br />
                        <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="email" name="email" id="email" placeholder='Your Email' required />
                    </label> <br />

                    <label htmlFor="password"> <span className=' text-stone-700 font-medium text-xl'>
                        Password</span> <br />
                        {
                            control ?
                                <div className='inline-flex'>
                                    <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="text" name="password" id="password" placeholder='Password' required />
                                    <FaEyeSlash className='-ms-7 w-6 h-6' onClick={() => setControl(!control)} />
                                </div> :
                                <div className='inline-flex' >
                                    <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="password" name="password" id="password" placeholder='Password' required />

                                    <FaEye className='-ms-7 w-6 h-6' onClick={() => setControl(!control)} ></FaEye>


                                </div>
                        }
                    </label> <br />
                    <p className='text-red-700'>{error}</p>
                    <p className='text-green-700'>{success}</p>

                    <input type="submit" value="Login" className=' btn-full' />

                    <div className='text-center'>
                        <p className='text-zinc-600 font-semibold'><small>Don't Have An Account? Please  <Link className='text-blue-600 underline' to="/register">Register</Link></small> </p>

                        <p className='text-zinc-600 font-semibold'><small>Forget password? Please <button className='text-blue-600 underline'>Reset Password</button> </small> </p>
                    </div>
                    <div className='mt-12 text-center'>
                        <SocialLogin></SocialLogin>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Login;