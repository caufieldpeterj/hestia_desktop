import Home from './Home'

const Homes = ({homes, onDelete, onToggle }) => {
    
    return (
        <>
            {homes.map((home) => (
                <Home key={homes.id} home={home} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Homes
