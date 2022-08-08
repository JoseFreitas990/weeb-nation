import Button from "components/Button";
import Input from "components/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  HeadContainer,
  Header,
  LoginContainer,
  MiniLinkContainer,
  MiniLink,
} from "./styles";

const Login = () => {
  interface IFormProps {
    email: string;
    password: string;
  }

  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormProps>(initialState);

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      navigate("dashboard");
    } else {
      console.log("Incredenciais Invalidas");
    }
  };

  return (
    <LoginContainer>
      <HeadContainer>
        <Header>Login</Header>
      </HeadContainer>
      <Form onSubmit={handleLogin}>
        <Input
          value={email}
          //type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <Input
          value={password}
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <Button>Login</Button>
      </Form>
      <MiniLinkContainer>
        <MiniLink to=''>Forgot password?</MiniLink>
        <MiniLink to='/signup'>Sign Up</MiniLink>
      </MiniLinkContainer>
    </LoginContainer>
  );
};

export default Login;
