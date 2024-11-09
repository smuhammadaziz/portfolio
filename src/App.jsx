import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/home';
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App