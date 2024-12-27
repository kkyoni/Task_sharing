import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./Layouts.css";
const Layouts = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default Layouts;
