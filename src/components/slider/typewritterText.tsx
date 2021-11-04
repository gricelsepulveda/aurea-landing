import React, {useState, useEffect} from 'react'

type TypeWriterTextType = {
  text: string,
  activeReset: string
}

const TypeWriterText:React.FunctionComponent<TypeWriterTextType> = (props) => {
  const { text, activeReset } = props
  const [typedText, setTypedText] = useState([<span></span>])
  const [ activeIndex, setActiveIndex ] = useState(0)
  const splitText = text.split('')
  const insertLetter = () => {
    setTypedText([...typedText, <span>{splitText[activeIndex]}</span>])
    setActiveIndex(activeIndex + 1)
  }

  useEffect(() => {
    if (activeIndex + 1  <= text.length){
      setTimeout(() => {
        insertLetter()
      }, 100)
    }
  }, [activeIndex])

  useEffect(() => {
    setActiveIndex(0)
    setTypedText([<span></span>])
  }, [activeReset])

  return (
    <>
      {typedText.map(char => char)}
    </>
  )
}
export default TypeWriterText