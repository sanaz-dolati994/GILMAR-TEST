import Image from "next/image";
import { Box, Typography } from "@mui/material";

const guests = [
  "/images/Reviewer%20Image%202.png",
  "/images/Reviewer%20Image-1%202.png",
  "/images/Reviewer%20Image-2%203.png",
];

export default function ResortBanner() {
  return (
    <Box
      component="section"
      aria-label="اقامتگاه بوم‌گردی گیلمار"
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { md: 359 },
        left: 0,
        zIndex: 1,
        width: "100%",
        px: { xs: 2, md: 0 },
          mt: { xs: 8, md: 0 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1280,
          aspectRatio: "1280 / 581",
          overflow: "hidden",
          borderRadius: 0,
          filter: "drop-shadow(0 18px 24px rgba(0, 46, 37, .16))",
        }}
      >
        <Image
          src="/images/Container%20(2).png"
          alt="ساختمان چوبی اقامتگاه بوم‌گردی گیلمار در میان درختان"
          fill
          priority
          sizes="(max-width: 900px) calc(100vw - 32px), 1280px"
          style={{ objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            left: { xs: 6, md: 16 },
            bottom: { xs: 4, md: 28 },
            zIndex: 1,
            px: { xs: 0.75, md: 1.5 },
            py: { xs: 0.5, md: 1 },
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.75, md: 1.25 },
            bgcolor: "#fff",
            borderRadius: "999px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        >
          <Typography sx={{ fontSize: { xs: 8, md: 14 }, fontWeight: 600, whiteSpace: "nowrap" }}>
            +۱۲۰ رزرو موفق
          </Typography>
          <Box dir="ltr" sx={{ display: "flex", pl: 0.5 }}>
            {guests.map((src, index) => (
              <Box
                key={src}
                component="img"
                src={src}
                alt=""
                sx={{
                  width: { xs: 16, md: 26 },
                  height: { xs: 16, md: 26 },
                  ml: index ? -0.75 : 0,
                  objectFit: "cover",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                }}
              />
            ))}
          </Box>
        </Box>

        <Typography
          sx={{
            position: "absolute",
            right: { xs: 6, md: 16 },
            bottom: { xs: 5, md: 28 },
            zIndex: 1,
            width: { xs: 132, md: 251 },
            color: "#1A1A1A",
            fontSize: { xs: 8, md: 14 },
            fontWeight: 600,
            lineHeight: { xs: 1.5, md: "32px" },
            textAlign: "right",
            textShadow: "0 1px 5px rgba(255,255,255,.75)",
          }}
        >
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </Typography>
      </Box>
    </Box>
  );
}
