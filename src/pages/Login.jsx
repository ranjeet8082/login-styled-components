import { useState, useEffect } from "react";
import { PageLayout, Input, PasswordInput, Button, Spinner } from "components";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #898686;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 5px 0;
  }

  ${Button}:first-of-type {
    margin-top: 40px;
  }

  ${Input}:first-of-type {
    margin-top: 20px;
  }
`;
let timeout;

export default function Login() {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const handleInputChange = (event) => {
    setFormField({
      ...formField,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <span>Login if you have account</span>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <Input
              activeState={true}
              type="text"
              value={formField.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
            />
            <PasswordInput
              value={formField.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}

        <Button large variant="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">Or</div>
            <Button variant="secondary" type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
