import Content from "./Content"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="layout">
                <Navbar />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Layout