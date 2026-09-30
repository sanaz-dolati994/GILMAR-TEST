import { Box, Typography } from '@mui/material';

// لیست کارت‌های اتاق‌ها (تصاویر موجود در پروژه)
const rooms = [
  {
    title: 'خانه‌ی چوبی گیلمار',
    price: 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان',
    image: '/images/package3%201.png',
  },
  {
    title: 'خانه‌ی چوبی گیلمار',
    price: 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان',
    image: '/images/img%2002.png',
  },
  {
    title: 'خانه‌ی چوبی گیلمار',
    price: 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان',
    image: '/images/img%2001.png',
  },
  {
    title: 'خانه‌ی چوبی گیلمار',
    price: 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان',
    image: '/images/package1%201.png',
  },
];

export default function RoomsSection() {
  return (
    <>
      <Box
        component="section"
        id="rooms"
        dir="rtl"
        aria-labelledby="gilmar-rooms-title"
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 0, md: 0 },
          height: { xs: 'auto', md: 504 },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}
      >
        {/* کادر اصلی سکشن */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: 'min(1280px, calc(100vw - 64px))' },
            maxWidth: 1280,
            boxSizing: 'border-box',
            overflow: 'visible',
            border: 0,
            borderRadius: 0,
            backgroundColor: 'transparent',
            px: { xs: 2, sm: 3, md: 0 },
            pt: { xs: 3.5, md: 0 },
            pb: { xs: 3.5, md: 0 },
            textAlign: 'center',
          }}
        >
          {/* آیکون SVG دقیق بالای عنوان */}
          <Box
            aria-hidden="true"
            sx={{
              width: 92,
              height: 60,
              mx: 'auto',
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="92"
              height="60"
              viewBox="0 0 92 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_484_414)">
                <g clipPath="url(#clip0_484_414)">
                  <line
                    x1="4.24649"
                    y1="29.569"
                    x2="21.2465"
                    y2="19.569"
                    stroke="#B8F3C4"
                  />
                  <line
                    x1="4.5"
                    y1="29.5"
                    x2="20.5"
                    y2="29.5"
                    stroke="#B8F3C4"
                  />
                  <line
                    x1="4.77163"
                    y1="29.5802"
                    x2="21.7716"
                    y2="40.5802"
                    stroke="#B8F3C4"
                  />
                  <line
                    y1="-0.5"
                    x2="19.7231"
                    y2="-0.5"
                    transform="matrix(-0.861934 -0.50702 -0.50702 0.861934 88.5 30)"
                    stroke="#B8F3C4"
                  />
                  <line
                    y1="-0.5"
                    x2="16"
                    y2="-0.5"
                    transform="matrix(-1 0 0 1 88.5 30)"
                    stroke="#B8F3C4"
                  />
                  <line
                    y1="-0.5"
                    x2="20.2485"
                    y2="-0.5"
                    transform="matrix(-0.83957 0.543251 0.543251 0.83957 88.5 30)"
                    stroke="#B8F3C4"
                  />
                  <path
                    d="M46.5 -2.5C61.2276 -2.5 73 12.1528 73 30C73 47.8472 61.2276 62.5 46.5 62.5C31.7724 62.5 20 47.8472 20 30C20 12.1528 31.7724 -2.5 46.5 -2.5Z"
                    stroke="#B8F3C4"
                  />
                </g>
                <rect
                  x="4.5"
                  y="4.5"
                  width="83"
                  height="51"
                  rx="25.5"
                  stroke="#B8F3C4"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_484_414"
                  x="0"
                  y="0"
                  width="92"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="4"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_484_414"
                  />
                  <feOffset />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_484_414"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_484_414"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_484_414">
                  <rect x="4" y="4" width="84" height="52" rx="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>

          {/* عنوان سکشن */}
          <Typography
            component="h2"
            id="gilmar-rooms-title"
            sx={{
              m: 0,
              color: '#1A1A1A',
              fontFamily: '"Abar Mid FaNum", sans-serif',
              fontWeight: 800,
              fontSize: { xs: 24, sm: 32 },
              lineHeight: { xs: 1.3, sm: 1 },
              letterSpacing: '-1.4px',
            }}
          >
            انواع اتاق‌های اقامتگاه گیلمار
          </Typography>

          {/* متن توضیحات */}
          <Typography
            component="p"
            sx={{
              maxWidth: 620,
              mx: 'auto',
              mt: 1.5,
              mb: 0,
              color: '#4C4C4D',
              fontFamily: '"Abar Mid FaNum", sans-serif',
              fontWeight: 600,
              fontSize: 14,
              lineHeight: '32px',
            }}
          >
            اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل
            طبیعت آماده شده‌اند.
          </Typography>

          {/* ردیف ۴ کارت اتاق */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                sm: 'repeat(4, minmax(0, 1fr))',
              },
              justifyContent: 'center',
              gap: { xs: 1.5, sm: 2, md: 3 },
              mt: { xs: 3, md: 2.5 },
            }}
          >
            {rooms.map((room, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  backgroundColor: '#D9E1DC',
                  textAlign: 'right',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* تصویر کارت */}
                <Box
                  component="img"
                  src={room.image}
                  alt={room.title}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    transform: index === 0 ? 'none' : 'scale(1.2)',
                    transformOrigin: 'center',
                  }}
                />

                {/* گرادیان تیره پایین تصویر جهت خوانایی کامل متن */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.8) 100%)',
                  }}
                />

                {/* متون روی تصویر */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: 10, sm: 14 },
                    left: { xs: 10, sm: 14 },
                    bottom: { xs: 10, sm: 14 },
                    color: '#FFFFFF',
                    textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      m: 0,
                      fontFamily: '"Abar Mid FaNum", sans-serif',
                      fontSize: { xs: 13, sm: 15 },
                      fontWeight: 800,
                      lineHeight: 1.5,
                    }}
                  >
                    {room.title}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      m: 0,
                      mt: 0.25,
                      fontFamily: '"Abar Mid FaNum", sans-serif',
                      fontSize: { xs: 10, sm: 11 },
                      fontWeight: 600,
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {room.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
