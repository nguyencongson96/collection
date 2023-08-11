import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import generalStyle from "@/styles/auth/Auth.module.scss";
import registerStyle from "@/styles/auth/Register.module.scss";

const Login: NextPageWithLayout = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [pwd, setPwd] = useState("");
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        messageApi.success({ content: JSON.stringify(values), duration: 3 });
      }, 1000);
      await form.validateFields();
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <>
      {contextHolder}
      <title>Register</title>
      <div className={generalStyle.circle} id={registerStyle.circle_1}></div>
      <div className={generalStyle.circle} id={registerStyle.circle_2}></div>

      <div className={generalStyle.header}>
        <h1>Roll the Carpet .!</h1>
        <h2>Skip the lag ?</h2>
      </div>

      <Form form={form} className={generalStyle.form} onFinish={onFinish}>
        <h1>Sign Up</h1>
        <span>Just some details to get you in.!</span>

        <Form.Item
          name="username"
          className={generalStyle.form_input}
          rules={[{ required: true, message: "Username required" }]}
        >
          <Input placeholder="Username" bordered size="large" maxLength={16} allowClear />
        </Form.Item>

        <Form.Item
          name="email"
          className={generalStyle.form_input}
          rules={[{ required: true, type: "email", message: "Invalid Email" }]}
        >
          <Input placeholder="Email" bordered size="large" allowClear />
        </Form.Item>

        <Form.Item
          name="password"
          className={generalStyle.form_input}
          rules={[{ required: true, type: "string", message: "Invalid Password" }]}
        >
          <Input.Password
            allowClear
            placeholder="Password"
            bordered
            size="large"
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            onChange={(e: any) => {
              setPwd(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          className={generalStyle.form_input}
          rules={[
            {
              validator: (rule, value, callback) => {
                value !== pwd && callback("Password not matched");
              },
            },
          ]}
        >
          <Input.Password
            allowClear
            placeholder="Confirm Password"
            bordered
            size="large"
            maxLength={16}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className={registerStyle.btn_submit} loading={isLoading}>
          Sign Up
        </Button>

        <Form.Item className={registerStyle.to_sign_up}>
          {`Already Registered? `}
          <Link href="login">Log In</Link>
        </Form.Item>
      </Form>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
