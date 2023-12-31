import { atom, selector } from "recoil";
import axios from "axios";

export const testState = atom({
  key: "testState",
  default: [],
});

export const fetchTestState = selector({
  key: "fetchTestState",
  get: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/exhibitions`
    );

    const data = response.data;
    return data;
  },
});

// List에 대한 Atom
export const listState = atom({
  key: "listState",
  default: [],
});

// List에 대한 Selector
export const fetchListState = selector({
  key: "fetchListState",
  get: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/list`
    );

    const data = response.data;

    return data;
  },
});

// Posts에 대한 Atom
export const postsState = atom({
  key: "postsState",
  default: [],
});

// Posts에 대한 Selector
export const fetchPostsState = selector({
  key: "fetchPostsState",
  get: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/posts`
    );
    const data = response.data;

    return data;
  },
});

// 유저정보에 대한 Atom
export const userInfoState = atom({
  key: "userInfoState",
  default: [],
});

// 유저정보에 대한 Selector
export const fetchUserInfoState = selector({
  key: "fetchUserInfoState",
  get: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/user_info/rcg0529@gmail.com`
    );
    const data = response.data;

    return data;
  },
});

//유저로그인 처리에 대한 상태 추가, 로그인이 되었는지 안되었는지.
