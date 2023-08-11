import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeOutlined, GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import styles from "@/styles/Auth.module.scss";

const Login: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values: any) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    console.log(values);
  };
  return (
    <>
      <div className={styles.header}>
        <h1>Welcome Back .!</h1>
        <h2>Skip the lag ?</h2>
      </div>
      <Form className={styles.form} onFinish={onFinish} initialValues={{ remember: false }}>
        <h1>Login</h1>
        <desc>{`Glad you're back!`}</desc>

        <Form.Item name="username" className={styles.form_input}>
          <Input placeholder="Username" bordered size="large" maxLength={16} allowClear />
        </Form.Item>

        <Form.Item name="password" className={styles.form_input}>
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
          <Checkbox className={styles.checkbox}>Remember me</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" className={styles.btn_submit} loading={isLoading}>
          Log in
        </Button>

        <Form.Item>
          <Link href="/" className={styles.forgot}>
            Forgot password ?
          </Link>
        </Form.Item>

        <div className={styles.or}>
          <div className={styles.line}></div>
          <div>Or</div>
          <div className={styles.line}></div>
        </div>

        <Form.Item className={styles.logo}>
          <GoogleOutlined />
          <FacebookFilled />
        </Form.Item>

        <Form.Item className={styles.to_sign_up}>
          {`Don't have an account? `}
          <Link href="/">Sign up</Link>
        </Form.Item>
      </Form>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
