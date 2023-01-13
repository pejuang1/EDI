import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'rsuite';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

import './App.css';

import { encryptStorage, userToken } from './Screens/GlobalFunction';

const App = () => {

  const [token, setToken] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    handleVerifToken()
  }, [])

  const handleVerifToken = async() => {
    try {
      const tokens = await userToken()
      console.log('token', tokens);
      setToken(tokens)
      setLoading(false)
      if(token == undefined){
        encryptStorage.clear()
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if(loading){
    return (
      <div className='center'>
        <Loader size="md"/>
      </div>
    )
  }
  return (
    <div>
      <Routes>
        {
          token ?
          <Route path='/' element={<HomeScreen/>}/>
          :
          <Route path='/' element={<LoginScreen/>}/>
        }
      </Routes>
    </div>
  )
}

export default App;
