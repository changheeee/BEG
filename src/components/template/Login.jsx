import React, { useState, useEffect, useNavigate, useDispatch } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent, DetailContent } from "../atoms/SectionContent";
import MOCK_DATA from "../../MOCK_DATA.json";
import RecommendedButton from "../atoms/RecommendButton";
import PostButton from "../atoms/PostButton";

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
      padding: 0.5rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
      /* border-radius: 0.35rem; */
    }

    .defaultButton {
      cursor: pointer;
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
      background-color: #333;
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
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [isInputValid, setInputValid] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(Email);
    // console.log(Password);
  };

  useEffect(() => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

    if (Email && !emailRegex.test(Email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }

    if (Password && !passwordRegex.test(Password)) {
      setPasswordError(
        "비밀번호는 최소 하나의 숫자, 소문자를 포함해야 하며 8자 이상이어야 합니다."
      );
    } else {
      setPasswordError("");
    }

    if (emailRegex.test(Email) && passwordRegex.test(Password)) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [Email, Password]);

  return (
    <SignWrap>
      <div className="formContainer">
        {/* <img src="/images/logo_nav.svg" alt="" /> */}
        <h2>로그인</h2>
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            value={Email}
            onChange={onEmailHandler}
            placeholder="이메일"
          />
          {EmailError && <div className="errorText">{EmailError}</div>}
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="비밀번호"
          />
          {PasswordError && <div className="errorText">{PasswordError}</div>}
          <button
            type="submit"
            className={`defaultButton ${isInputValid ? "enabledButton" : ""}`}
          >
            로그인
          </button>
        </form>
        <div className="toJoin">
          <span>아직 회원이 아니신가요?</span>
          <a href="/join">회원가입</a>
        </div>
      </div>
    </SignWrap>
  );
}
