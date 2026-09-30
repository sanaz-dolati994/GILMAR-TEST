'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import {
  IconLightPurple14,
  IconSkyBlue10,
  IconPink13,
  IconPeriwinkle10,
  IconYellow10,
  IconPurple15,
  EnergyBadgeIcon,
} from './FloatingIcons';

interface RuleItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  rotation: number;
}

const rules: RuleItem[] = [
  {
    id: 1,
    title: 'مراقبت از وسایل اقامتگاه',
    description:
      'مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.',
    imageSrc: '/images/icon-van%201.png',
    imageAlt: 'مراقبت از وسایل اقامتگاه',
    rotation: -6,
  },
  {
    id: 2,
    title: 'حفظ آرامش اقامتگاه',
    description:
      'برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سروصدای زیاد به ویژه در ساعات شب خودداری کنید.',
    imageSrc: '/images/Image.png',
    imageAlt: 'حفظ آرامش اقامتگاه',
    rotation: 3,
  },
  {
    id: 3,
    title: 'حفظ طبیعت و محیط زیست',
    description:
      'گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط زیست، فضای سبز و منابع طبیعی همراه ما باشید.',
    imageSrc: '/images/icon-binoculars%20(1)%201.png',
    imageAlt: 'حفظ طبیعت و محیط زیست',
    rotation: 6,
  },
];

export const RulesSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="guide"
      dir="rtl"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 562 },
        backgroundColor: '#F5F8FA',
        py: { xs: 6, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* آیکون‌های شناور پس‌زمینه */}
      <Box sx={{ position: 'absolute', top: '18%', right: '12%', pointerEvents: 'none' }}>
        <IconPink13 />
      </Box>
      <Box sx={{ position: 'absolute', top: '35%', right: '28%', pointerEvents: 'none' }}>
        <IconYellow10 />
      </Box>
      <Box sx={{ position: 'absolute', top: '55%', right: '6%', pointerEvents: 'none' }}>
        <IconLightPurple14 />
      </Box>
      <Box sx={{ position: 'absolute', top: '22%', left: '14%', pointerEvents: 'none' }}>
        <IconSkyBlue10 />
      </Box>
      <Box sx={{ position: 'absolute', top: '48%', left: '24%', pointerEvents: 'none' }}>
        <IconPurple15 />
      </Box>
      <Box sx={{ position: 'absolute', top: '65%', left: '8%', pointerEvents: 'none' }}>
        <IconPeriwinkle10 />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1024px !important',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* نشان بالای عنوان */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <EnergyBadgeIcon />
        </Box>

        {/* عنوان و توضیحات اصلی بخش */}
        <Box sx={{ textAlign: 'center', maxWidth: '720px' }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: 800,
              color: '#101828',
              lineHeight: { xs: '38px', md: '46px' },
              mb: 1.5,
            }}
          >
            همراهی برای حفظ آرامش و طبیعت گیلمار
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: '#4C4C4D',
              lineHeight: '32px',
            }}
          >
            برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.
          </Typography>
        </Box>

        {/* کارت‌ها و مسیر خط‌چین فیگما */}
        <Box sx={{ width: '100%', position: 'relative', mt: 2 }}>
          <svg
            style={{
              position: 'absolute',
              top: '60px',
              left: '5%',
              width: '90%',
              height: '80px',
              zIndex: 0,
              pointerEvents: 'none',
            }}
            viewBox="0 0 900 80"
            fill="none"
          >
            <path
              d="M 50,40 Q 250,70 450,40 T 850,30"
              stroke="#D0D5DD"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 6, md: 3 },
            }}
          >
            {rules.map((rule) => (
              <Box
                key={rule.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: { xs: '100%', md: '280px' },
                }}
              >
                {/* کارت سفید زاویه‌دار */}
                <Box
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: '28px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 20px 35px -8px rgba(16, 24, 40, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `rotate(${rule.rotation}deg)`,
                    transition: 'all 0.3s ease',
                    mb: 3,
                    '&:hover': {
                      transform: 'rotate(0deg) translateY(-4px)',
                      boxShadow: '0px 24px 40px -6px rgba(16, 24, 40, 0.12)',
                    },
                  }}
                >
                  <Image
                    src={rule.imageSrc}
                    alt={rule.imageAlt}
                    width={90}
                    height={90}
                    style={{
                      objectFit: 'contain',
                      transform: `rotate(${-rule.rotation}deg)`,
                    }}
                  />
                </Box>

                {/* تیتر قانون */}
                <Typography
                  component="h3"
                  sx={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: '#1A1A1A',
                    mb: 1,
                    lineHeight: '32px',
                  }}
                >
                  {rule.title}
                </Typography>

                {/* متن توضیح قانون */}
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#4C4C4D',
                    lineHeight: '28px',
                    maxWidth: '260px',
                  }}
                >
                  {rule.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RulesSection;
