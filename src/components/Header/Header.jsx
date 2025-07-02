import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutRedirect = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      {user ? (
        <>
          <button onClick={logoutRedirect}>Logout </button>
          <span>
            <Link to={"/profile"}> Hola {user.name}! </Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to={"/login"}>Login </Link>
          </span>
          <Link to={"/register"}>
            <span>Register </span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
