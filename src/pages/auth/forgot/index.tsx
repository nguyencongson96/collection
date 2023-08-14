import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import generalStyle from "@/styles/auth/Auth.module.scss";
import forgotStyle from "@/styles/auth/Forgot.module.scss";

const Forgot: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      messageApi.success({ content: JSON.stringify(values), duration: 3 });
    }, 1000);
    console.log(values);
  };
  return (
    <>
      {contextHolder}
      <title>Forgot</title>
      <div className={generalStyle.circle_1} id={forgotStyle.circle_1}></div>
      <div className={generalStyle.circle_2} id={forgotStyle.circle_2}></div>

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
          validateTrigger= "onSubmit"
        >
          <Input placeholder="example@gmail.com" bordered size="large" allowClear />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className={generalStyle.btn_submit}
          loading={isLoading}
          style={{ background: "linear-gradient(90.57deg, #e948c5 9.91%, #cd407b 53.29%, #75042d 91.56%)" }}
        >
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
