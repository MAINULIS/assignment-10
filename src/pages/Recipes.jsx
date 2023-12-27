import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa6";

const Recipes = () => {
    const recipeData = useLoaderData();
    const { chefName, picture, shortBio, yearsOfExperience, numberOfRecipes, likes, recipes } = recipeData
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
                            <p className='text-xl'><span className='font-medium'>Ratings: </span>{recipes[0]?.rating}</p>

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
                            <p className='text-xl'><span className='font-medium '>Ratings: </span >{recipes[1]?.rating}</p>

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
                            <p className='text-xl'><span className='font-medium '>Ratings: </span>{recipes[2]?.rating}</p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Recipes;