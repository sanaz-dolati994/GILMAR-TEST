import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";

const navItems = [
  { title: "خانه", href: "#home" },
  { title: "سوئیت‌ها و اقامت", href: "#rooms" },
  { title: "درباره گیلمار", href: "#about" },
  { title: "راهنمای مهمان‌ها", href: "#guide" },
  { title: "مجله گیلمار", href: "#blog" },
  { title: "تماس با ما", href: "#contact" },
];

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { md: 40 },
        left: 0,
        zIndex: 5,
        width: "100%",
        pt: { xs: 2, md: 0 },
        px: { xs: 2, md: 0 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        dir="ltr"
        sx={{
          width: { xs: "100%", md: "calc(100% - 32px)" },
          maxWidth: { md: 1280 },
          minHeight: { xs: 104, md: 66 },
          p: { xs: "8px 12px", md: "6px 8px" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr auto", md: "154px minmax(0,1fr) 169px" },
          gridTemplateRows: { xs: "40px 32px", md: "1fr" },
          alignItems: "center",
          columnGap: { xs: 1, md: 2 },
          rowGap: { xs: 1, md: 0 },
          bgcolor: "#FCFDFD",
          border: "1px solid #EEF3F6",
          borderRadius: "9999px",
          boxShadow: "0 0 0 6px rgba(255,255,255,.72)",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          startIcon={<ArrowBackIcon />}
          sx={{
            gridColumn: { xs: 1, md: 1 },
            gridRow: 1,
            width: { xs: 132, md: 154 },
            minWidth: 0,
            height: { xs: 40, md: 52 },
            background: "linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)",
            color: "#fff",
            borderRadius: "9999px",
            fontSize: 14,
            fontWeight: 800,
            whiteSpace: "nowrap",
            textTransform: "none",
          }}
        >
          ورود یا ثبت‌نام
        </Button>

        <Box
          component="nav"
          aria-label="ناوبری اصلی"
          dir="rtl"
          sx={{
            gridColumn: { xs: "1 / -1", md: 2 },
            gridRow: { xs: 2, md: 1 },
            width: "100%",
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            overflowX: { xs: "auto", md: "visible" },
            scrollbarWidth: "none",
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.href}
              component="a"
              href={item.href}
              sx={{
                flexShrink: 0,
                color: "#1A1A1A",
                fontSize: { xs: 12, md: 14 },
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>
          ))}
        </Box>

        <Box
          component="a"
          href="#home"
          aria-label="گیلمار، خانه"
          sx={{
            gridColumn: { xs: 2, md: 3 },
            gridRow: 1,
            width: { xs: 112, md: 169 },
            height: { xs: 36, md: 53 },
            display: "block",
          }}
        >
          <Box
            component="img"
            src="/images/Frame%20888.png"
            alt="اقامتگاه بوم‌گردی گیلمار"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter:
                "brightness(0) saturate(100%) invert(56%) sepia(66%) saturate(587%) hue-rotate(137deg) brightness(93%) contrast(90%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
