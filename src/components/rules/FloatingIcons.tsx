'use client';
import React from 'react';
import Box from '@mui/material/Box';

export const IconLightPurple14 = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" rx="2" transform="matrix(-0.258819 0.965926 0.965926 0.258819 2.65674 -0.448975)" fill="#DCB9F0"/>
  </svg>
);

export const IconSkyBlue10 = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="8" rx="2" transform="matrix(0.939693 -0.34202 -0.34202 -0.939693 2.17334 9.69092)" fill="#9AC8FF"/>
  </svg>
);

export const IconPink13 = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" rx="4" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 13.7991 2.20776)" fill="#FABDC1"/>
  </svg>
);

export const IconPeriwinkle10 = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="8" rx="2" transform="matrix(0.939693 -0.34202 -0.34202 -0.939693 2.17334 9.69092)" fill="#92A5EF"/>
  </svg>
);

export const IconYellow10 = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="8" rx="2" transform="matrix(0.939693 -0.34202 -0.34202 -0.939693 2.17334 9.69092)" fill="#FFD166"/>
  </svg>
);

export const IconPurple15 = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="12" height="12" rx="3" transform="matrix(-0.866025 0.5 0.5 0.866025 10.3923 -2)" fill="#CDB4DB"/>
  </svg>
);

export const EnergyBadgeIcon = () => (
  <svg width="92" height="60" viewBox="0 0 92 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="92" height="60" rx="30" fill="#F2F4F7"/>
    <path d="M46 18L35 32H45L44 42L57 28H47L46 18Z" fill="#F79009"/>
  </svg>
);

export const FloatingIcons = () => {
  return (
    <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: '18%', right: '12%' }}><IconPink13 /></Box>
      <Box sx={{ position: 'absolute', top: '35%', right: '28%' }}><IconYellow10 /></Box>
      <Box sx={{ position: 'absolute', top: '55%', right: '6%' }}><IconLightPurple14 /></Box>
      <Box sx={{ position: 'absolute', top: '22%', left: '14%' }}><IconSkyBlue10 /></Box>
      <Box sx={{ position: 'absolute', top: '48%', left: '24%' }}><IconPurple15 /></Box>
      <Box sx={{ position: 'absolute', top: '65%', left: '8%' }}><IconPeriwinkle10 /></Box>
    </Box>
  );
};

export default FloatingIcons;
