import { createBrowserRouter } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(
  () => import("./pages/SearchWithKeywordPage/SearchWithKeywordPage")
);
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistDetailPage/PlaylistDetailPage")
);
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
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "search/:keyword", element: <SearchWithKeywordPage /> },
      { path: "playlist/:id", element: <PlaylistDetailPage /> },
      // { path: "playlist/", element: <PlayListPage/> },
    ],
  },
]);
