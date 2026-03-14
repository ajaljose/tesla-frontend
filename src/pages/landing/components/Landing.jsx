import React from 'react'
import { useGetSampleByIdQuery } from '../services';
import HeroSection from './HeroSection';

const Landing = () => {
    const { data } = useGetSampleByIdQuery(1);
    console.log('data', data)
    return (
        <div className=''>
            <HeroSection />
        </div>
    )
}

export default Landing