import "../css/login.css";
import { Jumbotron } from "react-bootstrap";
// It will hold the info about previous stage you were in
import { useHistory } from "react-router-dom"

const Login = () => {
  let history = useHistory();
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
        <div className="row">
            <div className="heading col-5">
              <h1 className="welcome">
                <b>Welcome to Microsoft Teams</b>
              </h1>
              <p className="para">
                Sign in now to chat, meet, call, and collaborate all in one
                place.
              </p>
              
            <div className="link">
                <button className='btn-1' onClick={() =>{ history.push('/'); }}>Sign in</button>
                <button className='btn-2'>Download now</button>
            </div>
            </div>
            
          <div className="col-7">
            <img
              width="770px"
              height="550px"
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
