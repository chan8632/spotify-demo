import { Typography } from "@mui/material";
import useGetNewRelease from "../../../hook/useGetNewRelease";

const NewReleases = () => {
  const { isLoading, data, error, isError } = useGetNewRelease();
  console.log("dd", data);
  return (
    <div>
      <Typography variant="h1" paddingTop={"8px"}>
        New Released Albumns
      </Typography>
    </div>
  );
};

export default NewReleases;
