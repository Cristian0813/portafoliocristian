import React, { useState } from 'react'

const useFlipHook = (initialState: boolean = false) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(initialState)
  
  const flip = () => {
    setIsFlipped(prevState => !prevState)
  }
  return {isFlipped, flip}
}

export default useFlipHook