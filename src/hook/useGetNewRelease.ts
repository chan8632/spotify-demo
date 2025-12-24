import { useQuery } from "@tanstack/react-query";
import { getNewRelease } from "../apis/albumApi";
import { useClientCredentialToken } from "./useClientCredentialToken";

export default function useGetNewRelease() {
  const clientCredentialsToken = useClientCredentialToken();
  console.log("ttt", clientCredentialsToken);
  return useQuery({
    queryKey: ["newRelease"],
    queryFn: () => {
      if (!clientCredentialsToken) {
        throw new Error("ClientCredentialToken fail");
      }
      const data = getNewRelease(clientCredentialsToken);
      return data;
    },
  });
}
