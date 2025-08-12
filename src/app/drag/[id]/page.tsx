import React from 'react'
import DragHero from './DragHero';
import dragsData from '@/data/lista-espectáculos.json'

interface Props {
  params: { id: string }
}

export default function Page({ params }: Props) {
    const drag = dragsData.find((d) => d.id === params.id);
   
    return (
        <>
            <DragHero/>
            <h1>{drag ? drag.name : "Show not found"}</h1>
        </>
    )
}