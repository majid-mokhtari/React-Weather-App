import React from "react";
import { Form, Icon, Checkbox, Button, Input } from "antd";
import "./login.css";

function LoginForm(props) {
  //const { authError } = props;

  function handleLogin(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.actions.loginRequest(values);
      }
    });
  }

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleLogin} className="login-form">
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Please input your email!" }]
        })(<Input prefix={<Icon type="email" />} placeholder="Email" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            type="password"
            prefix={<Icon type="lock" />}
            placeholder="Password"
            autoComplete=""
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: false
        })(<Checkbox>Remember me</Checkbox>)}
      </Form.Item>
      <Button type="primary" htmlType="submit" className="login-btn">
        Log in
      </Button>
      <div className="form-footer">
        <span className="href">Forgot password</span>
        <span>
          Dont have an account?{" "}
          <span
            className="href"
            onClick={() => props.history.push("/auth/signup")}
          >
            Sign up
          </span>
        </span>
        <span className="href">Didn't receive confirmation instructions?</span>
      </div>
    </Form>
  );
}

export default Form.create()(LoginForm);
