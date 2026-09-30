import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Box, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "642px" },
        minHeight: { xs: 0, md: "642px" },
        pb: { xs: 4, md: 0 },
        overflow: "hidden",
        bgcolor: "#F5F8FA",
        "@media (max-width: 1359px)": {
          height: "auto",
          pb: 4,
        },
      }}
    >
      {/* Background graphy */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#dfe9ed .65px, transparent .65px)",
          backgroundSize: "24px 24px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "luminosity",
          pointerEvents: "none",
        }}
      />

      {/* Main 1440px container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1440px",
          height: { xs: "auto", md: "642px" },
          minHeight: { xs: "900px", md: "642px" },
          mx: "auto",
          "@media (max-width: 1359px)": {
            height: "auto",
            minHeight: 0,
          },
        }}
      >
        {/* =========================
            LEFT : IMAGE GROUP
        ========================== */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            left: { xs: "50%", md: "80px" },
            top: { xs: "50px", md: "0px" },
            transform: { xs: "translateX(-50%)", md: "none" },

            width: { xs: "calc(100vw - 32px)", md: "620px" },
            maxWidth: "620px",
            height: { xs: "auto", md: "642px" },
            aspectRatio: { xs: "620 / 642", md: "auto" },

            direction: "ltr",
            mt: { xs: "50px", md: 0 },
            "@media (max-width: 1359px)": {
              position: "relative",
              left: "auto",
              right: "auto",
              top: 0,
              transform: "none",
              mx: "auto",
              width: "min(620px, calc(100vw - 32px))",
              height: "auto",
              aspectRatio: "620 / 642",
              mt: "50px",
            },
          }}
        >
          {/* img 02 - 352 x 352 */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "56.8%", md: "352px" },
              height: { xs: "54.8%", md: "352px" },
              left: { xs: "24.7%", md: "153px" },
              top: "0px",
              borderRadius: "20px",
              overflow: "hidden",
              boxSizing: "border-box",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/img%2002.png"
              alt="اقامتگاه بوم‌گردی گیلمار کنار تالاب"
              fill
              priority
              sizes="352px"
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
            />
          </Box>

          {/* img 03 - 256 x 298 */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "41.3%", md: "256px" },
              height: { xs: "46.4%", md: "298px" },
              left: { xs: "9.2%", md: "57px" },
              top: { xs: "38.8%", md: "249px" },
              borderRadius: "20px",
              overflow: "hidden",
              boxSizing: "border-box",
              zIndex: 4,
            }}
          >
            <Image
              src="/images/img%2003.png"
              alt="تجربه اقامت اصیل شمال"
              fill
              sizes="256px"
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
            />
          </Box>

          {/* img 01 - 256 x 360 */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "41.3%", md: "256px" },
              height: { xs: "56.1%", md: "360px" },
              left: { xs: "55.7%", md: "345px" },
              top: { xs: "43.9%", md: "282px" },
              borderRadius: "20px",
              overflow: "hidden",
              boxSizing: "border-box",
              zIndex: 3,
            }}
          >
            <Image
              src="/images/img%2001.png"
              alt="طبیعت گیلان"
              fill
              sizes="256px"
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
            />
          </Box>

          {/* Badge 1 */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "3.1%", md: "19px" },
              top: { xs: "19.9%", md: "128px" },
              zIndex: 10,

              height: { xs: "52px", md: "72px" },
              minWidth: "175px",
              px: { xs: "6px", md: "12px" },
              pr: { xs: "16px", md: "32px" },
              py: { xs: "6px", md: "12px" },

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: "10px", md: "16px" },

              bgcolor: "#FFFFFF",
              borderRadius: "999px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.10)",

              direction: "ltr",
            }}
          >
            <Typography
              dir="rtl"
              sx={{
                fontFamily: "Abar Mid FaNum",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: 1,
                color: "#1A1A1A",
                whiteSpace: "nowrap",
              }}
            >
              اقامتگاه بومگردی گیلمار
            </Typography>

            <Box
              sx={{
                width: { xs: "40px", md: "48px" },
                height: { xs: "40px", md: "48px" },
                minWidth: { xs: "40px", md: "48px" },
                borderRadius: "50%",
                bgcolor: "#12C7B5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                />
                <path
                  d="M4 12H20"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                />
                <path
                  d="M12 4C14.1 6.2 15.2 8.8 15.2 12C15.2 15.2 14.1 17.8 12 20"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                />
                <path
                  d="M12 4C9.9 6.2 8.8 8.8 8.8 12C8.8 15.2 9.9 17.8 12 20"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                />
              </svg>
            </Box>
          </Box>

          {/* Badge 2 */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "calc(100% - 215px)", md: "249px" },
              top: { xs: "58%", md: "410px" },
              zIndex: 10,

              height: { xs: "52px", md: "72px" },
              minWidth: "185px",
              px: { xs: "6px", md: "12px" },
              pr: { xs: "16px", md: "32px" },
              py: { xs: "6px", md: "12px" },

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: "10px", md: "16px" },

              bgcolor: "#FFFFFF",
              borderRadius: "999px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.10)",

              direction: "ltr",
            }}
          >
            <Typography
              dir="rtl"
              sx={{
                fontFamily: "Abar Mid FaNum",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: 1,
                color: "#1A1A1A",
                whiteSpace: "nowrap",
              }}
            >
              تجربه اقامت اصیل شمال
            </Typography>

            <Box
              sx={{
                width: { xs: "40px", md: "48px" },
                height: { xs: "40px", md: "48px" },
                minWidth: { xs: "40px", md: "48px" },
                borderRadius: "50%",
                bgcolor: "#12C7B5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3.8L14.4 8.7L19.8 9.5L15.9 13.3L16.8 18.7L12 16.2L7.2 18.7L8.1 13.3L4.2 9.5L9.6 8.7L12 3.8Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>

        {/* =========================
            RIGHT : CONTENT
        ========================== */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: "40px", md: "0px" },
            right: { xs: "auto", md: "65px" },

            width: { xs: "calc(100% - 40px)", md: "620px" },
            height: { xs: "auto", md: "642px" },
            maxWidth: "620px",

            mx: { xs: "20px", md: 0 },

            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "flex-start",

            textAlign: "right",
            "@media (max-width: 1359px)": {
              position: "relative",
              top: "40px",
              right: "auto",
              width: "min(620px, calc(100vw - 40px))",
              height: "auto",
              mx: "auto",
              mb: "40px",
            },
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              display: "grid",
              width: "92px",
              height: "60px",
              placeItems: "center",
              mb: "16px",
              bgcolor: "#ECFCEF",
              border: "1px solid #B8F3C4",
              borderRadius: "999px",
            }}
          >
            <PlaceOutlinedIcon sx={{ color: "#12C7A5", fontSize: 24 }} />
          </Box>

          {/* TITLE */}
          <Typography
            component="h2"
            sx={{
              width: "620px",
              maxWidth: "100%",

              m: 0,
              mb: "8px",

              fontFamily: "Abar Mid FaNum",
              fontSize: { xs: "26px", md: "32px" },
              fontWeight: 800,
              lineHeight: { xs: "40px", md: "58px" },
              letterSpacing: "-1.4px",

              color: "#1A1A1A",

              textAlign: "right",
              whiteSpace: { xs: "normal", md: "nowrap" },
            }}
          >
            گیلمار؛ آرامش ناب در آغوش طبیعت گیلان
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            component="p"
            sx={{
              width: "620px",
              maxWidth: "100%",

              m: 0,
              mb: "10px",

              fontFamily: "Abar Mid FaNum",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "32px",
              letterSpacing: "0px",

              color: "#4C4C4D",

              textAlign: "justify",
            }}
          >
            گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
            لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
            پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر
            دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را
            به مقصدی متفاوت برای سفر تبدیل کرده است.
          </Typography>

          {/* EXACT FIGMA BUTTON */}
          <Button
            disableElevation
            sx={{
              width: "164px",
              minWidth: "164px",
              height: "46px",
              minHeight: "46px",

              p: 0,
              m: 0,

              color: "#fff",
              background:
                "radial-gradient(ellipse 100% 27.92% at 50% 0%, rgba(255,255,255,.24), transparent), linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,.16) inset, 0 1px 2px -1px rgba(146,146,146,.4)",
              borderRadius: "999px",
              direction: "ltr",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontWeight: 800,
              textTransform: "none",
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
                border: "1.2px solid #FFFFFF",
                boxShadow:
                  "-4px -4px 6px rgba(186,200,209,.3) inset, 0 4px 6px rgba(0,0,0,.3)",
              }}
            />
            <ArrowBackIcon sx={{ fontSize: 20, color: "#02ADF7" }} />
            <Box
              component="span"
              sx={{
                width: 92,
                color: "#FFFFFF",
                fontSize: 14,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              اقامت در گیلمار
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
