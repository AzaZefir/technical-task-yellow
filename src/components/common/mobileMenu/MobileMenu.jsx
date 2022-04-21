import classes from "./Mobile.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import LogoMenu from "./../../../assets/img/logoMenu.png";

export const MobileMenu = ({
  setActiveMobileMenu,
  setIsMobileModalVisible,
}) => {
  return (
    <div className={classes.mobile_container}>
      <div className={classes.mobile_wrapper}>
        <div className={classes.mobile_logo}>
          <img className={classes.mobile_logo_class} src={LogoMenu} alt="" />
        </div>
        <div className={classes.mobile_links}>
          <div style={{ marginBottom: "20px" }}>
            <NavLink
              to="/"
              onClick={() => {
                setActiveMobileMenu(true);
              }}
            >
              JOGS
            </NavLink>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <NavLink
              to="/info"
              onClick={() => {
                setActiveMobileMenu(true);
              }}
            >
              INFO
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contactUs"
              onClick={() => {
                setActiveMobileMenu(true);
              }}
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
