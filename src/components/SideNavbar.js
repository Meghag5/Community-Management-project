import "../css/SideNavbar.css";
import {HiOutlineBell} from "react-icons/hi"
import {BsChatDots, BsCalendar, BsFiles} from "react-icons/bs"
import {SiMicrosoftteams} from "react-icons/si"
import {ImBooks} from "react-icons/im"
import {IoMdApps} from "react-icons/io"
import {BiHelpCircle, BiDotsHorizontalRounded} from "react-icons/bi"

const SideNav = () => {
  return (
    <>
        <div className="sidebar">
          <a className="active" href="#home">
          <HiOutlineBell className='icons'/>Activity
          </a>
          <a href="#news"><BsChatDots className='icons'/>Chat</a>
          <a href="#contact"><SiMicrosoftteams className='icons'/>Teams</a>
          <a href="#about"><ImBooks className='icons'/>Assignment</a>
          <a href="#about"><BsCalendar className='icons'/>Calendar</a>
          <a href="#about"><BsFiles className='icons'/>Files</a>
          <BiDotsHorizontalRounded className='icons' style={{marginLeft:'15px'}}/>

          <div className='bottom'>
          <a href="#about"><IoMdApps className='icons'/>Apps</a>
          <a href="#about"><BiHelpCircle className='icons'/>Help</a>
          </div>
        </div>
    </>
  );
};

export default SideNav;
