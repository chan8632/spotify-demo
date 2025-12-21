import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box, Button, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Head = styled("div")({
  display: "flex",
  padding: "8px",
  justifyContent: "space-between",
  alignItems: "center",
});
const handleCreatePlaylist = () => {};
const LibraryHeader = () => {
  return (
    <Head>
      <BookmarkIcon sx={{ marginRight: "20px" }} />
      <Typography variant="h2" fontWeight={700}>
        Your Libarary
      </Typography>

      <Button onClick={handleCreatePlaylist}>
        <AddIcon />
      </Button>
    </Head>
  );
};

export default LibraryHeader;
