import {connect} from 'react-redux';
import { startFetching, finishFetching } from './actions';
import './App.css';
import Header from './components/Header.js'
import NewCharacters from './components/NewCharacters.js'
import Display from './components/Display.js'
import React, { useEffect, useState } from 'react'


function App({startFetching, finishFetching}) {

  const [pageId, setPageId] = useState(1)


  const incrementPage = () => {
    pageId === 34 ? setPageId(1) : setPageId(pageId + 1)
  }

  useEffect(() => {
   startFetching();
   finishFetching(pageId)
  }, [pageId])


  return (
    <div className="App">
      <Header />
      <NewCharacters getNextPage={incrementPage} />
      <Display />
    </div>
  );

}

export default connect(null, {startFetching, finishFetching})(App);
