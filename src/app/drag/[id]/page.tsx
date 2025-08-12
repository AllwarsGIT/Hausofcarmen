import React from 'react'
// import Image from 'next/image'
import dragsData from '@/data/lista-drag-queens.json'
import DragHero from './DragHero';


type PageProps = {
    params: {
        id:string;
    };
};

function page({params}: PageProps) {

    const drag = dragsData.find((d) => d.id === params.id);

    return (
        <>
            <DragHero/>
            <h1>{drag ? drag.name : "Drag queen not found"}</h1>
        </>
    )
}

export default page
