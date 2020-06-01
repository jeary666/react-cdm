// 登录页面
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {md5} from '../../utils/encryption'
import {login} from '../../api/login'
import './index.scss'
import { FormProvider } from "antd/lib/form/context";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login =() => {

  const onFinish = async (values) => {
    console.log(values);
    let {username,password} = values
    let params = {
      name: username,
      password: md5(password)
    }
    let res = await login(params)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <span></span>
    <Form
      {...layout}
      name="basic"
      className="login"
      size="large"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Login;
