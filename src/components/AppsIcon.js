import "../css/AppsIcon.css";
import React from "react";

const AppsIcon = () => {
  return (
    <>
      <div className="apps-page container row">
        <div className="col-12 col-md-8">
          <h2 className="apps_title">Get more done with apps!</h2>
          <p className="apps_para">
            Simplify workflows, share data, or find new ways to work smarter
            together.
          </p>
        </div>
        <div className="col-12">
          <img
            className="apps_page_img"
            alt="apps"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/7e4fac62-ec3c-40db-b16d-21938778fa59/701eb1ae344abf7d00e7223ec093b80b89b240a6.png"
          />
          <img
            className="apps_page_img2"
            alt="apps"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/f41fb6d9-a230-4d5e-a563-f39970598458/bb0fa9b6273c0a4eb568e496b5f024449a99e3f4.png"
          />
          <img
            className="apps_page_img"
            alt="apps"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/2a7444c1-73d5-47ed-8dcb-7b06607e1482/522db086d92be327289734fbe59b7339a50bf304.png"
          />
          <img
            className="apps_page_img2"
            alt="apps"
            src="https://cxcs.cdn.office.net/static/public/teamsuserlifecycle/neutral/f41fb6d9-a230-4d5e-a563-f39970598458/bb0fa9b6273c0a4eb568e496b5f024449a99e3f4.png"
          />
        </div>
      </div>
    </>
  );
};

export default AppsIcon;
