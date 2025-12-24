import axios from "axios";
import { clientId, clientSecret } from "../config/authConfig";
import type { IUseGetClientCredentialToken } from "../module/auth";
const encodingBase64 = (data: string): string => {
  if (typeof window === "undefined") {
    // 브라우저
    return btoa(data);
  } else {
    // node.js
    return Buffer.from(data).toString("base64");
  }
};

const getClientCredentialToken =
  async (): Promise<IUseGetClientCredentialToken> => {
    try {
      // 왜 URLSearchParams가 나오냐?
      /*
    입력 (우리가 쓴 코드):
    {
      grant_type: "client_credentials"
    }
    변환 결과 (API가 받는 데이터):
    grant_type=client_credentials
    */
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      /* axios.post(url, data, config)
      POST는 데이터를 보내는 것이 목적이라 data 자리가 필수적으로 중간에 끼어듭니다. */
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        // 3번째 인자는 '설정 객체', 헤더 뿐 만 아니라 여러 옵션을 넣어줄 수 있는데
        // 헤더라는 명찰을 달아주기 위해 쓰게 된 것.
        {
          headers: {
            Authorization: `Basic ${encodingBase64(
              `${clientId}:${clientSecret}`
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch {
      throw new Error("액세스 토큰 받기 실패");
    }
  };

export default getClientCredentialToken;
