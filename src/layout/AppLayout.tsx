import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Box, styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import LoadingSpinner from "../common/components/LoadingSpinner";

import LibraryHeader from "../common/components/LibraryHeader";
import Library from "../common/components/Library";
const Layout = styled("div")({
  display: "flex",
  height: "100vh",
  padding: "9px",
});

const Sidebar = styled("div")(({ theme }) => ({
  width: "330px",
  height: "100%",
  padding: "9px",
  display: "flex",
  flexDirection: "column",
  gap: "9px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  marginBottom: "8px",
  marginRight: "8px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "flex-start",
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecorationLine: "none",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&.active": {
    color: theme.palette.text.primary,
  },
}));

const AppLayout = () => {
  return (
    <Layout>
      <Sidebar>
        <ContentBox>
          <StyledNavLink to="/">
            <HomeIcon />
            <Typography variant="h2" fontWeight={700}>
              Home
            </Typography>
          </StyledNavLink>
          <StyledNavLink to="search">
            <SearchIcon />
            <Typography variant="h2" fontWeight={700}>
              Search
            </Typography>
          </StyledNavLink>
        </ContentBox>
        <ContentBox height={"100%"}>
          <LibraryHeader />
          <Library />
        </ContentBox>
      </Sidebar>

      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default AppLayout;
