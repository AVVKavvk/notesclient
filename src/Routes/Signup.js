import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

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
      // console.log(result);
      if (result) {
        //
        navigate("/auth/login");
      }
    } catch (e) {
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      console.log(e);
    }
  }
  return (
    <div class="grid heig  items-center mx-auto">
      <div class="flex flex-col justify-center items-center mx-auto h-[400px] p-10  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
        <h1 class="text-xl  font-mullish p-2 m-3 text-red-500">
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
