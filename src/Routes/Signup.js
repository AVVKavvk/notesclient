import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  async function handleSignup(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/auth/signup", {
        email,
        password,
        name,
        number,
      });
      // setItem(Key_Access_Token,result.result.token)
      console.log(result);
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
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      // dispatch(
      //   showToast({
      //     type: TOAST_ERROR,
      //     message: `${e}`,
      //   })
      // );
    }
  }
  return (
    <div class="grid items-center mx-auto ">
      <div class="flex flex-col  p-15 mx-3 mt-10 max-h-[700px] justify-center items-center sm:mx-auto sm:h-[450px] sm:p-10  border-2 sm:max-w-[600px] mb-5 rounded-lg sm:mt-2  border-green-400">
        <h1 class="text-xl hidden sm:block  p-2 m-3 text-red-500">
          SignUp for accessing website
        </h1>
        <Form
          onSubmit={handleSignup}
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
            label="Phone Number"
            name="phNo"
            rules={[
              {
                required: true,
                message: "Please input your Number!",
              },
            ]}
          >
            <Input.Password
              placeholder="810709...."
              onChange={(e) => setnumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input.Password
              placeholder="vipin"
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-blue-500 w-[100px] text-white rounded-md text-lg hover:bg-blue-600 transition-all duration-200 p-1 "
              onClick={handleSignup}
            >
              Sign-Up
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
