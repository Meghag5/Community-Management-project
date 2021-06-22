import "../css/NavUpSec.css";
import {FiSettings} from "react-icons/fi"
import {RiFilter3Line} from "react-icons/ri"
import {BsPeople} from 'react-icons/bs'

const NavUpSec = () => {
    return (
        <>
      <div className="navsec">
        <h1 className='teams-title'>Teams</h1>
        <div className='video-icon-layout '>
        <RiFilter3Line className='video-icons' />
        <FiSettings className='video-icons' />
        <a href='https://video-chat-app-mg.netlify.app/'><button className='video_button'><BsPeople className='video-icon' />Join or create team</button></a>
        </div>
      </div>
    </>
    )
}

export default NavUpSec;
