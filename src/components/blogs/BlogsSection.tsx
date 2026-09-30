import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Box, Typography } from "@mui/material";

import BlogCard from "./BlogCard";

const blogs = [
  {
    src: "/images/img%2002.png",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم زدن در جنگل‌های ماجراجویی تا نوشیدن چای کنار شالیزار، در این مقاله به لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    src: "/images/img%2002.png",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم زدن در جنگل‌های ماجراجویی تا نوشیدن چای کنار شالیزار، در این مقاله به لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    src: "/images/img%2002.png",
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم زدن در جنگل‌های ماجراجویی تا نوشیدن چای کنار شالیزار، در این مقاله به لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
];

export default function BlogsSection() {
  return (
    <Box
      component="section"
      id="blog"
      sx={{
        width: "100%",
        height: "684px",
          bgcolor: "#F5F8FA",
        overflow: "hidden",
      }}
    >
      {/* Main container */}
      <Box
        sx={{
          width: "1280px",
          height: "684px",
          mx: "auto",

          display: "flex",
          flexDirection: "column",

          gap: "40px",

          position: "relative",

          "@media (max-width: 1300px)": {
            width: "calc(100% - 64px)",
          },

          "@media (max-width: 900px)": {
            width: "calc(100% - 32px)",
            height: "auto",
            minHeight: "684px",
            py: "40px",
            boxSizing: "border-box",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            width: "1024px",
            height: "162px",
            mx: "auto",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            gap: "40px",

            position: "relative",

            "@media (max-width: 1100px)": {
              width: "100%",
            },
            "@media (max-width: 760px)": {
              height: "auto",
              gap: "24px",
            },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: "84px",
              height: "52px",

              bgcolor: "#ECFCEF",
              border: "1px solid #B8F3C4",
              borderRadius: "999px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              boxSizing: "border-box",
            }}
          >
            <ArticleOutlinedIcon sx={{ color: "#12C7A5", fontSize: 24 }} />
          </Box>

          {/* Description container */}
          <Box
            sx={{
              width: "732px",
              height: "70px",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              "@media (max-width: 760px)": {
                width: "100%",
                height: "auto",
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                width: "100%",
                height: "38px",

                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: "38px",
                letterSpacing: "-1.4px",

                color: "#1A1A1A",

                textAlign: "center",

                "@media (max-width: 760px)": {
                  width: "100%",
                  height: "auto",
                  fontSize: "26px",
                  lineHeight: "42px",
                },
              }}
            >
              مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش
            </Typography>

            <Typography
              sx={{
                width: "732px",
                height: "32px",

                m: 0,

                fontFamily: "Abar Mid FaNum",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "32px",

                color: "#4C4C4D",

                textAlign: "center",

                "@media (max-width: 760px)": {
                  width: "100%",
                  height: "auto",
                  lineHeight: "28px",
                },
              }}
            >
              در مجله گیلمار خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و
              تجربه اقامتی دلنشین را دنبال کنید.
            </Typography>
          </Box>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            width: "1280px",
            height: "482px",

            display: "flex",
            flexDirection: "row",
            gap: "28px",

            direction: "ltr",

            "@media (max-width: 1300px)": {
              width: "100%",
            },

            "@media (max-width: 900px)": {
              height: "auto",
              flexDirection: "column",
              gap: "24px",
            },
          }}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              src={blog.src}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
