import styled from "styled-components";

const PostButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  margin-left: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #ccc;
  font-size: 0.875rem;
  cursor: pointer;

  &:active {
    background-color: #ccc;
    border: none;
    color: #fefefe;
  }
`;

export default PostButton;
