import './App.css';
import Header from './components/Header.js'
import Display from './components/Display.js'
import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
//Importing Reducers
import GlobalState from './Reducers/index.js'

//Creating Context for passing down to other elements
export const ProfilesContext = React.createContext()


function App() {

  const [state, dispatch] = useReducer(GlobalState.reducer, GlobalState.initialState)


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        console.log(response.data.results)
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.results })
      })
      .catch((error) => {
        console.log("Some Error Occured!")
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])



  return (
    <ProfilesContext.Provider value={{ profiles: state, profilesDispatch: dispatch }}>
      <div className="App">
        {console.log('globalstate:', state.profiles)}
        <Header />
        <Display />
      </div>
    </ProfilesContext.Provider>
  );

}

export default App;
