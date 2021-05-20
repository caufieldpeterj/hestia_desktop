import React from 'react'
import { useState } from 'react'


const AddHome = ({ onAdd }) => {
    const [price, setPrice] = useState('');
    const [town, setTown] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!town) {
            alert('Please add a home')
            return
        }

        onAdd({ town, price, reminder })

        setPrice('');
        setTown('');
        setReminder(false)

    } 

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Home</label>
                <input
                    type='text'
                    placeholder='Add Town'
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input 
                    type='text' 
                    placeholder='Add Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </div>
            <div className='form-control-check'>
                <label>Pending</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input type='submit' value="Save Home" className="btn btn-block" />


        </form>


    )
}

export default AddHome
