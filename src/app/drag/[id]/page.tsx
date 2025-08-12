import React from 'react'
import DragHero from './DragHero';
import dragsData from '@/data/lista-espectáculos.json'

export default function page(props: { params: { id: string } }) {
    const drag = dragsData.find((d) => d.id === props.params.id);
    
    return (
        <>
            <DragHero/>
            <h1>{drag ? drag.name : "Show not found"}</h1>
        </>
    )
}