import { Button, styled, Typography } from "@mui/material";
const EmptyPlaylistCard = styled("div")({
  backgroundColor: "#1e1e1e",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "8px",
});
const CreatePlayListButton = styled(Button)({
  marginTop: "20px",
});

const EmptyPlaylist = () => {
  const createPlaylist = () => {};
  return (
    <EmptyPlaylistCard>
      <Typography
        variant="h2"
        fontWeight={700}
      >{`Create your first playlist`}</Typography>
      <Typography gutterBottom={true}>It's easy, we'll help you</Typography>
      <CreatePlayListButton
        variant="contained"
        color="secondary"
        size="large"
        onClick={createPlaylist}
      >
        Create playlist
      </CreatePlayListButton>
    </EmptyPlaylistCard>
  );
};

export default EmptyPlaylist;
