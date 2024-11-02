import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo/Untitled-1-01.png";
import "./NavbarN.css"; // Import the CSS file
import { AuthContext } from "../Context/authContext";
import { Dropdown, Space, Button, Typography } from "antd";
import {
  FundOutlined,
  DownOutlined,
  SettingOutlined,
  ProfileOutlined,
  DownCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Box } from "@mui/material";
import defaultlogo from "../images/Default/DefaultAvatar.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const handleLogout = () => {
    if (currentUser) {
      logout();
      window.location.reload();
    }
  };

  const items = [
    {
      label: (
        <Link
          to={
            currentUser && currentUser.isAdmin
              ? "/dashboard/admin"
              : "/dashboard/user"
          }
          style={{ textDecoration: "none" }}
        >
          <FundOutlined /> Dashboard
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          <ProfileOutlined /> Profile
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/dashboard/setting" style={{ textDecoration: "none" }}>
          <SettingOutlined /> Setting
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link onClick={handleLogout} to="/" style={{ textDecoration: "none" }}>
          <LogoutOutlined style={{ color: "black" }} /> Logout
        </Link>
      ),
      key: "3",
    },
  ];
  return (
    <div className="navbar-container">
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={() => setNav(!nav)} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/team"}>Team</Link>
          </li>
        </ul>
      </div>
      {!currentUser ? (
        <Link
          to="/login"
          className="nav-link"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <i className="fas fa-sign-in-alt"></i>
          <Typography className="nav-log-reg"
            style={{ fontFamily: "Poppins,sans serif", fontSize: 15 }}
          >
            Login
          </Typography>
        </Link>
      ) : (
        ""
      )}

      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      {!currentUser ? (
        <Link
          to="/signup"
          className="nav-link"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <i className="fas fa-user-plus"></i>
          <Typography className="nav-log-reg"
            style={{ fontFamily: "Poppins,sans serif", fontSize: 15 }}
          >
          Register
          </Typography>
        </Link>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          fontSize={19}
        >
          <Dropdown
            arrow
            placement="bottomRight"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ color: "white", fontSize: 15 }}>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    backgroundColor: "rgb(0,0,0,0.2)",
                  }}
                >
                  {" "}
                  My Profile{" "}
                  <DownCircleOutlined
                    style={{ color: "white", fontSize: 15 }}
                  />
                </Button>
              </Space>
            </a>
          </Dropdown>
          <img
            src={
              currentUser && currentUser.avatar
                ? currentUser.avatar
                : defaultlogo
            }
            alt="logo profile"
            style={{
              // border: "1px solid white",
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      {/* mobile */}
      <div className="mobile-hamb" onClick={() => setNav(!nav)}>
        <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
      </div>
    </div>
  );
};

export default Navbar;
