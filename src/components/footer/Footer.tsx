import { Box, Typography } from "@mui/material";
import SocialButton from "./SocialButton";

const socialLinks = [
  { alt: "X" },
  { alt: "YouTube" },
  { alt: "Telegram" },
  { alt: "LinkedIn" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        width: "100%",
        height: "352px",

        bgcolor: "#F7FAFC",

        boxSizing: "border-box",

        overflow: "hidden",

        "@media (max-width: 900px)": {
          height: "auto",
          overflow: "visible",
        },
      }}
    >
      {/* FOOTER CONTAINER */}
      <Box
        sx={{
          width: "1280px",
          height: "352px",

          mx: "auto",

          display: "flex",
          flexDirection: "column",

          gap: "20px",

          boxSizing: "border-box",

          "@media (max-width: 1320px)": {
            width: "calc(100% - 40px)",
          },

          "@media (max-width: 900px)": {
            height: "auto",
          },
        }}
      >
        {/* ==========================================
            SUB CONTAINER
            1280 × 276
        ========================================== */}
        <Box
          sx={{
            width: "100%",
            height: "276px",

            bgcolor: "#FCFDFD",

            border: "1px solid #EEF3F6",
            borderRadius: "20px",

            paddingRight: "24px",

            display: "grid",
            gridTemplateColumns: "364px minmax(0, 1fr)",

            direction: "ltr",

            overflow: "hidden",

            boxSizing: "border-box",

            "@media (max-width: 1320px)": {
              gridTemplateColumns: "29% minmax(0, 71%)",
            },

            "@media (max-width: 900px)": {
              height: "auto",
              minHeight: "276px",

              display: "flex",
              flexDirection: "column",

              paddingRight: 0,
            },
          }}
        >
          {/* ==========================================
              MAP
              364 × 276
          ========================================== */}
          <Box
            sx={{
              width: "364px",
              height: "276px",

              overflow: "hidden",

              flexShrink: 0,

              "@media (max-width: 900px)": {
                width: "100%",
                height: "276px",
              },
            }}
          >
            <Box
              component="svg"
              role="img"
              aria-label="نقشه راه‌های دسترسی به گیلمار"
              viewBox="0 0 364 276"
              preserveAspectRatio="none"
              sx={{ width: "100%", height: "100%", display: "block" }}
            >
              <rect width="364" height="276" fill="#F6FAF8" />
              <g fill="none" stroke="#DDE8E4" strokeWidth="8">
                <path d="M-25 42 104 82l92-44 90 48 110-28M-20 184l105-40 79 56 90-34 126 52M63-14l34 92-19 96 63 116M218-16l-39 91 36 73-24 141M323-18l-40 91 37 72-18 144" />
              </g>
              <g fill="none" stroke="#FFFFFF" strokeWidth="4">
                <path d="M-25 42 104 82l92-44 90 48 110-28M-20 184l105-40 79 56 90-34 126 52M63-14l34 92-19 96 63 116M218-16l-39 91 36 73-24 141M323-18l-40 91 37 72-18 144" />
              </g>
              <path
                d="M22 233 91 190 147 164 207 126 279 105 337 61"
                fill="none"
                stroke="#26C7A5"
                strokeWidth="3"
                strokeDasharray="5 7"
              />
              <circle cx="207" cy="126" r="9" fill="#26C7A5" stroke="#FFFFFF" strokeWidth="5" />
            </Box>
          </Box>

          {/* ==========================================
              INFORMATION
              892 × 184
          ========================================== */}
          <Box
            dir="rtl"
            sx={{
                width: "892px",
              height: "184px",

              alignSelf: "center",

              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-between",

              boxSizing: "border-box",

              "@media (max-width: 1320px)": {
                width: "100%",
              },

              "@media (max-width: 900px)": {
                width: "100%",
                height: "auto",
                minHeight: "184px",

                padding: "24px",

                gap: "32px",

                flexDirection: "column",
              },
            }}
          >
            {/* ========================================
                DESCRIPTION
                314 × 184
            ======================================== */}
            <Box
              sx={{
                width: "314px",
                height: "184px",

                display: "flex",
                flexDirection: "column",

                alignItems: "flex-end",

                boxSizing: "border-box",

                "@media (max-width: 900px)": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              {/* REAL GILMAR LOGO */}
              <Box
                component="img"
                src="/images/Frame%20888.png"
                alt="اقامتگاه بومگردی گیلمار"
                sx={{
                  width: "122px",
                  height: "auto",

                  display: "block",

                  objectFit: "contain",
                  objectPosition: "right",
                  filter:
                    "brightness(0) saturate(100%) invert(56%) sepia(66%) saturate(587%) hue-rotate(137deg) brightness(93%) contrast(90%)",

                  mb: "8px",
                }}
              />

              <Typography
                sx={{
                  width: "314px",

                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  "@media (max-width: 900px)": {
                    width: "100%",
                  },
                }}
              >
                اقامتگاه بومگردی گیلمار بزرگترین مجموعه اکولوژیک شمال کشور با
                امکانات رفاهی و تفریحی متنوع، در فضای منحصر‌به‌فرد و با مجوز
                رسمی میراث فرهنگی گیلان فعالیت می‌کند.
              </Typography>
            </Box>

            {/* ========================================
                LINKS
                122 × 184
            ======================================== */}
            <Box
              sx={{
                width: "122px",
                height: "184px",

                display: "flex",
                flexDirection: "column",

                alignItems: "flex-start",

                boxSizing: "border-box",

                "@media (max-width: 900px)": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  width: "100%",

                  m: 0,
                  mb: "10px",

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 800,
                  lineHeight: "32px",

                  color: "#1A1A1A",

                  textAlign: "right",
                }}
              >
                کاوش در گیلمار
              </Typography>

              <Typography
                component="a"
                href="#rooms"
                sx={{
                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  textDecoration: "none",
                }}
              >
                • سرویس‌ها و اقامت
              </Typography>

              <Typography
                component="a"
                href="#guide"
                sx={{
                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  textDecoration: "none",
                }}
              >
                • راهنمای مهمان‌ها
              </Typography>

              <Typography
                component="a"
                href="#about"
                sx={{
                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  textDecoration: "none",
                }}
              >
                • درباره گیلمار
              </Typography>

              <Typography
                component="a"
                href="#blog"
                sx={{
                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  textDecoration: "none",
                }}
              >
                • مجله گیلمار
              </Typography>
            </Box>

            {/* ========================================
                CONTACT INFO
                370 × 184
            ======================================== */}
            <Box
              sx={{
                width: "370px",
                height: "184px",

                display: "flex",
                flexDirection: "column",

                alignItems: "flex-end",

                boxSizing: "border-box",

                "@media (max-width: 900px)": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  width: "100%",

                  m: 0,
                  mb: "10px",

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 800,
                  lineHeight: "32px",

                  color: "#1A1A1A",

                  textAlign: "right",
                }}
              >
                راه‌های ارتباط با گیلمار
              </Typography>

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
                تلفن پشتیبانی: ۰۱۳۴۳۷۷۶۱۱۱ - ۰۱۳۴۳۷۲۵۴۰۰
              </Typography>

              <Typography
                sx={{
                  width: "100%",

                  m: 0,

                  fontFamily: '"Abar Mid FaNum", sans-serif',
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",
                }}
              >
                ایمیل: Info@Gilmar-Gilan.Com
              </Typography>

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
                موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
                کوثر، گیلمار
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ==========================================
            NAVBAR
            1280 × 56
        ========================================== */}
        <Box
          sx={{
            width: "100%",
            height: "56px",

            bgcolor: "#FCFDFD",

            border: "1px solid #EEF3F6",
            borderRadius: "99999999px",

            padding: "8px 24px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            direction: "ltr",

            boxSizing: "border-box",
          }}
        >
          {/* SOCIAL MEDIA */}
          <Box
            sx={{
              width: "196px",
              height: "40px",

              display: "flex",
              alignItems: "center",

              gap: "12px",

              direction: "ltr",

              flexShrink: 0,
            }}
          >
            {socialLinks.map((social) => (
              <SocialButton
                key={social.alt}
                alt={social.alt}
              />
            ))}
          </Box>

          {/* COPYRIGHT */}
          <Typography
            component="p"
            sx={{
              width: "331px",
              height: "32px",

              m: 0,

              fontFamily: '"Abar Mid FaNum", sans-serif',
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "32px",

              color: "#4C4C4D",

              textAlign: "right",

              direction: "rtl",

              whiteSpace: "nowrap",
            }}
          >
            © تمامی حقوق برای اقامتگاه بومگردی گیلمار محفوظ است.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
