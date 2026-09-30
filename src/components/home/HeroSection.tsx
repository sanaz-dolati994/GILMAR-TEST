import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-labelledby="home-title"
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { md: 158 },
        left: 0,
        right: 0,
        zIndex: 2,
        width: { xs: "calc(100% - 32px)", md: 732 },
        maxWidth: 732,
        mx: "auto",
        mt: { xs: 4, md: 0 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "44px",
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Typography
          id="home-title"
          component="h1"
          sx={{
            width: "100%",
            m: 0,
            color: "#1A1A1A",
            fontSize: { xs: 28, md: 40 },
            fontWeight: 800,
            lineHeight: { xs: 1.45, md: 1.3 },
            whiteSpace: { md: "nowrap" },
          }}
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </Typography>
        <Typography
          component="p"
          sx={{
            maxWidth: "100%",
            m: 0,
            color: "#4C4C4D",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "32px",
          }}
        >
          اقامتگاه بومگردی گیلمار بزرگ‌ترین مجموعه اکولوژیک شمال کشور، دارای امکانات رفاهی و تفریحی در فضایی منحصربه‌فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان است.
        </Typography>
      </Box>

      <Button
        variant="contained"
        disableElevation
        startIcon={<ArrowBackIcon />}
        sx={{
          width: 191,
          minWidth: 191,
          height: 52,
          background: "linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)",
          borderRadius: "9999px",
          color: "#fff",
          fontSize: 16,
          fontWeight: 800,
          textTransform: "none",
        }}
      >
        مهمان گیلمار شو
      </Button>
    </Box>
  );
}
