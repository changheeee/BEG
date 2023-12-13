import { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./styles";

import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Exhibition from "./components/template/Exhibition";
import Community from "./components/template/Community";
import Main from "./components/template/Main";
import ExDetail from "./components/template/ExDetail";
import Write from "./components/template/Write";
import ReviewDetail from "./components/template/ReviewDetail";
import Login from "./components/template/Login";
import Join from "./components/template/Join";
import Mypage from "./components/template/Mypage";
import LoadingPage from "./components/template/LoadingPage";
import Location from "./components/template/Location";
import LocationDetail from "./components/template/LocationDetail";
import SearchResult from "./components/template/SearchResult";

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
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Wrapper>
            <GlobalStyles />
            <NavBar />
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/exhibition" element={<Exhibition />} />
                <Route path="/ex_detail/:id" element={<ExDetail />} />
                <Route path="/community" element={<Community />} />
                <Route path="/review_detail/:id" element={<ReviewDetail />} />
                <Route path="/write" element={<Write />} />
                <Route path="/location" element={<Location />} />
                <Route path="/lo_detail/:id" element={<LocationDetail />} />
                <Route path="/search_result/:id" element={<SearchResult />} />
              </Routes>
            </ContentWrapper>
            <Footer />
          </Wrapper>
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}
