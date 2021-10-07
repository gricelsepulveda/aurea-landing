import React, {useState, useEffect} from 'react'
//COMPONENTS
//REACT ROUTER
import { Route, Switch, useHistory} from 'react-router-dom'
//TYPES
import { LandingApp } from "../types/types"

const Home:React.FunctionComponent = () => {
  const [characters, setCharacters] = useState<any>(undefined)
  const history = useHistory()

  useEffect(() => {
  }, [])

  return (
    <>
      <nav>
        
      </nav>
    </>
  )
}
export default Home