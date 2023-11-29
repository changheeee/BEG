import { atom, selector } from "recoil";
import axios from "axios";

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
