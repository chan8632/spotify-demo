import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material";

const PlayButtonArea = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: "none",
  borderRadius: "100%",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const PlayButton = () => {
  return (
    <PlayButtonArea className="play-button">
      <PlayArrowIcon />
    </PlayButtonArea>
  );
};

export default PlayButton;
