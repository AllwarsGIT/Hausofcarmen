import React from 'react';
import ShowHero from './ShowHero';
import showsData from '@/data/lista-espectáculos.json';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const show = showsData.find((d) => d.id === id);

  return (
    <>
      <ShowHero />
      <h1>{show ? show.name : 'Show not found'}</h1>
    </>
  );
}
