import React from 'react'
import { useGetSampleByIdQuery } from './services';

const Landing = () => {
    const { data } = useGetSampleByIdQuery(1);
    console.log('data', data)
    return (
        <div className='bg-yellow-500 min-h-screen'>Landing</div>
    )
}

export default Landing