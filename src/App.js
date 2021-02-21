import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import './App.css';
//Pages
import Home from "./pages/Home/Home";

//components
import Navbar from "./components/Navbar/Navbar";

const { Header, Content } = Layout;


function App() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Navbar 
           collapse={collapse}
           setCollapse={setCollapse}
           />
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, fontSize: "x-large", fontWeight: "700" }}
            >
              {React.createElement(
                collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => toggle(),
                }
              )}
              HRSummit
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                minHeight: 280,
              }}
            >
             
             <Home />
            </Content>
          </Layout>
        </Layout>
      </Router>
    
    </div>
  );
}

export default App;
