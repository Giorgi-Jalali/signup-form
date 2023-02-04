import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import errorIcon from "../assets/icon-error.svg";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export default function FormContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const lengthRegex = /^.{1,20}$/;

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const errorBorderStyle = "2px solid #FF7979";

  return (
    <Container>
      <FormTitle>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputStyle
            placeholder="First Name"
            style={{ border: errors.name && errorBorderStyle }}
            {...register("name", {
              required: "First Name cannot be empty",
              pattern: {
                value: lengthRegex,
                message: "No more than 20 characters",
              },
            })}
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          {errors.name && <ErrorIcon />}
        </InputContainer>

        <InputContainer>
          <InputStyle
            placeholder="Last Name"
            style={{ border: errors.surname && errorBorderStyle }}
            {...register("surname", {
              required: "Last Name cannot be empty",
              pattern: {
                value: lengthRegex,
                message: "No more than 20 characters",
              },
            })}
          />
          {errors.surname && (
            <ErrorMessage>{errors.surname.message}</ErrorMessage>
          )}
          {errors.surname && <ErrorIcon />}
        </InputContainer>

        <InputContainer>
          <EmailInput
            placeholder={
              errors.email?.message ? "email@example/com" : "Email Address"
            }
            error={errors.email?.message}
            style={{ border: errors.email && errorBorderStyle }}
            {...register("email", {
              required: "Email cannot be empty",
              pattern: {
                value: emailRegex,
                message: "Looks like this is not an email",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          {errors.email && <ErrorIcon />}
        </InputContainer>

        <InputContainer>
          <InputStyle
            type="password"
            placeholder="Password"
            style={{ border: errors.password && errorBorderStyle }}
            {...register("password", {
              required: "Password cannot be empty",
              pattern: {
                value: passwordRegex,
                message: "At least 6 characters, one number, one special char.",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          {errors.password && <ErrorIcon />}
        </InputContainer>

        <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
        <TermsText>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </TermsText>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  max-width: 540px;
`;

const FormTitle = styled.div`
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  padding: 17px 67px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  padding: 8px 24px;

  @media (min-width: 1440px) {
    padding: 24px 40px;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputStyle = styled.input`
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #3d3b48;
  padding: 15px 20px;
  margin-top: 16px;
  outline: none;

  &:focus {
    border: 1px solid #5e54a4;
  }

  &::placeholder {
    color: rgba(61, 59, 72, 0.75);
  }
`;

const EmailInput = styled(InputStyle)<{ error: string | undefined }>`
  &::placeholder {
    color: rgba(
      ${(props) => (props.error ? "255, 121, 121, 1" : "61, 59, 72, 0.75")}
    );
  }
`;

const ErrorMessage = styled.div`
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #ff7979;
  margin-top: 6px;
`;

const ErrorIcon = styled.div`
  position: absolute;
  top: 34px;
  right: 16px;
  background-image: url(${errorIcon});
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  width: 100%;
  background: #38cc8b;
  color: white;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  border: none;
  padding: 15px 0;
  margin-top: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: #77e2b3;
  }
`;

const TermsText = styled.p`
  width: 85%;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: #bab7d4;
  margin: 0 auto;
  span {
    font-weight: 700;
    color: rgba(255, 121, 121, 1);
  }
`;
