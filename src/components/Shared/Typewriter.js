import { useState, useEffect, useRef } from 'react'
import useTypewriter from 'react-typewriter-hook'

let index = 0

const Typewriter = ({ words }) => {
  const [ currentWord, setCurrentWord ] = useState(words[0])
  const intervalRef = useRef({})
  const word = useTypewriter(currentWord)

  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index
        setCurrentWord(words[index])
      }, 4000)
      return function clear() {
        clearInterval(intervalRef.current)
      }
    },
    [ currentWord, words ]
  )
  return word
}
export default Typewriter
