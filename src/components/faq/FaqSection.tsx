"use client";

import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { Box, Typography } from "@mui/material";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
];

export default function FaqSection() {
  return (
    <Box
      component="section"
      id="faq"
      sx={{
        width: "100%",

        // Figma: 1440 × 576
        height: "576px",

        bgcolor: "#F7FAFC",

        overflow: "hidden",

        "@media (max-width: 900px)": {
          height: "auto",
          minHeight: "576px",
          overflow: "visible",
        },
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          width: "1280px",
          height: "576px",

          mx: "auto",

          display: "grid",

          // چپ = FAQ
          // راست = عنوان + تصویر
          gridTemplateColumns: "620px 620px",

          columnGap: "32px",

          direction: "ltr",

          boxSizing: "border-box",

          "@media (max-width: 1300px)": {
            width: "calc(100% - 40px)",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          },

          "@media (max-width: 900px)": {
            width: "calc(100% - 32px)",
            height: "auto",

            display: "flex",
            flexDirection: "column",

            gap: "40px",
          },
        }}
      >
        {/* ==================================================
            LEFT COLUMN — FAQ
        ================================================== */}
        <Box
          dir="rtl"
          sx={{
            width: "620px",
            height: "576px",

            display: "flex",
            flexDirection: "column",

            gap: "16px",

            boxSizing: "border-box",

            "@media (max-width: 1300px)": {
              width: "100%",
            },

            "@media (max-width: 900px)": {
              height: "auto",
            },
          }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              id={`faq-answer-${index}`}
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </Box>

        {/* ==================================================
            RIGHT COLUMN — HEADER + IMAGE
        ================================================== */}
        <Box
          dir="rtl"
          sx={{
            position: "relative",

            width: "620px",
            height: "576px",

            boxSizing: "border-box",

            "@media (max-width: 1300px)": {
              width: "100%",
            },
          }}
        >
          {/* ================= DECORATIVE BACKGROUND ================= */}

          <Box
            sx={{
              position: "absolute",

              top: 0,
              right: 0,

              width: "100%",
              height: "250px",

              pointerEvents: "none",

              zIndex: 0,
            }}
          >
            {/* جای graphy فعلاً محفوظ است */}
          </Box>

          {/* ================= HEADER ================= */}

          <Box
            sx={{
              position: "relative",

              width: "620px",
              height: "194px",

              display: "flex",
              flexDirection: "column",

              alignItems: "flex-end",

              gap: "32px",

              zIndex: 2,

              boxSizing: "border-box",

              "@media (max-width: 1300px)": {
                width: "100%",
              },
            }}
          >
            {/* EXACT ICON PLACEHOLDER
                92 × 60
                SVG بعداً همین‌جا قرار می‌گیرد */}
            <Box
              aria-hidden="true"
              sx={{
                width: "92px",
                height: "60px",
                flexShrink: 0,
                alignSelf: "flex-end",
                display: "grid",
                placeItems: "center",
                bgcolor: "#ECFCEF",
                border: "1px solid #B8F3C4",
                borderRadius: "999px",
              }}
            >
              <QuizOutlinedIcon sx={{ color: "#12C7A5", fontSize: 24 }} />
            </Box>

            {/* TITLE + DESCRIPTION */}
            <Box
              sx={{
                width: "620px",
                height: "64px",

                display: "flex",
                flexDirection: "column",

                alignItems: "flex-end",

                boxSizing: "border-box",

                "@media (max-width: 1300px)": {
                  width: "100%",
                },
              }}
            >
              {/* TITLE */}
              <Typography
                component="h2"
                sx={{
                  // Figma: 369 × 58
                  width: "369px",
                  height: "58px",

                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "32px",
                  fontWeight: 800,
                  lineHeight: "58px",
                  letterSpacing: "-1.4px",

                  color: "#1A1A1A",

                  // حتماً راست‌چین
                  textAlign: "right",

                  // خود عنوان در سمت راست ستون قرار بگیرد
                  alignSelf: "flex-end",

                  whiteSpace: "nowrap",

                  boxSizing: "border-box",

                  "@media (max-width: 700px)": {
                    width: "100%",
                    height: "auto",

                    fontSize: "28px",
                    lineHeight: "42px",

                    whiteSpace: "normal",
                  },
                }}
              >
                سوالات متداول مهمانان گیلمار
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  width: "620px",
                  height: "64px",

                  m: 0,

                  fontFamily: "Abar Mid FaNum",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "32px",

                  color: "#4C4C4D",

                  textAlign: "right",

                  alignSelf: "flex-end",

                  boxSizing: "border-box",

                  "@media (max-width: 1300px)": {
                    width: "100%",
                  },
                }}
              >
                پاسخ رایج‌ترین سوالات درباره رزرو اقامت و امکانات گیلمار را اینجا
                پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
              </Typography>
            </Box>
          </Box>

          {/* ================= MAIN IMAGE ================= */}

          <Box
            component="img"
            src="/images/icon-binoculars%20(1)%201.png"
            alt="دوربین شکاری و کارت پستال‌های طبیعت"
            sx={{
              position: "absolute",

              // Figma: 420 × 382
              width: "420px",
              height: "382px",

              left: "100px",
              top: "194px",

              display: "block",

              objectFit: "contain",

              zIndex: 2,

              "@media (max-width: 900px)": {
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
