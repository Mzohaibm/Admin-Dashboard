import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import sideBar_profile from "../../Assets/sideBar_profile.jpg";
import accept from "../../Assets/accept.png";
const Sidebar = () => {
  return (
    <div className="relative w-[250px]">
      <div className="flex items-center justify-center py-4">
        <div>
          <img
            className="w-12 rounded-full mr-2"
            src={sideBar_profile}
            alt="profile"
          />
        </div>
        <div>
          <h1 className="text-lg font-medium">David Grey.H</h1>
          <h1 className="text-sm font-thin text-gray-500">Project Manager</h1>
        </div>
        <div>
          <img className="w-4 rounded-full ml-2" src={accept} alt="accept" />
        </div>
      </div>
      <Menu
        mode="inline"
        items={[
          {
            label: <NavLink to={`/dashboard`}>DashBoard</NavLink>,
            key: "dashboard",
          },
          {
            label: "Basic UI Elements",
            key: "basic",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/basic-ui/buttons`}>Buttons</NavLink>
                  </div>
                ),
                key: "buttons",
              },
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/basic-ui/typography`}>Typography</NavLink>
                  </div>
                ),
                key: "typography",
              },
            ],
          },
          {
            label: "Form Elements",
            key: "form",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/form-elements/basic-elements`}>
                      Basic Elements
                    </NavLink>
                  </div>
                ),
                key: "form-elements",
              },
            ],
          },
          {
            label: "Tables",
            key: "table",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/tables/basic`}>Basic Table</NavLink>
                  </div>
                ),
                key: "basic",
              },
            ],
          },
          {
            label: "Icons",
            key: "icons",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/icons/material`}>Material</NavLink>
                  </div>
                ),
                key: "material",
              },
            ],
          },
          {
            label: "Charts",
            key: "charts",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/charts/charts-js`}>Chart Js</NavLink>
                  </div>
                ),
                key: "chart-js",
              },
            ],
          },
          {
            label: "User Pages",
            key: "users",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/user-pages-login`}>Login</NavLink>
                  </div>
                ),
                key: "login",
              },
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/user-pages-register`}>Register</NavLink>
                  </div>
                ),
                key: "register",
              },
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/user-pages-lockscreen`}>Lockscreen</NavLink>
                  </div>
                ),
                key: "lockscreen",
              },
            ],
          },
          {
            label: "Error Pages",
            key: "error",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/error-pages-404`}>404</NavLink>
                  </div>
                ),
                key: "404",
              },
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/error-pages-500`}>500</NavLink>
                  </div>
                ),
                key: "500",
              },
            ],
          },
          {
            label: "General Pages",
            key: "general",
            children: [
              {
                label: (
                  <div>
                    <FontAwesomeIcon className="pr-2" icon={faArrowRight} />{" "}
                    <NavLink to={`/general-pages`}>Blank Pages</NavLink>
                  </div>
                ),
                key: "404",
              },
            ],
          },
          {
            label: <NavLink to="/documentation">Documentation</NavLink>,
            key: "documentation",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidebar;
