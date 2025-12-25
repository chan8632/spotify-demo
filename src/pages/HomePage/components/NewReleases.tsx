import { Grid, Typography } from "@mui/material";
import useGetNewRelease from "../../../hook/useGetNewRelease";
import ErrorMessage from "../../../common/components/ErrorMessage";
import AlbumCard from "../../../common/components/AlbumCard";

const NewReleases = () => {
  const { data, error, isError } = useGetNewRelease();
  console.log("ddd", data);
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      <Typography variant="h1" paddingTop={"8px"} paddingBottom={"8px"}>
        New Released Albumns
      </Typography>
      {data && data.albums.items.length > 0 ? (
        <Grid container spacing={3}>
          {data?.albums.items.map((album) => (
            <Grid key={album.id} size={{ xs: 6, sm: 4, md: 2 }}>
              <AlbumCard
                image={album.images[0].url}
                title={album.name}
                artistName={album.artists[0].name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h2">No data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
