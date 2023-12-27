import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ChefInfo = ({chef}) => {
    const {_id, chefName,picture, yearsOfExperience,numberOfRecipes, likes} = chef;
    return (
        <div>
          <div className='rounded shadow-lg'>
                    <img src={picture} alt="course picture" className='object-cover w-full h-72 ' />
                    <div className='px-6 py-4 bg-stone-200 text-neutral-600 font-medium'>
                        <h2 className='font-bold text-xl'>{chefName}</h2>
                        <div className='flex justify-between'>
                        <p><span>Experience: {yearsOfExperience} years</span> <br /> <span>Recipe: {numberOfRecipes} items</span></p>
                        <p className='inline-grid'><FaRegThumbsUp className='h-6 w-6 text-blue-700 hover:hue-rotate-30 hover:translate-y-1' /> {likes}</p>
                        </div>
                       <Link to={`/recipes/${_id}`}>
                       <button to='/blog' className='btn-recipe'>View Recipes</button>
                       </Link>
                    </div>
                </div>
        </div>
    );
};

export default ChefInfo;