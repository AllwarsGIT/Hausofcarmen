import React from 'react'
import ShowHero from './ShowHero';
import showsData from '@/data/lista-espectáculos.json'

interface Props {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: Props) {
    const show = showsData.find((d) => d.id === params.id);
   
    return (
        <>
            <ShowHero/>
            <h1>{show ? show.name : "Show not found"}</h1>
        </>
    )
}