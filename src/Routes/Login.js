import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import men from "../image/men.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import { Key_Access_Token, countUser, setItem } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { setcount, showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  async function submitHandle(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(Key_Access_Token, result.result.token);
      countU();
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Login",
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (e) {
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      // console.log(e);
    }
  }
  async function countU() {
    try {
      const result = await axiosClient.get("/auth/count");
      dispatch(setcount(result.result));
      
    } catch (e) {
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      // console.log(e);
    }
  }
  // useEffect(() => {
  //   countU();
  // }, []);
  return (
    <div class="grid  lg:grid-cols-2 mx-auto lg:mx-72 items-center ">
      <div class="w-[580px] hidden lg:block ">
        <img src={men} alt="" height="500px" width="400px" style={{}} />
      </div>
      <div class="flex justify-center items-center mx-auto h-[380px] mb-5 lg:h-[400px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-500 rounded-md text-lg p-1 px-2 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={submitHandle}
            >
              Login
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
