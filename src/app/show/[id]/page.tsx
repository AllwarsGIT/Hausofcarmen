import React from 'react';
import ShowHero from './ShowHero';
import showsData from '@/data/lista-espectaculos.json';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const show = showsData.find((d) => d.id === id);

console.log('ID buscado:', id);
console.log('Shows disponibles:', showsData);
console.log('Show :', show?.name);

  if (!show) {
    return (
      <>
        <ShowHero />
        <h1>Show not found</h1>
      </>
    );
  }

  return (
    <>
      <ShowHero />
      <h1>{show?.name}</h1>
      <p>{show?.description}</p>
    </>
  );
}