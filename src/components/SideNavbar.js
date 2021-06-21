import "../css/SideNavbar.css";
import {HiOutlineBell} from "react-icons/hi"
import {BsChatDots, BsCalendar, BsFiles} from "react-icons/bs"
import {SiMicrosoftteams} from "react-icons/si"
import {ImBooks} from "react-icons/im"
import {IoMdApps} from "react-icons/io"
import {BiHelpCircle, BiDotsHorizontalRounded} from "react-icons/bi"
import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <>
        <div className="sidebar col-4">
          <Link className="active" to="/">
          <HiOutlineBell className='icons'/>Activity
          </Link>
          <Link to="/"><BsChatDots className='icons'/>Chat</Link>
          <Link to="/"><SiMicrosoftteams className='icons'/>Teams</Link>
          <Link to="/assignment"><ImBooks className='icons'/>Assignment</Link>
          <Link to="/"><BsCalendar className='icons'/>Calendar</Link>
          <Link to="/file"><BsFiles className='icons'/>Files</Link>
          <BiDotsHorizontalRounded className='icons' style={{marginLeft:'15px'}}/>

          <div className='bottom'>
          <Link to="/"><IoMdApps className='icons'/>Apps</Link>
          <Link to="/"><BiHelpCircle className='icons'/>Help</Link>
          </div>
        </div>
    </>
  );
};

export default SideNav;
