import FlightUILogo from "../icons/FlightUILogo"
import ReactIcon from "../icons/ReactIcon"

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer x-container">
                <div className="footer-content">
                    <div className="footer-logo-message">
                        <FlightUILogo/> - 2022
                    </div>
                    <div>
                        <p className="text">
                            Made with react
                            <ReactIcon/>
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer