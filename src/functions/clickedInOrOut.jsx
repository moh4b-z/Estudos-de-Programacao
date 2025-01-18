import { useRef, useEffect } from 'react'


function clickedInOrOut(inside, out) {
    const ref = useRef()
  
    useEffect(() => {
      function handleClick(event) {
        if (!ref.current) return
  
        if (ref.current.contains(event.target)) {
          inside ? inside() : ''
        } else {
          out ? out() : ''
        }
      }
  
      document.addEventListener("mousedown", handleClick)
  
      return () => {
        document.removeEventListener("mousedown", handleClick)
      }
    }, [out, inside])
  
    return ref
}

export default clickedInOrOut