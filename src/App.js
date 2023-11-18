import styled from "styled-components";
import { GlobalStyles } from "./styles";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Exhibition from "./components/template/Exhibition";
const Wrapper = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <NavBar />
      <ContentWrapper>
        <Exhibition />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
