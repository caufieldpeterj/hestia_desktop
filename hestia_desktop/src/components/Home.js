import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Home = ({ home, onDelete, onToggle}) => {
    return (
        <div className={`task ${home.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(home.id)}>
            <h3>{home.town}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(home.id)} /></h3>
            <p>{home.price}</p>
        </div>
    )
}

export default Home