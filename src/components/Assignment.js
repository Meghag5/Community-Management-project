import "../css/Assignment.css";
import React from "react";

/* This component is for assignment page */

const Assignment = () => {
  return (
    <div className="assignment">
      <img
        className="assignment_img"
        alt="assignment"
        src="https://res-1.cdn.office.net/eduassignmentsui/assets/6pu4deme.backend-provisioning.svg"
      />
      <h2 className="assignment_title">
        You need a class to start using assignments!
      </h2>
      <a
        className="assignment_link"
        href="https://support.microsoft.com/en-us/topic/create-a-class-team-in-microsoft-teams-fae422eb-58b7-4431-9ff2-a4b9b6ae7c5b?ui=en-us&rs=en-gb&ad=gb"
        target="_blank"
        rel="noreferrer"
      >
        <u>Teachers: start here.</u>
      </a>
      <p className="assignment_para">
        Students: ask your teacher to create the class for you.
      </p>
    </div>
  );
};

export default Assignment;
