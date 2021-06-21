import "../css/Assignment.css";
import React from "react";

const File = () => {
  return (
    <div className="assignment">
      <img
        className="assignment_img"
        alt="assignment"
        src="https://res-1.cdn.office.net/eduassignmentsui/assets/6pu4deme.backend-provisioning.svg"
      />
      <h2 className="assignment_title">
      See what everyone's working on.
      </h2>
      <a
        className="assignment_link"
        href="/"
      >
        <u>See all files here..</u>
      </a>
      <p className="assignment_para">Easy access to active files from all of your teams.
</p>
    </div>
  );
};

export default File;
