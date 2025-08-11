import { useState, useEffect } from 'react'

function useIsMobile() {
  const [mode, setMode] = useState("desktop") // Valor por defecto
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    function updateMode() {
      if (typeof window !== 'undefined') {
        setMode(window.innerWidth < 1024 ? "mobile" : "desktop")
      }
    }
    
    updateMode()
    window.addEventListener("resize", updateMode)
    
    return () => window.removeEventListener("resize", updateMode)
  }, [])
  
  // Durante la hidratación, devuelve el valor por defecto
  if (!mounted) {
    return "desktop"
  }
  
  return mode
}

export default useIsMobile