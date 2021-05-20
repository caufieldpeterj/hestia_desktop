import Home from './Home'

const Homes = ({homes, onDelete}) => {
    
    return (
        <>
            {homes.map((home) => (
                <Home key={homes.id} home={home} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Homes
