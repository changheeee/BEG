import styled from "styled-components";

export const SectionContent = styled.div`
  width: 100%;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const DetailContent = styled.div`
  width: 100%;
  padding: 100px 200px;

  @media (max-width: 1024px) {
    padding: 50px 100px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
