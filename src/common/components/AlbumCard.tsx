import { styled, Typography } from "@mui/material";
import theme from "../../../theme";
import PlayButton from "./PlayButton";
interface AlbumCardProp {
  image: string;
  title: string;
  artistName: string | undefined;
}

const AlbumCardContainer = styled("div")(({ theme }) => ({
  minWidth: "160px",
  width: "100%",
  height: "100%",
  padding: "12px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translate3d(0px, 0px, 0px)",
    transition: "opacity 0.3s ease-in-out",
  },
  "&:hover .overlay": {
    opacity: 1,
  },
}));

const AlbumImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "8px",
});
const EllipsisTypography = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
const Overlay = styled("div")({
  position: "absolute",
  bottom: "20px",
  right: "8px",
  opacity: 0,
  transform: "translate3d(0px, 0px, 0px)",
  transition: "opacity 0.3s ease-in-out",
});
const AlbumCard = ({ image, title, artistName }: AlbumCardProp) => {
  return (
    <AlbumCardContainer>
      <div style={{ position: "relative" }}>
        <AlbumImage src={image} />
        <Overlay className="overlay">
          <PlayButton />
        </Overlay>
      </div>

      <EllipsisTypography variant="h2">{title}</EllipsisTypography>
      <EllipsisTypography variant="body1" color={theme.palette.text.secondary}>
        {artistName}
      </EllipsisTypography>
    </AlbumCardContainer>
  );
};

export default AlbumCard;
