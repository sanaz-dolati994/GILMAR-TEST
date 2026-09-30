import { Box, Typography } from "@mui/material";

export default function ReviewCard() {
  return (
    <Box
      sx={{
        position: "absolute",

        top: { xs: 260, md: "247px" },
        left: { xs: 16, md: "50%" },
        transform: { md: "translateX(-50%)" },

        width: { xs: "calc(100% - 32px)", md: "500px" },
        height: { xs: "auto", md: "264px" },
        minHeight: { xs: 264, md: 0 },

        boxSizing: "border-box",

        bgcolor: "#FCFCFD",

        border: "1px solid #EEF3F6",
        borderRadius: "16px",

        boxShadow: "0px 24px 48px rgba(0, 46, 37, 0.12)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        textAlign: "center",

        px: { xs: 2, md: "24px" },
        pt: "20px",

        zIndex: 4,
      }}
    >
      {/* Quote */}
      <Typography
        sx={{
          m: 0,

          fontFamily: "Arial, sans-serif",
          fontSize: "38px",
          fontWeight: 700,
          lineHeight: "30px",

          color: "#12C7B5",
        }}
      >
        “
      </Typography>

      {/* Text */}
      <Typography
        sx={{
          width: "100%",

          mt: "12px",

          fontFamily: "Abar Mid FaNum",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "30px",

          color: "#4C4C4D",

          textAlign: "center",
        }}
      >
        اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام،
        طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی از هیاهوی شهر دور باشم
        و واقعاً از اینجا بودن لذت ببرم.
      </Typography>

      {/* Name */}
      <Typography
        sx={{
          mt: "12px",

          fontFamily: "Abar Mid FaNum",
          fontSize: "14px",
          fontWeight: 800,
          lineHeight: "24px",

          color: "#1A1A1A",
        }}
      >
        احسان عیدی پور
      </Typography>

      {/* Role */}
      <Typography
        sx={{
          fontFamily: "Abar Mid FaNum",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "20px",

          color: "#4C4C4D",
        }}
      >
        مهمان
      </Typography>
    </Box>
  );
}
