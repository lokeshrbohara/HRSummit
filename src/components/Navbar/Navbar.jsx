import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Drawer, Menu } from "antd";

import "./Navbar.css";


const Navbar = ({
  collapse,
  setCollapse,
}) => {
   
    return (
      <div>
        <Drawer
          theme="dark"
          placement="left"
          onClick={() => setCollapse(false)}
          onClose={() => setCollapse(false)}
          visible={collapse}
        >
          <div className="nav-main">
            <div className="logo" style={{ color: "black" }}>
             Demo
            </div>
            <Menu mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<CalendarOutlined />}>
                <Link to="/events">Events</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
            
              <Menu.Item key="4" icon={<LoginOutlined />}>
                <Link to="/login">Login</Link>
              </Menu.Item>
                
  
            </Menu>
            <div className="nav-credits">
              Made by
              <br /> Lokesh Bohara
            </div>
          </div>
        </Drawer>
      </div>
    );
  };
  
  export default Navbar;
  