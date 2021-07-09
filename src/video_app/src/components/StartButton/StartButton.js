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
      <div className="navsec">
        <h1 className="teams-title">Welcome To Teams</h1>
        </div>
        <div className="video-icon-layout ">

          <button
            className="video_button"
            disabled={props.disabled}
            onClick={props.onClick}
          >
            <BsPeople className="video-icon" />
            Start the <b>meeting</b>
          </button>
      </div>
    </>
  );
}
