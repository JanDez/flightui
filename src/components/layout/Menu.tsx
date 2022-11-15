const Menu = () => {
    const itemsList = [
        'Home',

    ]

    return (
        <div className="menu-container">
            <ul className="menu">
                {itemsList.map((item, index) => 
                    <li className="menu-item" key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Menu