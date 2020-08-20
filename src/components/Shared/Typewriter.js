import React, { useState, useEffect, useRef } from 'react'
import useTypewriter from 'react-typewriter-hook'

const Typewriter = () => {
  const words = [ 'Web Designer', 'FullStack Developer', 'Web Designer' ]
  let index = 0
  const [ word, setWord ] = useState('FullStack Developer')
  const intervalRef = useRef({})
  const currentWord = useTypewriter(word)
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index
        setWord(words[index])
      }, 5000)
      return function clear() {
        clearInterval(intervalRef.current)
      }
    },
    [ word ]
  )
  return currentWord
}
export default Typewriter
