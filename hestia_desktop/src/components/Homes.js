import { useState } from 'react';

const Homes = () => {
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
        ]
    )
    return (
        <>
            {homes.map((home) => (
                <h3 key={homes.id}>{home.price}</h3>
            ))}
        </>
    )
}

export default Homes
