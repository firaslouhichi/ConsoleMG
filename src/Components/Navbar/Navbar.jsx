import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { AiFillCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import img from "../../Assets/haha1.png";
import axios from "axios";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/logout");
      setTimeout(() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        window.location.href = "/login";
      }, 4000);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBg);
    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <img src={img} alt="logo" className="icon" />
          </a>
        </div>

        <div className={active}>
          {isLoggedIn ? (
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>

              <Link to="hahaha">
                <li className="navItem" onClick={removeNav}>
                  <a href="" className="navLink">
                    Products
                  </a>
                </li>
              </Link>

              <li className="navItem">
                <a href="#" className="navLink">
                  Resources
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Contacts
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Blog
                </a>
              </li>

              <div className="headerBtns flex">
                <>
                  <button className="logout" color="white" onClick={logout}>
                    Logout
                  </button>
                </>
              </div>
            </ul>
          ) : (
            <React.Fragment>
              <RouterLink to="/">
                <button className="btn loginBtn">
                  <a href="#">Login</a>
                </button>
              </RouterLink>
              <RouterLink to="/register">
                <button className="btn">
                  <a href="#">Sign up</a>
                </button>
              </RouterLink>
            </React.Fragment>
          )}

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <RxHamburgerMenu className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
