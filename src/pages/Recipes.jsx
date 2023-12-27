import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { HiHeart } from "react-icons/hi";
import toast from 'react-hot-toast';



const Recipes = () => {
    const recipeData = useLoaderData();
    const [button, setButton] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const { chefName, picture, shortBio, yearsOfExperience, numberOfRecipes, likes, recipes } = recipeData;

    const notify = () => toast('This recipe is added to your favorite list.');

    return (
        <div className='lg:m-16 p-4'>
            <div className='lg:flex flex-row-reverse gap-6 justify-center items-center'>
                <div>
                    <img src={picture} alt="" className='object-cover w-full h-72 ' />
                </div>

                <div className='bg-stone-100 px-6 py-8'>
                    <h2 className='text-2xl font-semibold'>{chefName}</h2>
                    <p className='text-xl text-neutral-800'><span className='font-semibold'>Description: </span>{shortBio}</p>
                    <p className='text-neutral-600 text-xl'><span className='font-medium'>Experience: </span> {yearsOfExperience} years</p>
                    <p className='text-neutral-600 text-xl'><span className='font-medium'>Recipe:</span> {numberOfRecipes} items</p>
                    <p className='inline-flex gap-2 text-pink-500 text-xl'><FaRegThumbsUp className='h-6 w-6 text-blue-700' /> {likes}</p>
                </div>

            </div>
            {/* recipe section */}
            <section className='mt-16'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {/* 1 */}
                    <div className='lg:flex gap-2 lg:gap-4 justify-center bg-gray-50'>
                        <div>
                            <img className='object-cover lg:w-full lg:h-72 rounded p-4' src={recipes[0]?.image} alt="" />
                        </div>
                        <div className='p-4'>
                            <h3 className='text-2xl font-medium lg:font-semibold text-neutral-700'> <span className='font-serif'>Recipe Name: </span>{recipes[0]?.recipeName}</h3>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Ingredients: </span>{recipes[0]?.ingredients}</p>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Method of Cooking: </span>{recipes[0]?.cookingMethod}</p>
                            <div className='text-xl inline-flex'>
                                <p>
                                    <Rating className='h-10' value={recipes[0]?.rating} readOnly />
                                </p>
                                <p className='pt-2'>
                                    {recipes[0]?.rating}
                                </p>
                            </div>
                            <div onClick={notify}>
                                <button
                                    onClick={() => { setButton(true) }} disabled={button} className='inline-flex'> Add To:<HiHeart className='w-8 h-7 text-red-600' /></button>
                            </div>

                        </div>
                    </div>
                    {/* 2 */}
                    <div className='lg:flex gap-2 lg:gap-4 justify-center bg-gray-50'>
                        <div>
                            <img className='object-cover  lg:w-full lg:h-72 rounded p-4' src={recipes[1]?.image} alt="" />
                        </div>
                        <div className='p-4 '>
                            <h3 className='text-2xl font-medium lg:font-semibold text-neutral-700'> <span className='font-serif'>Recipe Name: </span>{recipes[1]?.recipeName}</h3>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Ingredients: </span>{recipes[1]?.ingredients}</p>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Method of Cooking: </span>{recipes[1]?.cookingMethod}</p>
                            <div className='text-xl inline-flex'>
                                <p>
                                    <Rating className='h-10' value={recipes[0]?.rating} readOnly />
                                </p>
                                <p className='pt-2'>
                                    {recipes[0]?.rating}
                                </p>

                            </div>
                            <div onClick={notify}>
                                <button
                                    onClick={() => { setButton2(true) }} disabled={button2} className='inline-flex'> Add To:<HiHeart className='w-8 h-7 text-red-600' /></button>
                            </div>

                        </div>
                    </div>
                    {/* 3 */}
                    <div className='lg:flex gap-2 lg:gap-4 justify-center bg-gray-50'>
                        <div>
                            <img className='object-cover lg:w-full  lg:h-72 rounded p-4' src={recipes[2]?.image} alt="" />
                        </div>
                        <div className='p-4'>
                            <h3 className='text-2xl font-medium lg:font-semibold text-neutral-700'> <span className='font-serif'>Recipe Name: </span>{recipes[2]?.recipeName}</h3>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Ingredients: </span>{recipes[2]?.ingredients}</p>
                            <p className='text-neutral-600 text-xl'><span className='font-medium'>Method of Cooking: </span>{recipes[2]?.cookingMethod}</p>
                            <div className='text-xl inline-flex'>
                                <p>
                                    <Rating className='h-10' value={recipes[0]?.rating} readOnly />
                                </p>
                                <p className='pt-2'>
                                    {recipes[0]?.rating}
                                </p>
                            </div>
                            <div onClick={notify}>
                                <button
                                    onClick={() => { setButton3(true) }} disabled={button3} className='inline-flex'> Add To:<HiHeart className='w-8 h-7 text-red-600' /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className='flex justify-center mt-12'>
                <Link to="/">
                    <button className='btn'>Back to Home page</button>
                </Link>
            </div>
        </div>
    );
};

export default Recipes;