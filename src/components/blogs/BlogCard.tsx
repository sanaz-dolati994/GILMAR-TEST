import { Box, Typography } from "@mui/material";

type BlogCardProps = {
  src: string;
  title: string;
  description: string;
};

export default function BlogCard({
  src,
  title,
  description,
}: BlogCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "408px",
        height: "482px",
        flex: "0 0 408px",

        borderRadius: "20px",
        overflow: "hidden",
        bgcolor: "#0B1711",

        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        boxShadow:
          "inset 0 10px 30px rgba(0, 0, 0, 0.32), 0 24px 48px rgba(0, 46, 37, 0.12)",

        "@media (max-width: 1300px)": {
          width: "calc((100% - 56px) / 3)",
          flex: "0 0 calc((100% - 56px) / 3)",
        },

        "@media (max-width: 900px)": {
          width: "100%",
          height: "482px",
          flex: "0 0 auto",
        },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(180deg, rgba(7, 7, 8, 0) 30%, rgba(7, 7, 8, 0.92) 100%)",

          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        dir="rtl"
        sx={{
          position: "absolute",
          left: "24px",
          right: "24px",
          bottom: "24px",

          zIndex: 2,

          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            m: 0,

            fontFamily: "Abar Mid FaNum",
            fontSize: "16px",
            fontWeight: 800,
            lineHeight: "24px",

            color: "#FFFFFF",
            textAlign: "right",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            m: 0,

            fontFamily: "Abar Mid FaNum",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "32px",

            color: "rgba(255,255,255,0.72)",
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
