import styled from "styled-components";

export const ContentTitle = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.875rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  strong {
    font-size: 1.35rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    strong {
      font-size: 1rem;
    }
  }
`;
