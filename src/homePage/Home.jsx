import React from 'react';
import ChefCards from './ChefCards';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <main>
                <div className='bg-[url("https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209231.jpg?w=740&t=st=1703479121~exp=1703479721~hmac=32b73a6f7867ebfe52fd28ebcb861e488fd5091131cb0a4885395d6eb8c140d7")] h-96 w-full bg-cover bg-center p-10 lg:p-20'>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="mb-2 text-2xl md:text-3xl lg:text-4xl text-neutral-950 font-bold text-center font-mono">
                            Enjoy the Bangladeshi test.Find your favorite recipes from our Master Chefs.
                        </h1>
                        <p className="text-lg text-center text-white">
                            Bangladeshi traditional and modern food recipes are here.
                        </p>
                        <div className="mt-4">
                            <Link to='/blog'>
                            <button  className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                                About Us
                            </button></Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* extra section */}
            <section>
                <div className='lg:flex flex-row-reverse lg:m-16 p-4 justify-center gap-4'>
                    <div className='mt-10'>
                        <p className='text-red-500 font-serif'>WHY WE ARE</p>
                        <h2 className='text-2xl lg:text-3xl font-semibold'> Thousands flavors in one place.</h2>
                        <p className='text-neutral-600 mb-5 '>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.
                        </p>
                        <p className='text-neutral-600'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.
                        </p>
                    </div>
                    <div>
                        <img className='h-96 rounded-md mt-4' src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>


                </div>
            </section>
            {/* 6 cards section */}
            <section className='lg:m-16 p-4'>
                <h2 className='lg:text-3xl text-2xl font-semibold font-sans text-center mb-10 pb-4'>Get familiar with our world class <span className='font-serif'>Chefs</span>.And Explore them</h2>
            <ChefCards></ChefCards>
            </section>
        </div>
    );
};

export default Home;