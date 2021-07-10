import React from 'react';
import './StartButton.css';
import { BsPeople } from 'react-icons/bs';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <>
      <div className="navsecs">
        <h1 className="teams-titles">Welcome To Teams</h1>
        </div>
        <div className="video-icon-layouts ">

          <button
            className="video_buttons"
            disabled={props.disabled}
            onClick={props.onClick}
          >
            <BsPeople className="video-icons" />
            Start the <b>meeting</b>
          </button>
      </div>
    </>
  );
}
