import {
  faSearch,
  faAngleDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import top_bar from "../../Assets/sidebar_profile.jpg";
import { Dropdown, Space } from "antd";
import message1 from "../../Assets/MessageNav/message1.jpg";
import message2 from "../../Assets/MessageNav/message2.jpg";
import message3 from "../../Assets/MessageNav/message3.jpg";
import notification from "../../Assets/MessageNav/chat1.png";
import message_icon from "../../Assets/MessageNav/chat.png";
import menu from "../../Assets/MessageNav/menu.png";

import alert from "../../Assets/MessageNav/power.png";
import { useState } from "react";
import TopBarOnClick from "./TopBarOnClikc";
import nav_logo from "../../Assets/MessageNav/nav_logo.svg";
import { Link } from "react-router-dom";
const TopBar = () => {
  const [handleShowMessage, setHandleShowMessage] = useState(false);
  const [handleShownotifications, setHandleShownotifications] = useState(false);
  const [rightbar, setShowRightbar] = useState(false);
  const handleShowRightBar = () => {
    setShowRightbar(true);
  };
  const handleCloseRightbar = () => {
    setShowRightbar(false);
  };
  const toggleShowMessage = () => {
    setHandleShowMessage(!handleShowMessage);
    setHandleShownotifications(false);
  };
  const toggleShownotifications = () => {
    setHandleShownotifications(!handleShownotifications);
    setHandleShowMessage(false);
  };
  const items = [
    {
      label: <Link to="/user-pages-login">Login</Link>,
      key: "0",
    },
    {
      label: <Link to="/user-pages-register">Sing Up</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
  ];

  return (
    <div className="mx-auto z-10 w-11/12">
      <div className="grid lg:grid-cols-4 gap-4 items-center">
        <Link className="cursor-pointer" to="/">
          <img className="w-32 cursor-auto" src={nav_logo} alt="nav_logo" />
        </Link>
        <div>
          <FontAwesomeIcon className="text-gray-500 pr-3" icon={faSearch} />
          <input
            type="search"
            placeholder="Search Products"
            className="focus:outline-none p-3 text-gray-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center py-4">
            <div>
              <img
                className="w-12 rounded-full mr-2"
                src={top_bar}
                alt="profile"
              />
            </div>
            <div>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="cursor-pointer">
                    David Greymaax <FontAwesomeIcon icon={faAngleDown} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative z-10 ml-8">
            <button
              className="cursor-pointer text-xl hover:scale-125 duration-150 ease-linear"
              onClick={toggleShowMessage}
            >
              {/* <FontAwesomeIcon icon={faMessage} /> */}
              <img src={message_icon} alt="message_icon" />
            </button>
            {handleShowMessage && (
              <div
                style={{ zIndex: "999 !important" }}
                className="z-10 w-1/4 sm:w-[240px] shadow-2xl p-2 rounded absolute top-10 left-0 bg-white"
              >
                <div>
                  <h3 className="py-3 text-xl font-medium">Messages</h3>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300 py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message1}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Mark Send you a message</h2>
                    <h4>1 Minutes ago</h4>
                  </div>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message2}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Cregh Send you a message</h2>
                    <h4>21 Minutes ago</h4>
                  </div>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message3}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Profile Picture Updated</h2>
                    <h4>12 Minutes ago</h4>
                  </div>
                </div>
                <button></button>
              </div>
            )}
          </div>
          <div className="relative z-10 ml-8">
            <button
              className="cursor-pointer text-xl hover:scale-125 duration-150 ease-linear"
              onClick={toggleShownotifications}
            >
              <img src={notification} alt="notification" />
            </button>
            {handleShownotifications && (
              <div className="w-1/4 bg-black text-white sm:w-[240px] shadow-2xl p-2 rounded absolute top-10 right-0">
                <div>
                  <h3 className="py-3 text-xl font-medium">Messages</h3>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300 py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message1}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Mark Send you a message</h2>
                    <h4>1 Minutes ago</h4>
                  </div>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message2}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Cregh Send you a message</h2>
                    <h4>21 Minutes ago</h4>
                  </div>
                </div>
                <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
                  <div className="mr-1">
                    <img
                      className="w-[35px] rounded-full"
                      src={message3}
                      alt="message1"
                    />
                  </div>
                  <div>
                    <h2>Profile Picture Updated</h2>
                    <h4>12 Minutes ago</h4>
                  </div>
                </div>
                <button></button>
              </div>
            )}
          </div>
          <div className="ml-8 ">
            <Link to="/user-pages-lockscreen">
              <img src={alert} className="cursor-pointer" alt="alert" />
            </Link>
          </div>
          <div className="relative z-10">
            {rightbar ? (
              <button onClick={() => handleCloseRightbar(false)}>
                <FontAwesomeIcon
                  className="cursor-pointer  pr-2 text-2xl font-bold"
                  icon={faClose}
                />
              </button>
            ) : (
              <button onClick={handleShowRightBar}>
                <img src={menu} alt="bar_icon" />
              </button>
            )}

            <div className="absolute h-full  right-0 top-8 bottom-0  ">
              {rightbar && <TopBarOnClick />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
