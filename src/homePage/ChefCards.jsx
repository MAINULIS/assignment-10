import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';


const ChefCards = () => {
    const[chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
        .then((response)=>response.json())
        .then((data) =>setChefData(data))
    }, [])
    
    // console.log(chefData)
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 '>
            {
                chefData.map(chef =><ChefInfo
                    key={chef._id}
                    chef = {chef}
                ></ChefInfo>)
            }
            </div>
        </div>
    );
};

export default ChefCards;