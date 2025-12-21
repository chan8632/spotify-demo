import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", // 다크 모드 기본 설정
    primary: {
      main: "#1ed760", // 스포티파이 시그니처 그린 (형광 초록색)
    },
    secondary: {
      main: "#ffffff", // 흰색 (강조 버튼 텍스트 등)
    },
    background: {
      default: "#000", // 완전 검정 (앱 전체 배경)
      paper: "#121212", // 아주 어두운 회색 (카드, 사이드바 등 구분된 배경)
    },
    text: {
      primary: "#fff", // 흰색 (제목 등 주요 텍스트)
      secondary: "#b3b3b3", // 흐린 회색 (가수 이름, 부가 정보 등)
    },
    action: {
      hover: "#282828", // 어두운 회색 (리스트에 마우스 올렸을 때)
      active: "#333", // 짙은 회색 (클릭하거나 활성화되었을 때)
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "24px",
    },
    h2: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "0.6875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px", // 둥근 알약 모양 버튼
          textTransform: "none", // 대문자 자동 변환 방지
        },
        containedSecondary: {
          backgroundColor: "#ffffff", // 흰색 배경
          color: "#000000", // 검은색 글씨
          "&:hover": {
            backgroundColor: "#e0e0e0", // 호버 시 살짝 어두운 흰색
          },
        },
        sizeLarge: {
          padding: "8px 32px",
          fontWeight: 700,
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
