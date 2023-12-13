# BusanExhibition Guide(BEG)

## 임시배포 링크
https://busanexhibitionguide.netlify.app/

## 프로젝트 소개
<br/><br/>
<img src="https://github.com/changheeee/BEG/assets/117338992/d3b18dcd-4f45-454a-acbc-5b305aa7aa0e" style="width:50%"/>
<br/>
<br/>
<br/>
- BusanExhibitionGuide는 부산에서 진행하는 공연・전시를 안내해주는 서비스 입니다.<br/><br/>
- 공연・전시 관람후기 작성을 통해 내가 관람한 공연,전시에 대한 경험을 공유하고, 이용자 간의 커뮤니케이션을 활성화 합니다.<br/><br/>
- 공연・전시 데이터를 바탕으로 현재 진행중인 공연・전시와 앞으로 진행 될 공연・전시를 안내하고 해당 공연・전시장 위치정보를 연계하여 <br/>
&nbsp;&nbsp;  주변 관광정보와 편의・부대시설 정보를 제공합니다.<br/><br/><br/><br/>

## 주요 기능

<table>
      <thead></thead>
      <tbody>
        <tr>
          <th align="center">회원가입</th>
          <th align="center">로그인</th>
        </tr>
          <tr>
          <td align="center"></td>
          <td align="center"></td>
        </tr>
        <tr>
          <th align="center">Suspense를 통한 로딩화면 구현</th>
          <th align="center">반응형 디자인</th>
        </tr>
        <tr>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/71e1d2ba-c500-407a-b0bc-bfe4b7af6f8e"/>
          </td>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/ebb4b50d-407f-40d8-80d1-80fecde4db9c"/>
          </td>
        </tr>
        <tr>
          <th align="center">공연・전시 랭킹</th>
          <th align="center">캘린더 UI</th>
        </tr>
         <tr>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/496ecce1-9015-46b6-bd4f-f902786f7df9"/>
          </td>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/2a8f37ae-ab17-4d4c-8101-a4819e06cb4c"/>
          </td>
        </tr>
        <tr>
          <th align="center">현재 진행중인 공연전시/ 향후 진행되는 전시 안내</th>
          <th align="center">공연・전시 목록 필터링</th>
        </tr>
         <tr>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/3bfc4ec6-2266-4c58-9f48-3adecd081ba4"/>
          </td>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/343d678a-ded8-4d7c-ad4b-a9b2e930d0ab"/>
          </td>
        </tr>
        <tr>
          <th>페이지네이션</th>
          <th>공연・전시 검색</th>
        </tr>
        <tr>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/ec369ef2-a0a8-45ee-ad15-28b05f652c9a"/>
          </td>
          <td align="center">
            <img src="https://github.com/changheeee/BEG/assets/117338992/be87f167-98f3-49a9-9909-baa4988b7a68"/>    
          </td>
        </tr>
      </tbody>
    </table>
    
## 역할

### 김창희 Frontend dev

- 디자인
    - [Figma](https://www.figma.com/file/MRvSYpuj55VFUyRK7jvb4A/Busan-Exhibition?type=design&node-id=0%3A1&mode=design&t=pfx7iJC2o9s88sKO-1)
- 반응형 대응
- 공연・전시 리스트 및 필터링 구현
- Recoil 전역상태관리
    - [블로그 링크](https://velog.io/@rcg0529/React-Recoil-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Axios-Postman%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-API-%ED%86%B5%EC%8B%A0-%EB%B0%8F-MockServer-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0)
- `페이지 네이션` 기능: react-paginate를 통한 페이지네이션 기능구현
    - [블로그 링크](https://velog.io/@rcg0529/React-react-paginate%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- Suspense 비동기처리
    - [블로그 링크](https://velog.io/@rcg0529/Error-Minified-React-error-426)
