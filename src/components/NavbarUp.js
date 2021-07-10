import "../css/NavUp.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BiDotsHorizontal } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

/* This component contains above navbar that shows on the page */

const NavUp = () => {
  return (
    <>
      <div className="m-banner col-12">
        <Link to="/appnav">
          <BsGrid3X3Gap className="app-icon" />
        </Link>
        <div className="nav-heading"><span className='previous'>Microsoft Teams</span><span className='after'>Teams</span></div>

        <form className="searchbar">
          {/*<IoIosSearch className="search-icon" />*/}
          <input
            type="search"
            className="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
        <div className="home1 row">
          <BiDotsHorizontal className="dot-icon" />
          <Link className="home" to="/activity">
            <AiFillHome className="circle-icon" />
          </Link>
          <Button 
            className='logout'
            /* This function will help us to remove all the deatails after clicking on logout */
            onClick={() => {
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              localStorage.removeItem("username");
              localStorage.removeItem("clicked");
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavUp;
