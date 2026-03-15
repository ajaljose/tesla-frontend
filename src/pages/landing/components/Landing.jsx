import React from 'react'
import { useGetSampleByIdQuery } from '../services';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import PerformanceSection from './PerformanceSection';
import InfoSection from './InfoSection';

const Landing = () => {
    const { data } = useGetSampleByIdQuery(1);
    console.log('data', data)

    return (
        <div className=''>
            <HeroSection />
            <KeyFeatures />
            <PerformanceSection />
            <InfoSection />
        </div>
    )
}

export default Landing