import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import generalStyle from "@/styles/auth/Auth.module.scss";
import loginStyle from "@/styles/auth/Login.module.scss";
import Image from "next/image";

const Login: NextPageWithLayout = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      messageApi.success({content: JSON.stringify(values), duration:3})
    }, 1000);
    
  };
  return (
    <>
      {contextHolder}
      <title>Log In</title>
      <div className={generalStyle.circle} id={loginStyle.circle_1}></div>
      <div className={generalStyle.circle} id={loginStyle.circle_2}></div>

      <div className={generalStyle.header}>
        <h1>Welcome Back .!</h1>
        <h2>Skip the lag ?</h2>
      </div>
      <Form className={generalStyle.form} onFinish={onFinish} initialValues={{ remember: false }}>
        <h1>Login</h1>
        <span>Glad you’re back!</span>

        <Form.Item name="username" className={generalStyle.form_input}>
          <Input placeholder="Username" bordered size="large" maxLength={16} allowClear />
        </Form.Item>

        <Form.Item name="password" className={generalStyle.form_input}>
          <Input.Password
            allowClear
            placeholder="Password"
            bordered
            size="large"
            maxLength={16}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className={loginStyle.checkbox}>Remember me</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" className={loginStyle.btn_submit} loading={isLoading}>
          Log in
        </Button>

        <Form.Item>
          <Link href="forgot" className={loginStyle.forgot}>
            Forgot password ?
          </Link>
        </Form.Item>

        <div className={generalStyle.or}>
          <div className={generalStyle.line}></div>
          <div>Or</div>
          <div className={generalStyle.line}></div>
        </div>

        <div className={generalStyle.logo}>
          <Image src={"/images/google-icon.svg"} alt="" width={40} height={40} />
          <Image src={"/images/facebook-icon.svg"} alt="" width={50} height={50} />
        </div>

        <Form.Item className={generalStyle.to_sign_up}>
          Don’t have an account?
          <Link href="register"> Sign up</Link>
        </Form.Item>
      </Form>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
