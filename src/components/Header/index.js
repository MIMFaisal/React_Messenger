import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";
import "./style.css";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div style={{ display: "flex", position: "relative", width: "15vw" }}>
        <div className="logo">Messenger</div>

        {!auth.authenticated ? (
          <ul className="leftMenu float-right">
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            </li>
          </ul>
        ) : null}
      </div>
      <div style={{ margin: "20px 0", color: "#fff", fontWeight: "bold" }}>
        {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ""}
      </div>
      <ul className="menu">
        {auth.authenticated ? (
          <li>
            <Link
              to={"#"}
              onClick={() => {
                dispatch(logout(auth.uid));
              }}
            >
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </header>
  );
};

export default Header;
