import { Box } from "@mui/material";

type ReviewerAvatarProps = {
  src: string;
  size: number;
  top: number;
  left: number;
  zIndex?: number;
  mobileCenter?: boolean;
};

export default function ReviewerAvatar({
  src,
  size,
  top,
  left,
  zIndex = 5,
  mobileCenter = false,
}: ReviewerAvatarProps) {
  return (
    <Box
      component="img"
      src={src}
      alt=""
      sx={{
        position: "absolute",
        top: mobileCenter ? { xs: 175, md: `${top}px` } : `${top}px`,
        left: mobileCenter
          ? { xs: `calc(50% - ${size / 2}px)`, md: `${(left / 1169) * 100}%` }
          : `${(left / 1169) * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "cover",
        borderRadius: "100px",
        border: "3px solid #FFFFFF",
        boxSizing: "border-box",
        zIndex,
        display: mobileCenter ? "block" : { xs: "none", md: "block" },
      }}
    />
  );
}
