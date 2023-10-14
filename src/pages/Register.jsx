import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [control, setControl] = useState(false)

    const handleRegister = (event) =>{
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password =form.password.value;
        const confirmPass = form.RePassword.value;
        console.log(name, email, photo, password, confirmPass);

        if(password !== confirmPass){
            setError('Password did not match')
            return 
        }
        else if(!/(?=.*[!@#$%&*])/.test(password)){
            setError('Use at least a special character in your password');
            return;
        }
        else if(password.length < 6){
            setError('Password should be at least 6 character');
            return ;
        }

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            setSuccess('Account has been successfully created');
            setError('');
            event.target.reset();
        })
        .catch(error =>{
            setError(error.message);
            setSuccess('');
        })

    }
    return (
        <div className='my-container '>
        <h3 className='my-8 text-3xl font-bold text-gray-700 text-center'>Register Your Account</h3> <hr />
        <div className='flex justify-center '>
            <form onSubmit={handleRegister} className='mt-12 p-5 lg:p-10 shadow-2xl'>
                <label htmlFor="Name "><span className=' text-stone-700 font-medium  text-xl'>Name </span><br />
                    <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="text" name="name" id="name" placeholder='Your full Name' />
                </label> <br />

                <label htmlFor="photo "><span className=' text-stone-700 font-medium  text-xl'>Photo </span><br />
                    <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="text" name="photo" id="photo" placeholder='Your Photo Url' />
                </label> <br />

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
                <label htmlFor="password"> <span className=' text-stone-700 font-medium  text-xl'>Confirm Password</span> <br />
                    <input className='border border-gray-500 px-2 w-72 lg:w-96 mb-2' type="password" name="RePassword" id="RePassword" placeholder='Confirm Password' required />
                </label> <br />
                <p className='text-red-700'>{error}</p>
                <p className='text-green-700'>{success}</p>

                <input type="submit" value="Register" className=' btn-full' />

                <div className='text-center'>
                    <p className='text-zinc-600 font-semibold'><small>Already Have An Account? please  <Link className='text-blue-600 underline' to="/login">Login</Link></small> </p>
                </div>
            </form>
        </div>


    </div>
    );
};

export default Register;