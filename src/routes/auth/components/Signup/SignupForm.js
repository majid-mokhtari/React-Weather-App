import React from "react";
import { Form, Icon, Checkbox, Button, Input } from "antd";
import "./signup.css";

function SignupForm(props) {
  //const { authError } = props;

  function handleSignup(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.actions.loginRequest(values);
      }
    });
  }

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSignup} className="login-form">
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
        Sign up
      </Button>
      <div className="form-footer">
        <span>
          Already have a Do Good Points account?{" "}
          <span
            className="href"
            onClick={() => props.history.push("/auth/login")}
          >
            Log in
          </span>
        </span>
      </div>
    </Form>
  );
}

export default Form.create()(SignupForm);
