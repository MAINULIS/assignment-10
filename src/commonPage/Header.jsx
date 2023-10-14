import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBarsArrowDown, HiXMark } from "react-icons/hi2";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (

        <div className='bg-slate-950 px-4 mx-auto py-6'>
            <div className=' flex items-center justify-between'>
                {/* company name */}
                <div className='ml-3 font-bold tracking-wide text-zinc-700 text-xl'>
                    <Link to="/" className='inline-flex'>
                        Chefs Of Bangladeshi Cuisine
                    </Link>
                </div>


                {/* Nav Items section */}
                <div>
                    <ul className='inline-flex items-center space-x-8 hidden lg:flex'>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            > Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog"
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Blog</NavLink>
                        </li>
                        <li>
                            <img
                                data-te-toggle="tooltip"
                                title="Hi! I'm .."
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                className="w-12 rounded-full"
                                alt="Avatar"
                            />

                        </li>
                    </ul>
                </div>
                {/* Mobile responsive */}
                <div className='lg:hidden'>
                    {/* Dropdown Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <HiBarsArrowDown className='w-6 h-6 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* company name and buttons */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>

                                            <span className=' font-bold tracking-wide text-zinc-700 text-xl'>
                                                Chefs Of Bangladeshi Cuisine
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown close button */}
                                    <div>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <HiXMark className='w-6 h-6 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/blog'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <img
                                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                                className="w-12 rounded-full"
                                                alt="Avatar"
                                            />
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Header;