import FlightUILogo from "../icons/FlightUILogo"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-content x-container">
                    <div className="left">
                        <FlightUILogo />
                    </div>
                    <div className="right">
                        <Menu />
                    </div>
                </div>
            </nav>
        </div>
    ) 
}

export default Navbar