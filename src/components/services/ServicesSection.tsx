import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const services = [
  { title: "پرنده‌نگری", image: "/images/package4%201.png" },
  { title: "قایق‌سواری", image: "/images/boat%201.png" },
  { title: "دوچرخه‌سواری", image: "/images/Frame%202147238326%20(7).png" },
];

function ServicesTopIcon() {
  return (
    <Box
      component="svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      sx={{
        display: "block",
        flex: "0 0 20px",
      }}
    >
      <path
        d="M13.374 0.726562C13.9806 0.452054 14.2765 0.463803 14.4854 0.571289C14.6899 0.676734 14.8642 0.900833 14.9756 1.54004C15.0875 2.18261 15.1103 3.08921 15.1416 4.375L15.1582 5.03223C15.1747 5.70784 15.1765 6.19752 15.3818 6.62793C15.5883 7.06062 15.967 7.36396 16.4756 7.78906L16.9697 8.20215C17.9389 9.01214 18.619 9.58271 19.043 10.0645C19.461 10.5395 19.5339 10.8212 19.4873 11.0674C19.4392 11.3211 19.2568 11.5753 18.6797 11.9023C18.0987 12.2315 17.2426 12.566 16.0322 13.0381L15.4141 13.2793C14.7737 13.5291 14.3171 13.6974 13.9727 14.0342C13.6284 14.3708 13.4494 14.8246 13.1836 15.4609L12.9268 16.0752C12.4247 17.2775 12.0679 18.1275 11.7246 18.7021C11.383 19.274 11.1257 19.4501 10.874 19.4912C10.6308 19.5309 10.3537 19.4513 9.8916 19.0186C9.4234 18.5801 8.87316 17.8823 8.09277 16.8877L7.69531 16.3799C7.28598 15.8582 6.99405 15.4701 6.56836 15.251C6.14422 15.0327 5.6551 15.0179 4.9834 14.9834L4.33008 14.9492C3.05079 14.8834 2.14977 14.8355 1.51367 14.7061C0.881458 14.5774 0.663268 14.3976 0.563477 14.1885C0.460979 13.9736 0.457538 13.6741 0.74707 13.0723C1.03686 12.47 1.55164 11.701 2.28027 10.6152L2.65234 10.0605C3.03733 9.48684 3.31912 9.08484 3.4082 8.61426C3.49771 8.14085 3.37844 7.67164 3.22656 7.01562L3.08008 6.38086C2.7921 5.13696 2.59061 4.25992 2.53906 3.60742C2.48816 2.96288 2.59609 2.67314 2.78516 2.48828C2.97354 2.30424 3.26274 2.20433 3.90137 2.27246C4.54887 2.34156 5.41589 2.56729 6.64648 2.88965L7.27539 3.05371C7.92389 3.22359 8.38893 3.35593 8.86426 3.27832C9.33623 3.20125 9.74452 2.92934 10.3252 2.55859L10.8877 2.19922C11.9881 1.49667 12.7671 1.00127 13.374 0.726562ZM16.8232 16.8232C16.9209 16.7256 17.0791 16.7256 17.1768 16.8232L19.1768 18.8232C19.2744 18.9209 19.2744 19.0791 19.1768 19.1768C19.0791 19.2744 18.9209 19.2744 18.8232 19.1768L16.8232 17.1768C16.7256 17.0791 16.7256 16.9209 16.8232 16.8232Z"
        fill="url(#paint0_linear_1483_220)"
        stroke="url(#paint1_linear_1483_220)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1483_220"
          x1="21.7857"
          y1="-6.15063"
          x2="-8.29671"
          y2="19.5269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02ADF7" />
          <stop offset="1" stopColor="#26E05A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1483_220"
          x1="10"
          y1="0"
          x2="10"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.735221" stopColor="#0F6B29" stopOpacity="0" />
          <stop offset="1" stopColor="#0F6B29" />
        </linearGradient>
      </defs>
    </Box>
  );
}

