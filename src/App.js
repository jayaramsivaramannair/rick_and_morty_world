import './App.css';
import Header from './components/Header.js'
import NewCharacters from './components/NewCharacters.js'
import Display from './components/Display.js'
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
//Importing Reducers
import GlobalState from './Reducers/index.js'

//Creating Context for passing down to other elements
export const ProfilesContext = React.createContext()


function App() {

  const [state, dispatch] = useReducer(GlobalState.reducer, GlobalState.initialState)
  const [pageId, setPageId] = useState(1)


  const incrementPage = () => {
    pageId === 34 ? setPageId(1) : setPageId(pageId + 1)
  }

  console.log(pageId)


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageId}`)
      .then((response) => {
        console.log(response.data.results)
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.results })
      })
      .catch((error) => {
        console.log("Some Error Occurred!")
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [pageId])


  return (
    <ProfilesContext.Provider value={{ profiles: state, profilesDispatch: dispatch }}>
      <div className="App">
        {console.log('globalstate:', state.profiles)}
        <Header />
        <NewCharacters getNextPage={incrementPage} />
        <Display />
      </div>
    </ProfilesContext.Provider>
  );

}

export default App;
