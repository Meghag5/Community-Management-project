import "../css/NavUpSec.css";
import { FiSettings } from "react-icons/fi";
import { RiFilter3Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import {Link} from "react-router-dom";

/* This component is for navbar that will include video call button */
/*https://video-chat-app-mg.netlify.app/*/

const NavUpSec = () => {
  return (
    <>
      <div className="navsec">
        <h1 className="teams-title">Teams</h1>
        <div className="video-icon-layout ">
          <RiFilter3Line className="video-icons" />
          <FiSettings className="video-icons" />
          <Link 
            to="/video"
            target="_blank"
            rel="noreferrer"
          >
            <button className="video_button">
              <BsPeople className="video-icon" />
              <span className="heading1">Join or create team</span>
              <span className="heading2">join team</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavUpSec;
