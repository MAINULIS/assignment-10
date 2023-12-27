import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='lg:flex justify-center gap-4 m-16'>
            <img src={user?.PhotoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"} alt="" />
            <div>
            <h2 className='text-2xl lg:text-3xl font-semibold items-center mt-12'>Name: {user?.displayName}</h2>
            <p className='text-xl lg:font-medium'><span className='font-semibold'>Email Address:</span> <span className='text-gray-600'>{user?.email}</span></p>
            </div>
        </div>
    );
};

export default Profile;