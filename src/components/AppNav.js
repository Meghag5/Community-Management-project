import "../css/AppNav.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  SiMicrosoftoutlook,
  SiMicrosoftonedrive,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftonenote,
  SiMicrosoftteams,
  SiMicrosoftsharepoint,
} from "react-icons/si";

/* In this component we are making app menu where we will have 
different microsoft apps like word, office , ms team etc */

const AppNav = () => {
  return (
    <>
      <div className="appnavbar">
        <div className="appicons row col-12">
          <Link to="/">
            <BsGrid3X3Gap className="appnav-icon" />
          </Link>
          <a
            className="office-365"
            href="https://www.office.com?auth=2&amp;home=1&amp;from=ShellLogo&amp;username=megha.35414802719@cse.mait.ac.in&amp;login_hint=megha.35414802719@cse.mait.ac.in"
          >
            <span
              className="office-365-label"
              ng-bind="::$root.resources.strings.waffle_office365_title | translate"
            >
              Microsoft 365
              <AiOutlineArrowRight />
            </span>
          </a>
        </div>
        <div className="apptitle">Apps</div>
        <div className="appnav-icons1 row col-12">
          <span className="appnav-icons2 col-6">
            <a href="https://outlook.office.com/mail/?realm=cse.mait.ac.in&exsvurl=1&ll-cc=2057&modurl=0&JitExp=1&url=%2fowa%2f%3frealm%253dcse.mait.ac.in%2526exsvurl%253d1%2526ll-cc%253d2057%2526modurl%253d0">
              <SiMicrosoftoutlook
                className="space"
                style={{ fill: "rgb(0, 120, 212)" }}
              />
              <span>Outlook</span>
            </a>
          </span>
          <span className="appnav-icons2 col-6">
            <a href="https://maitadmin-my.sharepoint.com/personal/megha_35414802719_cse_mait_ac_in/_layouts/15/onedrive.aspx">
              <SiMicrosoftonedrive
                className="space"
                style={{ fill: "rgb(40, 168, 234)" }}
              />
              <span>OneDrive</span>
            </a>
          </span>
        </div>
        <div className="appnav-icons1 row col-12">
          <span className="appnav-icons2 col-6">
            <a href="https://www.office.com/launch/word?auth=2">
              <SiMicrosoftword
                className="space"
                style={{ fill: "rgb(43, 124, 211)" }}
              />
              <span>Word</span>
            </a>
          </span>
          <span className="appnav-icons2 col-6">
            <a href="https://www.office.com/launch/excel?auth=2">
              <SiMicrosoftexcel
                className="space"
                style={{ fill: "rgb(16, 124, 65)" }}
              />
              <span>Excel</span>
            </a>
          </span>
        </div>
        <div className="appnav-icons1 row col-12">
          <span className="appnav-icons2 col-6">
            <a href="https://www.office.com/launch/powerpoint?auth=2">
              <SiMicrosoftpowerpoint
                className="space"
                style={{ fill: "rgb(196, 62, 28)" }}
              />
              <span>PowerPoint</span>
            </a>
          </span>
          <span className="appnav-icons2 col-6">
            <a href="https://www.office.com/launch/onenote?auth=2">
              <SiMicrosoftonenote
                className="space"
                style={{ fill: "rgb(147, 50, 191)" }}
              />
              <span>OneNote</span>
            </a>
          </span>
        </div>
        <div className="appnav-icons1 row col-12">
          <span className="appnav-icons2 col-6">
            <a href="https://maitadmin.sharepoint.com/_layouts/15/sharepoint.aspx?">
              <SiMicrosoftsharepoint
                className="space"
                style={{ fill: "rgb(26, 155, 161)" }}
              />
              <span>SharePoint</span>
            </a>
          </span>
          <span className="appnav-icons2 col-6">
            <a href="https://teams.microsoft.com/_#/?lm=deeplink&lmsrc=officeWaffle&login_hint_safe=megha.35414802719@cse.mait.ac.in">
              <SiMicrosoftteams
                className="space"
                style={{ fill: "rgb(75, 83, 188)" }}
              />
              <span>Teams</span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default AppNav;
