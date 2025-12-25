import { Box, styled, Typography } from "@mui/material";
import theme from "../../../theme";
import PlayButton from "./PlayButton";
interface AlbumCardProp {
  image: string;
  title: string;
  artistName: string | undefined;
}

const AlbumCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  padding: "8px 0",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderRadius: "8px",
    padding: "8px 0",
    "& .play-button": {
      backgroundColor: "#1ed760",
      opacity: 1,
    },
  },
}));

const AlbumCard = ({ image, title, artistName }: AlbumCardProp) => {
  return (
    <AlbumCardContainer>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            width: "144px",
            height: "144px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            marginBottom: "15px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "50px",
            }}
          >
            <PlayButton />
          </Box>
        </Box>
      </Box>

      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        {artistName}
      </Typography>
    </AlbumCardContainer>
  );
};

export default AlbumCard;
