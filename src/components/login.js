import "../css/login.css";
import { Jumbotron } from "react-bootstrap";
import { useState } from "react";
// It will hold the info about previous stage you were in
//import { useHistory } from "react-router-dom";

/* This component is for login page */

const Login = () => {
  const [clicked, setClicked] = useState('');
  localStorage.setItem("clicked", clicked);

  return (
    <div>
      <div className="login-nav col-12">
        <div className="mm-banner">
          <p>
            The Together Mode and Large Gallery View features are rolling out to
            customers now.
          </p>
        </div>
      </div>

      <Jumbotron>
        <div className="container">
          <div className="login_page">
            <div className="heading col-lg-5 col-md-5 col-sm-12">
              <h1 className="welcome">
                <b>Welcome to Microsoft Teams</b>
              </h1>
              <p className="para">
                Sign in now to chat, meet, call, and collaborate all in one
                place.
              </p>

              <div className="link">
                <button
                  className="btn-1"
                  onClick={() => {
                    setClicked(true);
                    window.location.reload();
                  }}
                >
                  Sign in
                </button>
                <a
                  href="https://www.microsoft.com/en-in/microsoft-teams/download-app#desktopAppDownloadregion"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-2">Download now</button>
                </a>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12">
              <img
                className="pic"
                alt="Device screen displays a team conversation in Microsoft Teams and the Manage team option selected from the More options menu."
                title="Device screen displays a team conversation in Microsoft Teams and the Manage team option selected from the More options menu."
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4H4kk?ver=fb18&amp;q=90&amp;m=2&amp;h=768&amp;w=1204&amp;b=%23FFFFFFFF&amp;aim=true"
              ></img>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Login;
