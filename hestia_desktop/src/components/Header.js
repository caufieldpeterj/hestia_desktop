import React from 'react'

import Button from './Button'

const Header = () => {
        
    const onClick = (e) => {
        console.log('Click')
    }
    
    return (
        <header>
            <h1 style={{ color: 'red' }}>Home Tracker</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

export default Header

