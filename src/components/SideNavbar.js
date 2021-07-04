import "../css/SideNavbar.css";
import {HiOutlineBell} from "react-icons/hi"
import {BsChatDots, BsCalendar, BsFiles} from "react-icons/bs"
//import {SiMicrosoftteams} from "react-icons/si"
import {ImBooks} from "react-icons/im"
import {IoMdApps} from "react-icons/io"
import {BiHelpCircle, BiDotsHorizontalRounded} from "react-icons/bi"
import {Link} from 'react-router-dom';

/* This component is for side navbar that includes all the activities  */

const SideNav = () => {
  return (
    <>
        <div className="sidebar col-4">
          <Link className="active" to="/">
          <HiOutlineBell className='icons'/>Activity
          </Link>
          <Link className='links' to="/chat"><BsChatDots className='icons'/>Chat</Link>
          {/*<Link className='links' to="/"><SiMicrosoftteams className='icons'/>Teams</Link>*/}
          <Link className='links' to="/assignment"><ImBooks className='icons'/>Assignment</Link>
          <Link className='links' to="/calendar"><BsCalendar className='icons'/>Calendar</Link>
          <Link className='links' to="/file"><BsFiles className='icons'/>Files</Link>
          <BiDotsHorizontalRounded className='icons' style={{marginLeft:'15px'}}/>

          <div className='bottom'>
          <Link className='links' to="/appsicon"><IoMdApps className='icons'/>Apps</Link>
          <Link className='links' to="/help"><BiHelpCircle className='icons'/>Help</Link>
          </div>
        </div>
    </>
  );
};

export default SideNav;
