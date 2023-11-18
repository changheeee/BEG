import styled from "styled-components";

const PostButton = styled.button`
  width: 70px;
  height: 35px;
  margin-left: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #ccc;
  cursor: pointer;

  &:active {
    background-color: #ccc;
    border: none;
  }
`;

export default PostButton;
