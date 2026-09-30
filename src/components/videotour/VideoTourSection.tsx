'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function VideoTourSection() {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '690px' },
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-start' },
        alignItems: 'center',
        py: 0,
        backgroundColor: 'transparent',
      }}
    >
      {/* فریم اصلی 1360px × 690px مطابق فیگما */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: 'calc(100vw - 80px)' },
          maxWidth: '1360px',
          height: { xs: 'auto', md: '690px' },
          minHeight: { xs: '620px', md: '690px' },
          ml: { xs: 'auto', md: 'max(80px, calc((100vw - 1360px) / 2))' },
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: '#0F1A12',
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          p: { xs: 3, md: 0 },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: '0 auto 0 0',
            width: '50%',
            backgroundImage: 'url("/images/package4%201.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* لایه ماسک سفید نقشه جهان و خطوط شبکه (Grid Lines) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1360 690"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ماسک نقشه با لبه‌های ارگانیک قاره‌ها */}
            <path
              d="M1360 0H620C590 50 640 100 600 130C560 160 520 120 480 170C440 220 490 280 430 300C370 320 390 350 480 350C530 350 540 370 510 380C470 390 450 360 410 360C380 360 370 390 400 420C440 460 520 420 540 450C520 470 470 480 440 490C400 500 360 480 330 520C300 560 360 630 450 690H1360V0Z"
              fill="#FFFFFF"
            />

            {/* خطوط متقاطع ظریف راهنمای نقشه */}
            <line
              x1="510"
              y1="220"
              x2="510"
              y2="460"
              stroke="#02ADF7"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />
            <line
              x1="260"
              y1="340"
              x2="680"
              y2="340"
              stroke="#02ADF7"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />

            {/* خطوط شبکه ملایم پشت متن */}
            <g stroke="#E8F1EB" strokeWidth="1" opacity="0.6">
              <line x1="680" y1="190" x2="980" y2="190" />
              <line x1="680" y1="240" x2="980" y2="240" />
              <line x1="680" y1="290" x2="980" y2="290" />
              <line x1="680" y1="340" x2="980" y2="340" />
              <line x1="680" y1="390" x2="980" y2="390" />
              <line x1="680" y1="440" x2="980" y2="440" />
              <line x1="740" y1="190" x2="740" y2="440" />
              <line x1="820" y1="190" x2="820" y2="440" />
              <line x1="900" y1="190" x2="900" y2="440" />
            </g>
          </svg>
        </Box>

        {/* دکمه Play با گرادیان و انیمیشن شناور روی تصویر جنگل در سمت چپ */}
        <Box
          component="button"
          aria-label="پخش تور ویدیویی"
          sx={{
            position: 'absolute',
            left: { xs: '50%', md: '180px' },
            top: { xs: '25%', md: '50%' },
            transform: { xs: 'translate(-50%, -50%)', md: 'translateY(-50%)' },
            zIndex: 3,
            background: 'none',
            border: 'none',
            p: 0,
            cursor: 'pointer',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease',
            '&:hover': {
              transform: {
                xs: 'translate(-50%, -50%) scale(1.08)',
                md: 'translateY(-50%) scale(1.08)',
              },
              filter: 'drop-shadow(0 12px 28px rgba(2, 173, 247, 0.45))',
            },
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="120" rx="60" fill="white" fillOpacity="0.3" />
            <rect x="21" y="21" width="78.125" height="78.125" rx="39.0625" fill="white" />
            <path
              d="M56.8377 70.7618C54.2262 72.1125 52.9204 72.7879 51.9602 72.2035C51 71.6191 51 70.1491 51 67.2089V55.1906C51 52.0097 51 50.4193 52.0277 49.8475C53.0555 49.2758 54.4068 50.1146 57.1094 51.7921L67.6709 58.3475C70.3255 59.9952 71.6528 60.819 71.6073 61.9824C71.5619 63.1458 70.1743 63.8635 67.3992 65.2989L56.8377 70.7618Z"
              fill="url(#play_btn_gradient)"
            />
            <defs>
              <linearGradient
                id="play_btn_gradient"
                x1="75.6791"
                y1="40.0715"
                x2="37.983"
                y2="68.3476"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#02ADF7" />
                <stop offset="1" stopColor="#26E05A" />
              </linearGradient>
            </defs>
          </svg>
        </Box>

        {/* قطب‌نمای ناوبری در پایین طرح */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '15px', md: '500px' },
            bottom: { xs: '10px', md: '45px' },
            transform: 'rotate(-15deg)',
            zIndex: 2,
            opacity: 0.85,
            pointerEvents: 'none',
          }}
        >
          <svg
            width="110"
            height="110"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              stroke="#D4A745"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="50" cy="50" r="34" stroke="#D4A745" strokeWidth="1" fill="none" />
            <polygon points="50,18 54,46 50,50 46,46" fill="#D4A745" />
            <polygon points="50,82 54,54 50,50 46,54" fill="#C99738" />
            <polygon points="82,50 54,54 50,50 54,46" fill="#E8BD56" />
            <polygon points="18,50 46,54 50,50 46,46" fill="#B88A30" />
            <circle cx="50" cy="50" r="4" fill="#D4A745" />
          </svg>
        </Box>

        {/* باکس محتوای متنی و دکمه سمت راست (Frame 2147238330 - عرض 502px) */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            width: { xs: '100%', md: '502px' },
            maxWidth: '502px',
            mr: { xs: 'auto', md: '90px' },
            ml: { xs: 'auto', md: 0 },
            mt: { xs: '240px', md: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            textAlign: 'right',
          }}
        >
          {/* آیکون تزئینی سبز رنگ با ابعاد دقیق فیگما (۹۲×۶۰) */}
          <Box
            sx={{
              width: '92px',
              height: '60px',
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
              <rect
                x="1.5"
                y="1.5"
                width="89"
                height="57"
                rx="28.5"
                stroke="#B8F3C4"
                strokeWidth="1.5"
              />
              <rect
                x="16"
                y="8"
                width="60"
                height="44"
                rx="22"
                stroke="#B8F3C4"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <rect x="30" y="14" width="32" height="32" rx="10" fill="#EAFCF0" />
              {/* آیکون دوربین ویدیو */}
              <path
                d="M40 25C38.8954 25 38 25.8954 38 27V33C38 34.1046 38.8954 35 40 35H47C48.1046 35 49 34.1046 49 33V27C49 25.8954 48.1046 25 47 25H40Z"
                fill="#26E05A"
              />
              <path
                d="M49 29L54 26.5V33.5L49 31V29Z"
                fill="#02ADF7"
              />
            </svg>
          </Box>

          {/* عنوان اصلی سکشن (32px ExtraBold) */}
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Abar Mid FaNum", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '26px', md: '32px' },
              lineHeight: '100%',
              letterSpacing: '-1.4px',
              color: '#1A1A1A',
              m: 0,
            }}
          >
            تور ویدیویی اقامتگاه گیلمار
          </Typography>

          {/* متن توضیحات (14px SemiBold با ارتفاع خط 32px) */}
          <Typography
            sx={{
              fontFamily: '"Abar Mid FaNum", sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '32px',
              color: '#4C4C4D',
              m: 0,
            }}
          >
            در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال و هوای دلنشین آن را تجربه کنید.
          </Typography>

          {/* دکمه «اقامت در گیلمار» (164px × 46px با گرادیان و گوشه کپسولی) */}
          <Button
            disableElevation
            sx={{
              width: '164px',
              height: '46px',
              minWidth: '164px',
              borderRadius: '800000px',
              background: 'radial-gradient(ellipse 100% 27.92% at 50% 0%, rgba(255,255,255,.24), transparent), linear-gradient(220deg, #02ADF7 0%, #26E05A 100%)',
              boxShadow: '0px 1px 0px rgba(255,255,255,.16) inset, 0px 1px 2px -1px rgba(146,146,146,.40)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              direction: 'ltr',
              p: 0,
              mt: '8px',
              textTransform: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #019ce0 0%, #22ce53 100%)',
                transform: 'translateY(-1px)',
                boxShadow: '0px 6px 16px rgba(2, 173, 247, 0.35)',
              },
            }}
          >
            {/* دایره سفید حاوی فلش هدایت */}
            <Box
              sx={{
              width: '34px',
              height: '34px',
              minWidth: '34px',
              borderRadius: '50%',
              backgroundColor: '#F7F8F8',
              border: '1.2px solid #FFFFFF',
              boxShadow: '-4px -4px 6px rgba(186,200,209,.30) inset, 0px 4px 6px rgba(0,0,0,.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.8 5.8L7.2 10l5.6 4.2" stroke="url(#tour-cta-arrow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="tour-cta-arrow" x1="13" y1="5" x2="6" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02ADF7" />
                <stop offset="1" stopColor="#26E05A" />
              </linearGradient>
            </defs>
          </svg>

            <Typography
              component="span"
              sx={{
                fontFamily: '"Abar Mid FaNum", sans-serif',
                fontWeight: 800,
                fontSize: '14px',
                color: '#FFFFFF',
                lineHeight: 1,
                width: '92px',
                textAlign: 'center',
              }}
            >
              اقامت در گیلمار
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}



