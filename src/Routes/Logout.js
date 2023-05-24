import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";

import { Key_Access_Token } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
import { deleteUser } from "../utils/localStorage";

function Logout() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      deleteUser(Key_Access_Token);

      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Logout",
        })
      );

      navigate("/auth/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div class="flex mx-auto  justify-center items-center h-[60vh]">
      <h1 class="text-2xl p-9 rounded-lg px-16  bg-green-300">
        {" "}
        <button
          class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
          onClick={submitHandle}
        >
          Logout
        </button>{" "}
      </h1>
    </div>
  );
}

export default Logout;
