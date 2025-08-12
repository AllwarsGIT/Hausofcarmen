import React from 'react'
// import Image from 'next/image'
import ShowHero from './ShowHero';
import showsData from '@/data/lista-espectáculos.json'


type PageProps = {
    params: {
        id:string;
    };
};

function page({params}: PageProps) {

    const show =showsData.find((d) => d.id === params.id);

    return (
        <>
            <ShowHero/>
            <h1>{show ? show.name : "Drag queen not found"}</h1>
        </>
    )
}

export default page
