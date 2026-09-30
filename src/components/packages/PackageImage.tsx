import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function PackageImage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "400px",
          lg: "815px",
        },
        bgcolor: "#F5F8FA",
      }}
    >
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="package-puzzle-clip" clipPathUnits="objectBoundingBox">
            <path d="M .08 0 H .27 C .295 0 .31 .02 .31 .045 V .105 C .31 .13 .33 .15 .355 .15 H .43 C .455 .15 .475 .13 .475 .105 V .045 C .475 .02 .495 0 .52 0 H .95 C .978 0 1 .022 1 .05 V .62 C 1 .648 .978 .67 .95 .67 H .91 C .885 .67 .87 .69 .87 .715 V .78 C .87 .805 .89 .825 .915 .825 H .95 C .978 .825 1 .847 1 .875 V .95 C 1 .978 .978 1 .95 1 H .80 C .775 1 .76 .98 .76 .955 V .90 C .76 .875 .74 .855 .715 .855 H .635 C .61 .855 .59 .875 .59 .90 V .955 C .59 .98 .57 1 .545 1 H .05 C .022 1 0 .978 0 .95 V .50 C 0 .475 .02 .455 .045 .455 H .085 C .11 .455 .125 .435 .125 .41 V .36 C .125 .335 .105 .32 .08 .32 H .05 C .022 .32 0 .30 0 .275 V .05 C 0 .022 .022 0 .05 0 H .08 Z" />
          </clipPath>
        </defs>
      </svg>

      <Box
        sx={{
          position: "absolute",
          inset: "0 9px",
          overflow: "hidden",
          clipPath: "url(#package-puzzle-clip)",
        }}
      >
        <Image
          src="/images/package3%201.png"
          alt="کلبه‌ای در کنار آب، میان درختان پاییزی"
          fill
          priority
          sizes="(max-width: 1024px) calc(100vw - 50px), 602px"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Badge */}
      <Box
        sx={{
          position: "absolute",
          top: "76px",
          left: 0,
          width: "158px",
          minHeight: "76px",
          px: "18px",
          py: "14px",
          boxSizing: "border-box",
          bgcolor: "#FCFCFD",
          borderRadius: "0 16px 16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 2,
          "&::after": {
            content: '""',
            position: "absolute",
            right: "-10px",
            top: "50%",
            width: "20px",
            height: "20px",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            bgcolor: "#FCFCFD",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Abar Mid FaNum",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#1A1A1A",
          }}
        >
          تجربه اقامتی اصیل در دل طبیعت شمال
        </Typography>
      </Box>

      {/* Slider indicators */}
      <Box
        sx={{
          position: "absolute",
          left: "16px",
          bottom: "13px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 2,
        }}
      >
        {[0, 1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              width: "48px",
              height: "4px",
              borderRadius: "999px",
              bgcolor:
                item === 0 ? "#FFFFFF" : "rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
