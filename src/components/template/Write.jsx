import React, { useState } from "react";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent } from "../atoms/SectionContent";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContentTitle } from "../atoms/ContentTitle";
import PostButton from "../atoms/PostButton";

const SubmitButton = styled(PostButton)`
  background-color: #555;
  color: #fefefe;
  border: none;
`;

const CancelButton = styled(PostButton)`
  background-color: #fefefe;
  color: #555;
  border: 1px solid #555;
`;

const WriteForm = styled.form`
  width: 100%;
  .btn_container {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
    letter-spacing: -0.04rem;
    font-weight: 500;
  }

  input {
    box-sizing: border-box;
    width: 30%;
    height: 30px;
    padding-left: 5px;
    margin-bottom: 0.65rem;
    font-size: 0.875rem;
    border-radius: 5px;

    border: 1px solid #ddd;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
    padding: 1rem;
    resize: none;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    height: 50vh;
    border: 1px solid #ddd;
  }
`;

function Write() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ex_name: "",
    title: "",
    content: "",
  });

  const { ex_name, title, content } = form;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // axios.post("/write", form).then((response) => {
    //   if (response.data.success) {
    //     navigate("/");
    //   } else {
    //     alert("Failed to write");
    //   }
    // });
  };

  const onCancelClick = () => {
    navigate(-1); // Go back
  };

  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <ContentTitle>
          <h3>관람후기 작성</h3>
          {/* <strong>당신의 경험을 전달해주세요</strong> */}
        </ContentTitle>
        <WriteForm onSubmit={onSubmitHandler}>
          <StyledFieldset>
            <label htmlFor="ex_name">관람하신 공연・전시를 선택해주세요</label>
            <input
              type="text"
              value={ex_name}
              onChange={onChangeHandler}
              placeholder="공연・전시 검색"
              name="ex_name"
            />

            <input
              type="text"
              value={title}
              onChange={onChangeHandler}
              placeholder="제목을 입력하세요"
              name="title"
            />

            <textarea
              value={content}
              onChange={onChangeHandler}
              name="content"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </StyledFieldset>
          <div className="btn_container">
            <CancelButton onClick={onCancelClick}>취소</CancelButton>
            <SubmitButton type="submit">작성</SubmitButton>
          </div>
        </WriteForm>
      </SectionContent>
    </>
  );
}

export default Write;
