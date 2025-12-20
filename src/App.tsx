import { createBrowserRouter } from "react-router";
import "./App.css";
import AppLayout from "./AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistDetailPage from "./pages/PlaylistDetailPage/PlaylistDetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchWithKeywordPage from "./pages/SearchWithKeywordPage/SearchWithKeywordPage";
/* 
1. 홈페이지(/) + 네비바
2. 검색페이지(/search)
3. 검색 결과 페이지(/search/:keyword)
4. 나의 플레이리스트(/playlist/:id)
5. 모바일 플레이리스트(/playlist)
*/
export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "search", Component: SearchPage },
      { path: "search/:keyword", Component: SearchWithKeywordPage },
      { path: "playlist/:id", Component: PlaylistDetailPage },
      // { path: "playlist/", Component: PlayListPage },
    ],
  },
]);
