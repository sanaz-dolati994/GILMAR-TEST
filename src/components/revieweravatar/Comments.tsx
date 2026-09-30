import { Box, Typography } from "@mui/material";
import ReviewerAvatar from "./ReviewerAvatar";
import ReviewCard from "./ReviewCard";

const reviewers = {
  green: "/images/Reviewer%20Image%202.png",
  red: "/images/Reviewer%20Image-1%202.png",
  purple: "/images/Reviewer%20Image-2%203.png",
  yellow: "/images/Reviewer%20Image-2%204.png",
  orange: "/images/Reviewer%20Image-3%202.png",
};

export default function Comments() {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        width: "100%",
        height: { xs: 620, md: "698px" },

        overflow: "hidden",

        bgcolor: "#F5F8FA",

        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Figma canvas: 1440 × 698 */}
      <Box
        sx={{
          position: "relative",

          width: { xs: "100%", md: "1440px" },
          height: { xs: 620, md: "698px" },
          maxWidth: "1440px",

          flexShrink: 0,
        }}
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },

            left: { md: "50%" },
            transform: { md: "translateX(-50%)" },
            top: "0px",

            width: { xs: "calc(100% - 32px)", md: "732px" },
            height: { xs: 150, md: "162px" },
            mx: { xs: "auto", md: 0 },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            textAlign: "center",

            zIndex: 10,
          }}
        >
          {/* 92 × 60 */}
          <Box
            sx={{
              position: "relative",

              width: "92px",
              height: "60px",
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                width: "92px",
                height: "60px",
                bgcolor: "#ECFCEF",
                border: "1px solid #B8F3C4",
                borderRadius: "999px",
                boxShadow: "0 0 0 6px #fff",
              }}
            />

            {/* آیکون داخلی */}
            <Box
              sx={{
                position: "absolute",

                left: "36px",
                top: "20px",

                width: "20px",
                height: "20px",

                borderRadius: "50%",

                bgcolor: "#12C7B5",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "7px",

                  bgcolor: "#FFFFFF",

                  borderRadius: "2px",

                  position: "relative",

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    bottom: "-3px",
                    left: "2px",

                    width: 0,
                    height: 0,

                    borderLeft: "3px solid transparent",
                    borderRight: "3px solid transparent",
                    borderTop: "4px solid #FFFFFF",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Title: 260 × 58 */}
          <Typography
            component="h2"
            sx={{
              width: { xs: "100%", md: "260px" },
              height: "58px",

              m: 0,

              fontFamily: "Abar Mid FaNum",
              fontSize: { xs: 24, md: "32px" },
              fontWeight: 800,
              lineHeight: "58px",
              letterSpacing: "-1.4px",

              color: "#1A1A1A",

              textAlign: "center",
              whiteSpace: { xs: "normal", md: "nowrap" },
            }}
          >
            گیلمار از نگاه مهمانان
          </Typography>

          {/* Description: 732 × 32 */}
          <Typography
            sx={{
              width: "100%",
              height: { xs: "auto", md: "32px" },

              m: 0,

              fontFamily: "Abar Mid FaNum",
              fontSize: "14px",
              fontWeight: 600,
              color: "#4C4C4D",

              textAlign: "center",
              whiteSpace: { xs: "normal", md: "nowrap" },
              lineHeight: { xs: "24px", md: "32px" },
            }}
          >
            تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
          </Typography>
        </Box>

        {/* =====================================================
            DOTTED MAP
        ====================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "105px",
            left: "50%",
            transform: "translateX(-50%)",

            width: "calc(100% - 310px)",
            height: "390px",

            opacity: 0.55,

            backgroundImage:
              "radial-gradient(circle, #D9E2E6 1.5px, transparent 1.5px)",

            backgroundSize: "8px 8px",

            maskImage:
              "radial-gradient(ellipse 55% 75% at 50% 50%, black 45%, transparent 100%)",

            WebkitMaskImage:
              "radial-gradient(ellipse 55% 75% at 50% 50%, black 45%, transparent 100%)",

            zIndex: 1,

            pointerEvents: "none",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* =====================================================
            CENTER AVATAR
            Figma: 100 × 100
            Left: 534.5
            Top: 127
        ====================================================== */}

        <Box
          sx={{
            position: "absolute",
            top: { xs: 0, md: 94 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "100%", md: "min(1169px, calc(100vw - 32px))" },
            maxWidth: 1169,
            height: { xs: 620, md: 604 },
            overflow: "visible",
            zIndex: 5,
          }}
        >
        <ReviewerAvatar
          src={reviewers.orange}
          size={100}
        top={127}
        left={534.5}
        zIndex={9}
        mobileCenter
        />

        {/* =====================================================
            REVIEWER AVATARS
        ====================================================== */}

        {/* upper-left green — 60×60 */}
        <ReviewerAvatar
          src={reviewers.green}
          size={60}
          top={128}
          left={190}
        />

        {/* left-middle red — 50×50 */}
        <ReviewerAvatar
          src={reviewers.red}
          size={50}
          top={269}
          left={218}
        />

        {/* lower-left yellow — 60×60 */}
        <ReviewerAvatar
          src={reviewers.yellow}
          size={60}
          top={348}
          left={98}
        />

        {/* bottom-left purple — 60×60 */}
        <ReviewerAvatar
          src={reviewers.purple}
          size={60}
          top={440}
          left={190}
        />

        {/* upper-right yellow — 60×60 */}
        <ReviewerAvatar
          src={reviewers.yellow}
          size={60}
          top={204}
          left={885}
        />

        {/* right-middle green — 50×50 */}
        <ReviewerAvatar
          src={reviewers.green}
          size={50}
          top={288}
          left={1026}
        />

        {/* bottom-right red — 60×60 */}
        <ReviewerAvatar
          src={reviewers.red}
          size={60}
          top={440}
          left={943}
        />

        {/* =====================================================
            CARD
        ====================================================== */}

        <ReviewCard />
        </Box>

        {/* =====================================================
            SLIDER DOTS
        ====================================================== */}

        <Box
          sx={{
            position: "absolute",

            left: "50%",
            top: { xs: 580, md: "633px" },

            transform: "translateX(-50%)",

            display: "flex",
            alignItems: "center",

            gap: "4px",

            zIndex: 10,
          }}
        >
          <Box
            sx={{
              width: "4px",
              height: "4px",

              borderRadius: "50%",

              bgcolor: "#D8ECE8",
            }}
          />

          <Box
            sx={{
              width: "6px",
              height: "6px",

              borderRadius: "50%",

              bgcolor: "#12C7B5",
            }}
          />

          <Box
            sx={{
              width: "4px",
              height: "4px",

              borderRadius: "50%",

              bgcolor: "#D8ECE8",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
