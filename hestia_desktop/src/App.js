// import libraries
import React from 'react'
import { useState } from 'react';

// import components
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Homes from './components/Homes'
import AddHome from './components/AddHome'


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

  // add home
  const addHome = (home) => {
    const id = Math.floor(Math.random()*100000) + 1;
    const newHome = { id, ...home }
    setHomes([...homes, newHome])
  }


  // delete home
  const deleteHome = (id) => {
    setHomes(homes.filter((home) => home.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setHomes(
      homes.map((home) => 
        home.id === id ? {...home, reminder: !home.reminder}:home
      )
    )
  }


  return (
    <div className="container">
      <Nav />
      <Homepage />
      <AddHome onAdd={addHome}/>
      <Homes homes={homes} onDelete={deleteHome} onToggle={toggleReminder} />
    </div>
  )
}

export default App;