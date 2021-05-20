// import libraries
import React from 'react'
import { useState } from 'react';

// import components
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Homes from './components/Homes'

function App() {
  const [homes, setHomes] = useState([
    {
        id: 1,
        town: 'Cherry Hill',
        price: 575000,
        reminder: true
    },
    {
        id: 2,
        town: 'Ocean City',
        price: 900000,
        reminder: true
    },
    {
        id: 3,
        town: 'Sarasota',
        price: 650000,
        reminder: false
    },
])
  
  return (
    <div className="container">
      <Nav />
      <Homepage />
      <Homes homes={homes}/>
    </div>
  )
}

export default App;