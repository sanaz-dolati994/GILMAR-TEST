import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";

import PackageImage from "./PackageImage";
import PackageFeatureCard from "./PackageFeatureCard";

const features = [
  {
    alt: "تور جنگل نوردی",
    label: "تور جنگل نوردی",
    src: "/images/icon-binoculars%20(1)%201.png",
  },
  {
    alt: "قایق سواری",
    label: "قایق سواری",
    src: "/images/boat%201.png",
  },
  {
    alt: "صبحانه",
    label: "صبحانه",
    src: undefined,
  },
  {
    alt: "شب اقامت",
    label: "شب اقامت",
    src: "/images/Image.png",
  },
];

export default function PackagesSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "815px",
        bgcolor: "#F5F8FA",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          minHeight: "815px",
          mx: "auto",

          display: "grid",

          // خیلی مهم:
          // تصویر باید چپ باشد و محتوا راست
          direction: "ltr",

          gridTemplateColumns: {
            xs: "1fr",
            lg: "620px 620px",
          },
          columnGap: { xs: 0, lg: "40px" },

          alignItems: "start",
          boxSizing: "border-box",
        }}
      >
        {/* =========================================
            LEFT — IMAGE
        ========================================= */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "620px",
            height: {
              xs: "400px",
              lg: "815px",
            },
          }}
        >
          <PackageImage />
        </Box>

        {/* =========================================
            RIGHT — CONTENT
        ========================================= */}
        <Box
          dir="rtl"
          sx={{
            width: "100%",
            maxWidth: "620px",
            minHeight: "815px",

            display: "flex",
            flexDirection: "column",

            pt: {
              xs: "40px",
              lg: "152px",
            },

            px: {
              xs: "20px",
              lg: 0,
            },

            boxSizing: "border-box",
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* ICON */}
            <Box
              sx={{
                width: "84px",
                height: "52px",
                ml: "auto",
                mb: "24px",

                bgcolor: "#ECFCEF",
                border: "1px solid #B8F3C4",
                borderRadius: "26px",
              }}
            />

            {/* TITLE */}
            <Typography
              component="h2"
              sx={{
                width: "100%",
                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: "58px",
                letterSpacing: "-1.4px",

                color: "#1A1A1A",
                textAlign: "right",

                whiteSpace: {
                  xs: "normal",
                  lg: "nowrap",
                },
              }}
            >
              پکیج‌های ویژه اقامت در گیلمار
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                width: "100%",
                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "32px",

                color: "#4C4C4D",
                textAlign: "right",
              }}
            >
              پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
              هیجان‌انگیز در دل طبیعت است.
            </Typography>
          </Box>

          {/* PACKAGE DESCRIPTION */}
          <Box
            sx={{
              width: "100%",
              mt: "24px",
            }}
          >
            <Typography
              sx={{
                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 800,
                lineHeight: "24px",

                color: "#1A1A1A",
                textAlign: "right",
              }}
            >
              پکیج رمانتیک دو نفره
            </Typography>

            <Typography
              sx={{
                mt: "20px",
                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "32px",

                color: "#4C4C4D",
                textAlign: "right",
              }}
            >
              شامل: ۱ شب اقامت + صبحانه + تور جنگل نوردی + قایق‌سواری
            </Typography>
          </Box>

          {/* FEATURE CARDS */}
          <Box
            sx={{
              width: "100%",
              mt: "24px",

              display: "flex",
              alignItems: "center",
              direction: "ltr",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              justifyContent: { xs: "center", sm: "space-between" },
              columnGap: { xs: 2, sm: 0 },
              rowGap: { xs: 2, sm: 0 },
            }}
          >
            {features.map((feature) => (
              <PackageFeatureCard
                key={feature.alt}
                alt={feature.alt}
                label={feature.label}
                src={feature.src}
              />
            ))}
          </Box>

          {/* ACTIONS */}
          <Box
            sx={{
              width: "100%",
              mt: "24px",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              direction: "rtl",
            }}
          >
            {/* PRICE */}
            <Typography
              sx={{
                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 700,
                color: "#43A047",
              }}
            >
              ۱۲,۵۰۰,۰۰۰ تومان
            </Typography>

            {/* BUTTON */}
            <Button
              type="button"
              sx={{
                width: "178px",
                height: "46px",
                minWidth: "178px",

                p: 0,
                borderRadius: "999px",

                color: "#FFFFFF",

                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 700,

                background:
                  "radial-gradient(ellipse 100% 28% at 50% 0%, rgba(255,255,255,.24), transparent), linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.16) inset, 0 1px 2px -1px rgba(146,146,146,.4)",
                gap: "8px",
                direction: "ltr",
                overflow: "hidden",
                textTransform: "none",

                "&:hover": {
                  background:
                    "radial-gradient(ellipse 100% 28% at 50% 0%, rgba(255,255,255,.24), transparent), linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)",
                },
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 34,
                  height: 34,
                  minWidth: 34,
                  borderRadius: "50%",
                  bgcolor: "#F7F8F8",
                  border: "1.2px solid #fff",
                  boxShadow:
                    "-4px -4px 6px rgba(186,200,209,.3) inset, 0 4px 6px rgba(0,0,0,.3)",
                }}
              />
              <Box
                component="span"
                aria-hidden="true"
                sx={{
                  width: 20,
                  height: 20,
                  display: "grid",
                  placeItems: "center",
                  color: "#02ADF7",
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 20 }} />
              </Box>
              همین حالا رزرو کن
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
