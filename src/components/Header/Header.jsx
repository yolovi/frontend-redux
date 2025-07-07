import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");

  const logoutRedirect = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleSearch = (e) => {
    setText(e.target.value);
    if (e.key == "Enter") {
      // console.log(text);
      navigate("/search/" + text);
    }
  };

  return (
    <nav>
      <input onKeyUp={handleSearch} placeholder="🔎" type="text" name="text" />
      <Link to={"/"}>Home</Link>
      {user ? (
        <>
          {user.role == "admin" && <Link to={"/admin"}> Admin </Link>}
          <span>
            <Link to={"/profile"}> Hola {user.name}! </Link>
          </span>
          <button onClick={logoutRedirect}>Logout </button>
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
