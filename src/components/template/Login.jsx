import React, { useState, useEffect, useNavigate, useDispatch } from "react";
import { styled } from "styled-components";
import axios from "axios";

// import { SectionContent, DetailContent } from "../atoms/SectionContent";
import { Link } from "react-router-dom";

const SignWrap = styled.div`
  width: 400px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 420px) {
    width: 100%;
    padding: 50px 20px;
  }

  .formContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    h2 {
      font-size: 1.75rem;
      font-weight: bold;
    }
    form {
      width: 100%;
    }

    input {
      width: 100%;
      border: 1px solid #ccc;
      padding: 0.675rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      border-radius: 0.3rem;
    }

    .defaultButton {
      width: 100%;
      padding: 0.75rem;
      background-color: #ccc;
      color: #fefefe;
      font-size: 1rem;
      transition: all 0.25s;
      /* border-radius: 0.35rem; */

      &:active {
        background-color: #555;
      }
    }

    .enabledButton {
      cursor: pointer;

      background-color: #333;
      border-radius: 0.3rem;
    }

    .toJoin {
      span {
        margin-right: 0.5rem;
      }
      a {
        color: #2469ff;
        letter-spacing: -0.04rem;
      }
    }
  }

  .errorText {
    color: red;
    font-size: 0.8rem;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: -0.04rem;
  }
`;

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [EmailError, setEmailError] = useState("");
  // const [PasswordError, setPasswordError] = useState("");
  const [isInputValid, setInputValid] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const body = {
      email: Email,
      password: Password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/login`,
        body
      );
      console.log("Login response: ", response);
    } catch (error) {
      console.error("Login error: ", error);
      // console.log("Email: " + Email + "Password: " + Password);
    }
  };

  useEffect(() => {
    if (Email && Password) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  });

  // useEffect(() => {
  //   const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

  //   if (Email && !emailRegex.test(Email)) {
  //     setEmailError("올바른 이메일을 입력해주세요.");
  //   } else {
  //     setEmailError("");
  //   }

  //   if (Password && !passwordRegex.test(Password)) {
  //     setPasswordError(
  //       "비밀번호는 최소 하나의 숫자, 소문자를 포함해야 하며 8자 이상이어야 합니다."
  //     );
  //   } else {
  //     setPasswordError("");
  //   }

  //   if (emailRegex.test(Email) && passwordRegex.test(Password)) {
  //     setInputValid(true);
  //   } else {
  //     setInputValid(false);
  //   }
  // }, [Email, Password]);

  return (
    <SignWrap>
      <div className="formContainer">
        {/* <img src="/images/logo_nav.svg" alt="" /> */}
        <h2>로그인</h2>
        <form onSubmit={onSubmitHandler}>
          <input
            required
            type="email"
            value={Email}
            onChange={onEmailHandler}
            placeholder="이메일"
          />
          {/* {EmailError && <div className="errorText">{EmailError}</div>} */}
          <input
            required
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="비밀번호"
          />
          {/* {PasswordError && <div className="errorText">{PasswordError}</div>} */}
          <button
            type="submit"
            className={`defaultButton ${isInputValid ? "enabledButton" : ""}`}
          >
            로그인
          </button>
        </form>
        <div className="toJoin">
          <span>아직 회원이 아니신가요?</span>
          <Link to="/join">회원가입</Link>
        </div>
      </div>
    </SignWrap>
  );
}
