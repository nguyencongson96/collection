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
import Head from "next/head";
import authAPI from "@/pages/api/auth";
import { useRouter } from "next/router";

const Login: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onFinish = async (values: any) => {
    try {
      setIsLoading(true)
      await authAPI.login(values);
      router.push("/")
    } catch (error) {
      message.error("Log in failed")
    }
  };

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <div className={generalStyle.circle_1} id={loginStyle.circle_1}></div>
      <div className={generalStyle.circle_2} id={loginStyle.circle_2}></div>

      <div className={generalStyle.header}>
        <h1>Welcome Back .!</h1>
        <h2>
          <Link href="/">Skip the lag ?</Link>
        </h2>
      </div>
      <Form className={generalStyle.form} onFinish={onFinish} initialValues={{ remember: false }}>
        <h1>Login</h1>
        <span>Glad you’re back!</span>

        <Form.Item name="username" className={generalStyle.form_input} rules={[{ required: true, message: "Username required" }]}>
          <Input placeholder="Username" bordered size="large" allowClear />
        </Form.Item>

        <Form.Item
          name="password"
          className={generalStyle.form_input}
          rules={[
            { required: true, message: "Username required" },
            { min: 8, message: "Password too short" },
            { max: 16, message: "Password too long" },
          ]}
        >
          <Input.Password
            allowClear
            placeholder="Password"
            bordered
            size="large"
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className={loginStyle.checkbox}>Remember me</Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className={generalStyle.btn_submit}
          loading={isLoading}
          style={{ background: "linear-gradient(90.57deg, #628eff 9.91%, #8740cd 53.29%, #580475 91.56%)" }}
        >
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
