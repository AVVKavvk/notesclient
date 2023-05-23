import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";

import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const dispatch = useDispatch();
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.put("/auth/", {
        email,
        password,
        confirmpassword: conpassword,
      });
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: `${result.result}`,
        })
      );
      setTimeout(() => {
        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: "Now Login",
          })
        );
      }, 2000);
      if (result) {
        //
        navigate("/auth/login");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div class="flex justify-center   mx-auto  p-4 mb-4 items-center ">
      
      <div class="flex  flex-col justify-center items-center mx-auto h-[420px] mb-5 lg:h-[400px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              class=""
              placeholder="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Confirm "
            name="Confirm password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              onChange={(e) => setconpassword(e.target.value)}
            />
          </Form.Item>

          

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={submitHandle}
            >
              Update
            </button>
          </Form.Item>
        </Form>
        
       
      </div>
    </div>
  );
}

export default ForgetPassword;
