import axios from "axios";
import { SPOTIFY_BASE_URL } from "../config/config";
import type { GetNewReleaseResponse } from "../module/album";
export const getNewRelease = async (
  token: string | undefined
): Promise<GetNewReleaseResponse> => {
  try {
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-releases?limit=6`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch {
    throw new Error("newRelease 데이터를 받지 못함.");
  }
};
