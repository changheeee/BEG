import React from "react";
import { useRecoilValue } from "recoil";
import { PageContent } from "../atoms/SectionContent";
import { fetchUserInfoState } from "../../stores/recoilState";
import { styled } from "styled-components";
import SectionHeader from "../molecules/SectionHeader";

const MypageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .info_and_review {
    /* border: 1px solid blue; */
    display: flex;
    gap: 1.5rem;

    > .user_info,
    .review {
      padding: 1.5rem;
      width: 50%;
      border: 1px solid #ccc;
      border-radius: 1rem;
    }

    .user_info {
      ul {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.875rem;

        li {
          width: 100%;
          font-size: 0.875rem;
          strong {
            font-weight: 600;
            display: inline-block;
            width: 100px;
          }
        }
      }
      .button_container {
        display: flex;
        gap: 0.675rem;
        button {
          cursor: pointer;
          padding: 0.3rem 0.5rem;
          border: 1px solid #ccc;
          border-radius: 0.3rem;
        }
      }
    }
  }

  .bookmarked_list {
    padding: 1.5rem;
    width: 100%;
    min-height: 300px;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
`;

function Mypage() {
  const userInfo = useRecoilValue(fetchUserInfoState);

  const userInfoList = [
    { title: "회원명", value: userInfo.user_name },
    { title: "이메일주소", value: userInfo.email },
    { title: "성별", value: userInfo.gender },
    { title: "생년월일", value: userInfo.birth },
  ];

  return (
    <>
      <SectionHeader mypage />
      <PageContent>
        {/* 이름,이메일,닉네임,성별,생년월일 */}
        <MypageWrap>
          <div className="info_and_review">
            <div className="user_info">
              <h3>회원정보</h3>
              <ul>
                {userInfoList.map((info, index) => (
                  <li key={index}>
                    <strong>{info.title}</strong>
                    <span>{info.value}</span>
                  </li>
                ))}
              </ul>
              <div className="button_container">
                <button>회원정보 수정</button>
                <button>회원탈퇴</button>
              </div>
            </div>
            <div className="review">
              <h3>관람후기</h3>
              <div>작성후기 리스트 렌더링</div>
            </div>
          </div>
          <div className="bookmarked_list">
            <h3>관심목록</h3>
            <div>북마크 리스트 렌더링</div>
          </div>
        </MypageWrap>
      </PageContent>
    </>
  );
}

export default Mypage;
