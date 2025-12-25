import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material";

const PlayButtonArea = styled("button")({
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "100%",
  width: "50px",
  height: "50px",
  position: "absolute",
  right: 5,
  bottom: 5,
  opacity: 0,
  transform: "translate3d(0px, 0px, 0px)",
  transition: "opacity 0.3s ease-in-out",
});

const PlayButton = () => {
  return (
    <PlayButtonArea className="play-button">
      <PlayArrowIcon />
    </PlayButtonArea>
  );
};

export default PlayButton;
