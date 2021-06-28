import "../css/NavUp.css";
import {BsGrid3X3Gap} from "react-icons/bs"
import {BiDotsHorizontal} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"
import {IoIosSearch} from "react-icons/io"
import {Link} from 'react-router-dom';

/* This component contains above navbar that shows on the page */

const NavUp = () => {
  return (
    <>
      <div className="m-banner col-12">
        <Link to='/appnav'><BsGrid3X3Gap className='app-icon'/></Link>
        <div className="nav-heading">Microsoft Teams</div>
        
        <form className="searchbar">
        <IoIosSearch className='search-icon'/>
          <input
            type="search"
            className="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
        <div className='row'>
        <BiDotsHorizontal className='dot-icon'/>
        <Link className='home' to='/'><AiFillHome className='circle-icon'/></Link>
        </div>
      </div>
    </>
  );
};

export default NavUp;
