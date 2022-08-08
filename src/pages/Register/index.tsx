import Button from "components/Button";
import Input from "components/Input";
import { HeadContainer } from "pages/Home/styles";
import {
  Form,
  Header,
  LoginContainer,
  MiniLink,
  MiniLinkContainer,
} from "pages/Login/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  interface IFormProps {
    email: string;
    nickname: string;
    password: string;
  }

  const initialState = {
    email: "",
    nickname: "",
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
        <Header>Register</Header>
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
          type='text'
          name='nickname'
          placeholder='Nickname'
          onChange={handleChange}
        />
        <Input
          value={password}
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <Button>Register</Button>
      </Form>
      <MiniLinkContainer>
        <MiniLink to=''>Forgot password?</MiniLink>
        <MiniLink to='/login'>Already have an account?</MiniLink>
      </MiniLinkContainer>
    </LoginContainer>
  );
};
export default Register;
