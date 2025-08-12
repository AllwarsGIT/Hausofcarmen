import React from 'react'
import ShowHero from './ShowHero';
import showsData from '@/data/lista-espectáculos.json'

export default function page(props: { params: { id: string } }) {
    const show = showsData.find((d) => d.id === props.params.id);
    
    return (
        <>
            <ShowHero/>
            <h1>{show ? show.name : "Show not found"}</h1>
        </>
    )
}