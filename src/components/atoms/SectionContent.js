import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  padding: 0 100px 100px 100px;

  @media (max-width: 768px) {
    padding: 0 20px 50px 20px;
  }
`;

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

export const PageContent = styled.div`
  width: 100%;
  padding: 50px 100px;

  @media (max-width: 768px) {
    padding: 35px 20px;
  }
`;
