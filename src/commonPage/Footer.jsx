import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div >
            <footer className='px-4 bg-slate-700 divide-y w-full  bottom-0 left-0'>
                <div className='lg:flex justify-around text-white p-2 space-y-5 lg:space-y-0'>
                    <div className=''>
                        <h3 className='text-xl font-semibold mb-2'>Address</h3>
                        <ul>
                            <li>Level-4, 334, Awala Centre, Banani, Dhaka</li>
                            <li>Helpline: 01322338182 , 016212901105</li>
                            <li>Support: bangladeshicuisine-chef@provider.com</li>
                        </ul>

                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>Useful Links</h3>
                        <div className='mt-2'>
                            <ul>
                                <Link to='/blog'>Blog</Link>
                                <li><Link>About Us</Link></li>
                                <li><Link>Refund Policy</Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>Get in connect</h3>
                        <div >
                            <h4 className='mt-2 font-serif font-semibold'>Follow Us</h4>
                            <ul className='flex gap-10 my-3 '>
                                <li className='hover:text-purple-500'><Link><FaFacebookF /></Link></li>
                                <li className='hover:text-purple-500'><Link><FaTwitter /></Link></li>
                                <li className='hover:text-purple-500'><Link><FaYoutube /></Link></li>
                            </ul>
                            <button className='btn mt-2'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className='py-6 text-sm text-center text-'>
                    © 2023 React Chefs Of Bangladeshi Cuisine Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;