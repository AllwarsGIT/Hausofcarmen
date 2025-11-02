import React from 'react';
// import DragHero from './DragHero';
import dragsData from '@/data/lista-drag-queens.json';
import Image from 'next/image';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params; // ahora sí, porque params es Promise
  const drag = dragsData.find((d) => d.id === id);

  return (
    <>
    <section className="flex flex-col  items-center text-4xl gap-30 pt-15">
      <h1 className="text-pinkSecondary py-10">{drag ? drag.name : 'Drag no encontrada'}</h1>
      <div className=" flex flex-col items-center justify-center gap-10 lg:flex-row max-w-[1000px]">
        <Image 
        className="rounded-lg"
        src={drag ? `${drag.imageFolder}${drag.image[0]}` : 'Imagen no encontrada'}
        width={400}
        height={400}
        alt={drag ? drag.name : 'Imagen no encontrada'}
      />

        <div className="flex flex-col text-lg text-left text-white ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere eros vel metus gravida pellentesque. Sed eget nunc ullamcorper, tempor dui ac, condimentum tortor. Pellentesque eleifend lobortis justo, sed consequat est hendrerit euismod. Donec suscipit nisi orci, non sagittis sapien tincidunt sed. Vivamus ac pellentesque risus. Nulla gravida lectus vel ex egestas ornare. Nam quis eros nibh.
          </p>
          <p>
            Phasellus lectus nulla, mollis molestie vehicula non, eleifend a nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et sodales est. Curabitur accumsan, mauris et fermentum viverra, mauris quam blandit neque, imperdiet aliquet nulla urna nec urna. Pellentesque porta sem leo, id rutrum dolor porta sed. Integer molestie fermentum leo, eget sagittis dolor tincidunt at. Maecenas volutpat viverra diam at porttitor. Mauris vulputate nisi nec quam auctor suscipit. Donec nec arcu elit. Nulla quis quam at massa fermentum auctor et dictum dui. Aliquam ante lorem, fringilla convallis pretium ut, egestas a libero.
          </p>
        </div>
        {/* cambiar descripcion a que la cargue */}
        
      </div>
      <div className=" flex flex-col items-center justify-center gap-10 lg:flex-row-reverse max-w-[1000px]">
        <Image 
        src={drag ? `${drag.imageFolder}${drag.image[0]}` : 'Imagen no encontrada'}
        className="rounded-2xl"
        width={400}
        height={400}
        alt={drag ? drag.name : 'Imagen no encontrada'}
      />

        <div className="flex flex-col text-lg text-left text-white ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere eros vel metus gravida pellentesque. Sed eget nunc ullamcorper, tempor dui ac, condimentum tortor. Pellentesque eleifend lobortis justo, sed consequat est hendrerit euismod. Donec suscipit nisi orci, non sagittis sapien tincidunt sed. Vivamus ac pellentesque risus. Nulla gravida lectus vel ex egestas ornare. Nam quis eros nibh.
          </p>
          <p>
            Phasellus lectus nulla, mollis molestie vehicula non, eleifend a nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et sodales est. Curabitur accumsan, mauris et fermentum viverra, mauris quam blandit neque, imperdiet aliquet nulla urna nec urna. Pellentesque porta sem leo, id rutrum dolor porta sed. Integer molestie fermentum leo, eget sagittis dolor tincidunt at. Maecenas volutpat viverra diam at porttitor. Mauris vulputate nisi nec quam auctor suscipit. Donec nec arcu elit. Nulla quis quam at massa fermentum auctor et dictum dui. Aliquam ante lorem, fringilla convallis pretium ut, egestas a libero.
          </p>
        </div>
      </div>

    </section>
    </>
  );
}
