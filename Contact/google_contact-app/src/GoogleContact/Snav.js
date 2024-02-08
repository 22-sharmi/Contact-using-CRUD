import { FaUserPlus, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Home from "../crud2/Home";
import Home1 from "../crud2/Home1";
import Home2 from "../crud2/Home2";
import { useNavigate } from "react-router-dom";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  const navi= useNavigate();
  function handleCreateContactClick(){
    navi('/New');
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">

        <button 
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />  
        </button>

        <a className="navbar-brand" href="/">
          <img src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png" alt="Logo" height="30" />
        </a>

        <div className="d-flex align-items-center">

          <button className="btn btn-success rounded-pill d-flex align-items-center px-3 me-2">
            <FaUserPlus className="me-1" />
            <span onClick={handleCreateContactClick}>Add Contact</span>
          </button>

          <a 
            href="/"
            className="icon-button me-3"
          >
            <FaSearch />
            <span className="visually-hidden">Search</span>  
          </a>

        </div>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/contacts" className="nav-link">Contacts</a>
            </li>
            <li className="nav-item">
              <a href="/frequent" className="nav-link">Frequent</a> 
            </li>
            <li className="nav-item">
              <a href="/setting" className="nav-link">Settings</a> 
            </li>
          </ul>
        </div>

      </div>
    </nav>
    </>
  );

}