function NextButton() {
  return (
    <Box
      component="button"
      type="button"
      aria-label="مشاهده خدمات"
      sx={{
        position: "absolute",
        zIndex: 2,
        top: "50%",
        right: { xs: 0, md: -22 },
        transform: "translateY(-50%)",
        display: { xs: "none", md: "grid" },
        placeItems: "center",
        width: 46,
        height: 46,
        p: 0,
        border: "3px solid #F5F8FA",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #02ADF7, #26E05A)",
        color: "#fff",
        cursor: "pointer",
        "@media (min-width: 1360px)": {
          top: 196,
          left: 867,
          right: "auto",
          transform: "translate(-50%, -50%) rotate(180deg)",
        },
      }}
    >
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          display: "block",
          width: 10,
          height: 10,
          borderTop: "2px solid currentColor",
          borderRight: "2px solid currentColor",
          transform: "rotate(45deg)",
        }}
      />
    </Box>
  );
}

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      dir="ltr"
      sx={{
        boxSizing: "border-box",
        position: "relative",
        width: "100%",
        maxWidth: 1440,
        height: { xs: "auto", md: 346 },
        minHeight: { xs: 346, md: 346 },
        mx: "auto",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 2 },
        display: "grid",
        gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.12fr 0.88fr" },
        alignItems: "center",
        gap: { xs: 3, md: 4.5 },
        bgcolor: "#F5F9FA",
        fontFamily: '"Abar Mid FaNum", sans-serif',
        "@media (min-width: 1360px)": {
          display: "block",
          height: 346,
          minHeight: 346,
          px: 0,
          py: 0,
        },
      }}
    >
      {/* تصاویر در سمت چپ */}
      <Box
        sx={{
          gridColumn: { xs: 1, md: 1 },
          gridRow: { xs: 2, md: 1 },
          direction: "rtl",
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 1.75 },
          minWidth: 0,
          "@media (min-width: 900px) and (max-width: 1359px)": {
            transform: "translateX(-120px)",
          },
          "@media (min-width: 1360px)": {
            position: "absolute",
            top: 0,
            left: -144,
            width: 867,
            gap: "24px",
            justifyContent: "flex-end",
            overflow: "visible",
          },
        }}
      >
        {services.map((service, index) => (
          <Box
            key={service.title}
            sx={{
              position: "relative",
              flex: "1 1 0",
              minWidth: 0,
              height: { xs: 150, md: index === 1 ? 204 : 190 },
              overflow: "hidden",
              borderRadius: { xs: 2, md: "20px" },
              bgcolor: "#DCE7E5",
              backgroundImage: `url("${service.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: "35% 0 0",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(0,0,0,.62) 100%)",
              },
              "@media (min-width: 1360px)": {
                flex: `0 0 ${index === 1 ? 288 : 254}px`,
                width: index === 1 ? 288 : 254,
                height: index === 1 ? 346 : 304,
                borderRadius: "20px",
              },
            }}
          >
            <Typography
              component="h3"
              sx={{
                position: "absolute",
                zIndex: 1,
                right: { xs: 12, md: 16 },
                bottom: { xs: 10, md: 12 },
                left: 1,
                m: 0,
                color: "#fff",
                direction: "rtl",
                textAlign: "right",
                fontFamily: "inherit",
                fontSize: { xs: 12, md: 14 },
                fontWeight: 700,
                textShadow: "0 1px 5px rgba(0,0,0,.35)",
              }}
            >
              {service.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* متن در سمت راست */}
      <Box
        sx={{
          gridColumn: { xs: 1, md: 2 },
          gridRow: { xs: 1, md: 1 },
          position: "relative",
          direction: "rtl",
          minWidth: 0,
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          py: { xs: 0, md: 3.75 },
          textAlign: "right",
          "@media (min-width: 1360px)": {
            position: "absolute",
            top: 0,
            left: 763,
            width: 620,
            height: 346,
            py: 0,
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            width: 92,
            height: 60,
            mb: 1.5,
            display: "grid",
            placeItems: "center",
            border: "1px solid #B8F3C4",
            borderRadius: "26px",
            bgcolor: "#ECFCEF",
          }}
        >
          <ServicesTopIcon />
        </Box>

        <Box
          component="h2"
          sx={{
            boxSizing: "border-box",
            display: "block",
            width: "calc(100% + 8px)",
            minWidth: 0,
            m: 0,
            mr: "-8px",
            pr: "8px",
            overflow: "visible",
            color: "#1A1A1A",
            direction: "rtl",
            textAlign: "right",
            fontFamily: '"Abar Mid FaNum", sans-serif',
            fontSize: { xs: 22, md: 32 },
            fontWeight: 800,
            lineHeight: 1.5,
            whiteSpace: "normal",
            wordBreak: "normal",
          }}
        >
          خدمات رفاهی گیلمار برای اقامتی دلنشین
        </Box>

        <Typography
          component="p"
          sx={{
            width: "100%",
            maxWidth: 490,
            mt: 1,
            mb: 0,
            color: "#4C4C4D",
            direction: "rtl",
            textAlign: "right",
            fontFamily: '"Abar Mid FaNum", sans-serif',
            fontSize: { xs: 13, md: 14 },
            fontWeight: 600,
            lineHeight: { xs: "26px", md: "32px" },
          }}
        >
          در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛
          فضایی دل‌نشین و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی
          آماده شده است.
        </Typography>

      </Box>
      <NextButton />
    </Box>
  );
}
