import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible (initialIsVisible: boolean): { ref: React.MutableRefObject<any>, isComponentVisible: boolean, setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>> } {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef<any>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if ((ref.current !== null && ref.current !== undefined) && ref.current.contains(event.target) === false) {
      setIsComponentVisible(false)
    } else {
      setIsComponentVisible(true)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref, isComponentVisible, setIsComponentVisible }
}
