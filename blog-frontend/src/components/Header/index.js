import './index.css'

const Header = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <h1 className="logo">ZuAi</h1>
            </div>
            <div className="logout-button">
                <button className="logout">Logout</button>
            </div>

        </div>
    )
}

export default Header;