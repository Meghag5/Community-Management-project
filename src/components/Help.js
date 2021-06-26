import "../css/Help.css";

/* This component is for help page */

const Help = () => {
  return (
    <>
      <div className="help">
        <ul className="help_lists">
          <li className="help_list">
            <button>Topics</button>
          </li>
          <li className="help_list">
            <button>Training</button>
          </li>
          <li className="help_list">
            <button>What's new</button>
          </li>
          <hr className="line" />
          <li className="help_list">
            <button>Suggest a feature</button>
          </li>
          <li className="help_list">
            <button>Ask the community</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Help;
