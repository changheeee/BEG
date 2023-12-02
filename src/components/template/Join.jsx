import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SignUpWrap = styled.div`
  width: 400px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .formContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    h2 {
      font-size: 1.75rem;
      font-weight: bold;
    }

    form {
      width: 100%;

      label {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        font-weight: 600;
      }

      input {
        margin-top: 0.4rem;
      }

      .text_input {
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.5rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
        display: inline-block;
      }

      .gender {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
      }

      .check_input {
        border: 1px solid #ccc;
        margin: 0 0.5rem 0 0.3rem;
      }
      .passwordVisibilityToggle {
        cursor: pointer;
        margin-left: 10px;
        color: #aaa;
        text-decoration: underline;
        font-size: 0.875rem;
        text-underline-offset: 2px;

        &:hover {
          color: #555;
        }
      }

      .errorText {
        color: red;
        font-size: 0.8rem;
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;
        letter-spacing: -0.04rem;
      }

      .defaultButton {
        margin-top: 1rem;
        cursor: pointer;
        width: 100%;
        padding: 0.75rem;
        background-color: #ccc;
        color: #fefefe;
        font-size: 1rem;
        transition: all 0.25s;

        &:active {
          background-color: #555;
        }
      }

      .enabledButton {
        background-color: #333;
      }
    }
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [gender, setGender] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [isInputValid, setInputValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return email && !emailRegex.test(email)
      ? "올바른 이메일을 입력해주세요."
      : "";
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
    return password && !passwordRegex.test(password)
      ? "비밀번호는 최소 하나의 숫자, 소문자를 포함해야 하며 8자 이상이어야 합니다."
      : "";
  };

  const validatePasswordConfirm = () => {
    return passwordConfirm && password !== passwordConfirm
      ? "비밀번호가 일치하지 않습니다."
      : "";
  };

  useEffect(() => {
    setEmailError(validateEmail());
    setPasswordError(validatePassword());
    setPasswordConfirmError(validatePasswordConfirm());

    setInputValid(
      email &&
        password &&
        passwordConfirm &&
        selectedDate &&
        gender &&
        !emailError &&
        !passwordError &&
        !passwordConfirmError &&
        !birthdateError &&
        !genderError
    );
  }, [
    email,
    password,
    passwordConfirm,
    selectedDate,
    gender,
    emailError,
    passwordError,
    passwordConfirmError,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
  };

  return (
    <SignUpWrap>
      <div className="formContainer">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <label>아이디</label>
          <input
            required
            className="text_input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
          />
          {emailError && <div className="errorText">{emailError}</div>}

          <label>
            비밀번호
            <span
              className="passwordVisibilityToggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "숨기기" : "보기"}
            </span>
          </label>
          <input
            required
            className="text_input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          ></input>

          {passwordError && <div className="errorText">{passwordError}</div>}
          <label>비밀번호 확인</label>

          <input
            required
            className="text_input"
            type={showPassword ? "text" : "password"}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="비밀번호 확인"
          />
          {passwordConfirmError && (
            <div className="errorText">{passwordConfirmError}</div>
          )}
          <label>생년월일</label>
          <input
            required
            className="text_input"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            placeholder="생년월일"
          />
          <label>성별</label>
          <div className="gender">
            <label>
              남성
              <input
                required
                className="check_input"
                type="radio"
                name="gender"
                checked={gender === "male"}
                onChange={(e) => setGender("male")}
              />
            </label>
            <label>
              여성
              <input
                required
                className="check_input"
                type="radio"
                name="gender"
                checked={gender === "female"}
                onChange={(e) => setGender("female")}
              />
            </label>
          </div>
          <button
            type="submit"
            className={`defaultButton ${isInputValid ? "enabledButton" : ""}`}
          >
            가입하기
          </button>
        </form>
      </div>
    </SignUpWrap>
  );
};

export default SignUp;