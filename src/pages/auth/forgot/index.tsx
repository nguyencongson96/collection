import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import generalStyle from "@/styles/auth/Auth.module.scss";
import forgotStyle from "@/styles/auth/Forgot.module.scss";
import Image from "next/image";

const Forgot: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values: any) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    console.log(values);
  };
  return (
    <>
      <title>Forgot</title>
      <div className={generalStyle.circle} id={forgotStyle.circle_1}></div>
      <div className={generalStyle.circle} id={forgotStyle.circle_2}></div>

      <div className={generalStyle.header}>
        <h1>No Worries.!!</h1>
        <h2>Take me back.!</h2>
      </div>
      <Form className={generalStyle.form} onFinish={onFinish}>
        <h1>Forgot Password ?</h1>
        <span>Please enter you’re email</span>

        <Form.Item
          name="email"
          className={generalStyle.form_input}
          rules={[{ required: true, type: "email", message: "Invalid Email" }]}
        >
          <Input placeholder="example@mail.com" bordered size="large" maxLength={16} allowClear />
        </Form.Item>

        <Button type="primary" htmlType="submit" className={forgotStyle.btn_submit} loading={isLoading}>
          Reset Password
        </Button>

        <Form.Item className={generalStyle.to_sign_up}>
          Don’t have an account?
          <Link href="register"> Sign up</Link>
        </Form.Item>
      </Form>
    </>
  );
};

Forgot.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Forgot;
