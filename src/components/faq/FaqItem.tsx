"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FaqItem({
  id,
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={id}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setOpen((prev) => !prev);
        }
      }}
      dir="rtl"
      sx={{
        width: "100%",
        maxWidth: "620px",
        minHeight: open ? "176px" : "64px",

        bgcolor: "#FCFDFD",

        // Figma
        border: "1px solid #EEF3F6",
        borderRadius: open ? "16px" : "999px",

        // بدون سایه اضافه
        boxShadow: "none",

        p: "16px",

        boxSizing: "border-box",

        display: "flex",
        flexDirection: "column",

        gap: "16px",

        cursor: "pointer",

      }}
    >
      {/* QUESTION ROW */}
      <Box
        sx={{
          width: "100%",
          minHeight: "32px",

          display: "flex",
          alignItems: "center",

          // در Figma آیکن سمت چپ و متن سمت راست است
          flexDirection: "row-reverse",

          boxSizing: "border-box",
        }}
      >
        {/* PLUS / MINUS */}
        <Box
          sx={{
            width: "20px",
            height: "20px",
            minWidth: "20px",

            borderRadius: "50%",

            bgcolor: "#18C8A5",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "#FFFFFF",

            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "20px",

            flexShrink: 0,
          }}
        >
          {open ? "−" : "+"}
        </Box>

        {/* QUESTION */}
        <Typography
          sx={{
            flex: 1,

            // فاصله دقیق‌تر از سمت راست
            pr: "32px",

            m: 0,

            fontFamily: "Abar Mid FaNum",
            fontSize: "14px",
            fontWeight: 800,
            color: "#1A1A1A",

            textAlign: "right",

            whiteSpace: { xs: "normal", md: "nowrap" },
            lineHeight: { xs: "24px", md: "32px" },

            boxSizing: "border-box",
          }}
        >
          {question}
        </Typography>
      </Box>

      {/* ANSWER */}
        <Typography
          component="p"
          id={id}
          aria-hidden={!open}
          hidden={!open}
          sx={{
            width: "100%",

            // فاصله متن جواب از سمت راست
            pr: "32px",

            m: 0,

            fontFamily: "Abar Mid FaNum",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "32px",

            color: "#4C4C4D",

            textAlign: "right",

            boxSizing: "border-box",
          }}
        >
          {answer}
        </Typography>
    </Box>
  );
}
