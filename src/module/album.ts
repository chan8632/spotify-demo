import type artist from "./artist";
import type { externalUrls, image, restrictions } from "./common";

export interface GetNewReleaseResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SimplifiedAlbum[];
}
interface SimplifiedAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: externalUrls;
  href: string;
  id: string;
  image: image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: restrictions;
  type: string;
  uri: string;
  artist: artist[];
}
