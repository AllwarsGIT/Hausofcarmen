import React from 'react'
import dragsData from '@/data/lista-drag-queens.json'
import DragHero from './DragHero';

export default function page(props) {
   const drag = dragsData.find((d) => d.id === props.params.id);
   
   return (
       <>
           <DragHero/>
           <h1>{drag ? drag.name : "Drag queen not found"}</h1>
       </>
   )
}