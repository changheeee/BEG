import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Exhibition from "./components/template/Exhibition";
import Community from "./components/template/Community";
import Main from "./components/template/Main";
import ExDetail from "./components/template/ExDetail";

const Wrapper = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <Router>
      <Wrapper>
        <GlobalStyles />
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/community" element={<Community />} />
            <Route path="/ex_detail/:id" element={<ExDetail />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </Router>
  );
}
