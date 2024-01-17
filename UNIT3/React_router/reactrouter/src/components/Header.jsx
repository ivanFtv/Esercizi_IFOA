
const Header = () => {

    return (
        <div style={divStyle} className="bg-secondary">
            <h1 className="text-center">Sono una header</h1>
        </div>
    )
}

const divStyle = {
    minWidht: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}

export default Header