import React, { useState } from "react";
import "./navbar.scss";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../../Assets/profile.jpg";
import profile from "../../Assets/profile.png";
import setting from "../../Assets/setting.png";
import logout from "../../Assets/logout.png";
import help from "../../Assets/help.png";
import { FaAngleRight } from "react-icons/fa";
import ReactSearchBox from "react-search-box";
import { MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
  const NAVLINKS = [
    {
      display: "Accueil",
      url: "/home",
    },
    {
      display: "Products",
      url: "/popular",
    },
    {
      display: "Auction",
      url: "/contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const hahaMenuu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleNotification = () => {
    setIsNotificationOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-device-fill"></i>
              </span>
              Dot
            </h2>
          </div>
          <div className="navmenu1">
            <ul className="navlist1">
              {NAVLINKS.map((Item, index) => (
                <li className="navitem1" key={index}>
                  <Link to={Item.url}>{Item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          {isOpen && (
            <div className="navmenu">
              <ul className="navlist">
                {NAVLINKS.map((Item, index) => (
                  <li className="navitem" key={index} onClick={hahaMenuu}>
                    <Link to={Item.url}>{Item.display}</Link>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="navright d-flex align-items-center gap-5">
            <div className="war" onMouseOver={() => toggleNotification()}
              onMouseOut={() => toggleNotification()}>
            <MdOutlineNotifications
              className="notif "
             
            /> 
                {isNotificationOpen && <div className="notification-div d-flex align-items-center m-0 mt-1 "><p>Notifications</p></div>}</div>
            <img src={img} alt="logo" onClick={toggleMenu} className="tog" />
            <span className="mobilemenu" onClick={hahaMenuu}>
              <i className="ri-menu-line"></i>
            </span>

            <div
              className={`submenuwrap ${isMenuOpen ? "open-menu" : ""}`}
              id="submenu"
            >
              <div className="submenu">
                <div className="userinfo">
                  <img src={img} alt="logo" />
                  <h2>Firas LH</h2>
                </div>
                <hr />

                <Link to="#" className="submenulink">
                  <img src={profile} alt="" />
                  <p>Edit Profile</p>
                  <FaAngleRight className="rightdir" />
                </Link>

                <Link to="#" className="submenulink">
                  <img src={setting} alt="" />
                  <p>Settings & Privacy</p>
                  <FaAngleRight className="rightdir" />
                </Link>

                <Link to="#" className="submenulink">
                  <img src={help} alt="" />
                  <p>Help & Support</p>
                  <FaAngleRight className="rightdir" />
                </Link>

                <Link to="#" className="submenulink">
                  <img src={logout} alt="" />
                  <p>Logout</p>
                  <FaAngleRight className="rightdir" />
                </Link>
              </div>
            </div>

            <hr />
          </div>
        </div>
      
      </Container>
    </header>
  );
};

export default Navbar;
