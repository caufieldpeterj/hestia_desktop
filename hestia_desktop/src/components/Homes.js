import Home from './Home'

const Homes = ({homes}) => {
    
    return (
        <>
            {homes.map((home) => (
                <h3 key={homes.id}>{home.price}</h3>
            ))}
        </>
    )
}

export default Homes
