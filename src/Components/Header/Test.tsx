import React, { useState } from 'react';
import useIsMobile from '@/Hooks/useIsMobile'

function Example() {
  const mode= useIsMobile()

  return (
    <div>
      <p>Modo actual: {mode}</p>
    </div>
  );
}

export default Example