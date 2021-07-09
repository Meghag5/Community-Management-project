import React from "react";
import "../css/Activity.css";
import { SiMicrosoftteams } from "react-icons/si";
//import Typical from "react-typical";

const Activity = () => {
  return (
    <div className="activity">
      <h1 className="activity_heading">
        WELCOME TO
        <br />
        MICROSOFT TEAMS
        <br />
      <SiMicrosoftteams className='symbol'/>
      </h1>
    </div>
  );
};

export default Activity;
