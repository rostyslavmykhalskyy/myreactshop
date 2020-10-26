import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../store/actions";
import { useHistory } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user.email);
  const [userMenu, setUserMenu] = useState(false);

  const logOutHandler = () => {
    dispatch(userLogOut());
    history.push("/");
  };
  return (
    <div
      onMouseEnter={() => {
        setUserMenu(true);
      }}
      onMouseLeave={() => {
        setUserMenu(false);
      }}
    >
      <p>{user}</p>
      {userMenu && (
        <div className="userMenu">
          <ul>
            <li>My orders</li>
            <li>Wish list</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
          <button
            onClick={() => {
              logOutHandler();
            }}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
