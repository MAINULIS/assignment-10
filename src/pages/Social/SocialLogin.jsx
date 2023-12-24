import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    const { sigInWithGoogle, loginWithGithub } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleLoginWithGoogle = () => {
        sigInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User has been successfully logged in');
                setError('');

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User has been successfully logged in');
                setError('');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div>
                <p className='text-red-700'>{error}</p>
                <p className='text-green-700'>{success}</p>
            </div>
            <button className='border border-gray-500 px-4 py-1 text-white bg-blue-900 my-3 '
                onClick={handleLoginWithGoogle}> <div className='inline-flex'><FaGoogle className='mt-1' /> <span className='ms-2'>Sign in with Google</span></div>
            </button> <br />
            <button className='border border-gray-500 px-4 py-1 text-white bg-gray-900'
                onClick={handleLoginWithGithub}>
                <div className='inline-flex'><FaGithub className='mt-1' /> <span className='ms-2'>Sign in with Github</span></div></button>
        </div>
    );
};

export default SocialLogin;