import React, { useState } from "react";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent } from "../atoms/SectionContent";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContentTitle } from "../atoms/ContentTitle";
import PostButton from "../atoms/PostButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// 제출 버튼 스타일링
const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #555;
  color: #fefefe;
  font-size: 0.875rem;
  cursor: pointer;

  &:active {
    background-color: #ccc;
    border: none;
    color: #fefefe;
  }
`;

// 취소 버튼 스타일링
const CancelButton = styled(PostButton)`
  background-color: #fefefe;
  color: #555;
  border: 1px solid #555;
`;

// 글쓰기 폼 스타일링
const WriteForm = styled.form`
  width: 100%;
  .btn_container {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
  }
`;

// 필드셋 스타일링
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

  .ql-editor {
    width: 100%;
    padding: 1rem;
    height: 50vh;

    //에디터 기본 텍스트 사이즈
    p {
      font-size: 1rem;
    }
  }
`;

function Write() {
  // 라우터 훅 사용
  const navigate = useNavigate();

  // 상태 초기화
  const [form, setForm] = useState({
    ex_name: "",
    title: "",
    content: "",
  });

  // 폼 데이터 분리
  const { ex_name, title, content } = form;

  // 입력 핸들러
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 제출 핸들러
  const onSubmitHandler = (event) => {
    // 일단 주석 처리
    // event.preventDefault();
    // axios.post("/write", form).then((response) => {
    //   if (response.data.success) {
    //     navigate("/community");
    //   } else {
    //     alert("글 작성에 실패했습니다");
    //   }
    // });
  };

  // 취소 버튼 클릭 핸들러
  const onCancelClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 테스트용 함수
  const Test = () => {
    console.log(form);
  };

  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <ContentTitle>
          <h3>관람후기 작성</h3>
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
              required
            />
            <input
              type="text"
              value={title}
              onChange={onChangeHandler}
              placeholder="제목을 입력하세요"
              name="title"
              required
            />

            {/* ReactQuill 에디터 */}
            <ReactQuill
              theme="snow"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, false] }],
                  ["bold", "underline"],
                  ["image"],
                ],
              }}
              value={content}
              onChange={(value) => setForm({ ...form, content: value })}
            />
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
