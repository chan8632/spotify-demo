import type { externalUrls } from "./common";

export default interface artist {
  external_urls?: externalUrls;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}
