import { Link } from "react-router-dom";
import { IoMdHome, IoMdBook } from "react-icons/io";
import { FaRegEdit, FaRegUser } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";

import './index.css'

const SideMenu = () => {
    return (
        <div className="side-menu-container">
            <div className="images-container">
                <Link to='/' className="link">
                    <IoMdHome className='side-img' />
                </Link>
                <Link to="/new" className="link">
                    <IoMdBook className='side-img' />
                </Link>
                <Link to="/edit" className="link">
                    <FaRegEdit className='side-img' />
                </Link>
                <FaRegUser className='side-img' />
                <RiUserSettingsLine className='side-img' />
            </div>

        </div>
    )
}

export default SideMenu;