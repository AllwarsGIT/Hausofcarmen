import React from 'react';
import DragHero from './DragHero';
import dragsData from '@/data/lista-espectáculos.json';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params; // ahora sí, porque params es Promise
  const drag = dragsData.find((d) => d.id === id);

  return (
    <>
      <DragHero />
      <h1>{drag ? drag.name : 'Show not found'}</h1>
    </>
  );
}
